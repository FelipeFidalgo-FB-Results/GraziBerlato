#!/usr/bin/env node
// Unified build pipeline for the Imersão Re-Encontro landing page.
//
// Takes the standalone HTML exported from Claude Design and produces:
//   - index.html  (lean: ~35KB, inlined CSS, CDN React, Google Fonts)
//   - js/app.js   (pre-transpiled JSX)
//
// Reuses Felipe's optimized WebPs from Fotos/ via window.__resources.
//
// Usage:
//   node _build/build.js "<path-to-standalone.html>"
//   node _build/build.js          # auto-detects newest standalone html

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const vm = require('vm');

const HERE = path.resolve(__dirname);
const ROOT = path.resolve(HERE, '..');

// === 1) Locate the standalone HTML ===
let inputPath = process.argv[2];
if (!inputPath) {
  const candidates = fs.readdirSync(ROOT)
    .filter(f => /standalone.*\.html$/i.test(f))
    .map(f => ({ f, mtime: fs.statSync(path.join(ROOT, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  if (!candidates.length) { console.error('No standalone HTML found in ' + ROOT); process.exit(1); }
  inputPath = path.join(ROOT, candidates[0].f);
}
console.log('Input:', path.basename(inputPath));

// === 2) Auto-detect bundle / sections / template lines ===
const lines = fs.readFileSync(inputPath, 'utf8').split('\n');

function findLineAfter(tag, start = 0) {
  for (let i = start; i < lines.length; i++) {
    if (lines[i].includes(tag)) return i + 1; // payload is the next line
  }
  return -1;
}

// Two encoding schemes seen so far:
//   v6: bundle inline as JSON object on a giant line followed by section manifest
//   v7: <script type="__bundler/manifest"> ... </script> wraps the bundle JSON
let bundleLine, sectionsLine, templateLine;

// Match the actual HTML script-open tags, not JS code that READS them.
const isOpenTag = (l, type) =>
  /^\s*<script\s+type=["']__bundler\/[a-z_]+["']\s*>/.test(l) && l.includes('"__bundler/' + type + '"');

const manifestTagLine = lines.findIndex(l => isOpenTag(l, 'manifest'));
const extResTagLine = lines.findIndex(l => isOpenTag(l, 'ext_resources'));
const templateTagLine = lines.findIndex(l => isOpenTag(l, 'template') || isOpenTag(l, 'page'));

if (manifestTagLine >= 0) {
  bundleLine = manifestTagLine + 2;          // 1-indexed line right after the opening tag
  sectionsLine = extResTagLine + 2;
  // Template payload follows its own opening tag if present, otherwise locate by content.
  if (templateTagLine >= 0) {
    templateLine = templateTagLine + 2;
  } else {
    for (let i = extResTagLine + 2; i < lines.length; i++) {
      if (lines[i].startsWith('"<!DOCTYPE') || lines[i].startsWith('"<!doctype')) { templateLine = i + 1; break; }
    }
  }
} else {
  // Old layout: line 171 = bundle, 175 = sections, 179 = template
  bundleLine = 171; sectionsLine = 175; templateLine = 179;
}

console.log(`Lines  bundle=${bundleLine}  sections=${sectionsLine}  template=${templateLine}`);

const bundleStr = lines[bundleLine - 1];
const sectionsStr = lines[sectionsLine - 1];
let templateRaw = lines[templateLine - 1];

if (!bundleStr || !sectionsStr || !templateRaw) {
  console.error('Failed to extract bundle/sections/template lines.');
  process.exit(1);
}

// === 3) Parse + decompress bundle ===
const bundle = JSON.parse(bundleStr);
const sections = JSON.parse(sectionsStr);
console.log('Assets in bundle:', Object.keys(bundle).length);
console.log('Sections:', sections.length);

// === 4) Walk bundle, decode each asset, find the JSX we need ===
let appJsx = null;          // the page JSX (text, type unknown — varies)
let babelStandalone = null; // we use this to transpile the JSX
const seen = { images: 0, fonts: 0, js: 0, jsx: 0, other: 0 };

for (const id of Object.keys(bundle)) {
  const a = bundle[id];
  let buf = Buffer.from(a.data, 'base64');
  if (a.compressed) {
    try { buf = zlib.gunzipSync(buf); } catch (_) {}
  }
  if (a.mime && a.mime.startsWith('image/')) seen.images++;
  else if (a.mime && a.mime.includes('font')) seen.fonts++;
  else if (a.mime === 'text/javascript' || a.mime === 'application/javascript') {
    seen.js++;
    const txt = buf.toString('utf8');
    if (txt.includes('Babel.transform') || txt.includes('@babel/standalone')) babelStandalone = txt;
    if (/createRoot.*<App/.test(txt) || (txt.includes('TWEAK_DEFAULTS') && txt.includes('createRoot'))) {
      appJsx = txt;
    }
  } else {
    seen.other++;
    const txt = buf.toString('utf8');
    if (txt.includes('TWEAK_DEFAULTS') && txt.includes('ReactDOM.createRoot')) appJsx = txt;
  }
}

console.log('Bundle stats:', seen);

if (!babelStandalone) { console.error('Babel-standalone not found in bundle.'); process.exit(1); }
if (!appJsx)          { console.error('Page JSX not found in bundle.'); process.exit(1); }

// === 5) Transpile JSX with Babel-standalone ===
const sandbox = { window: {}, self: {}, console };
sandbox.window.self = sandbox.window;
vm.createContext(sandbox);
vm.runInContext(babelStandalone, sandbox);
const Babel = sandbox.Babel || sandbox.window.Babel;
if (!Babel) { console.error('Failed to load Babel into sandbox.'); process.exit(1); }

const STUB = `
// === Tweaks-panel stubs (editor-only components removed for production) ===
function useTweaks(defaults) {
  const [t] = React.useState(defaults);
  return [t, () => {}];
}
function TweaksPanel(props) { return null; }
function TweakSection(props) { return null; }
function TweakSelect(props) { return null; }
function TweakColor(props) { return null; }
// === End stubs ===

`;

const transpiled = Babel.transform(STUB + appJsx, { presets: ['react'] }).code;
const jsDir = path.join(ROOT, 'js');
fs.mkdirSync(jsDir, { recursive: true });
fs.writeFileSync(path.join(jsDir, 'app.js'), transpiled);
console.log('app.js written:', (transpiled.length / 1024).toFixed(1) + ' KB');

// === 6) Decode template (it's a JSON-encoded string) and extract page CSS ===
function jsonUnescape(s) {
  if (s.startsWith('"') && s.endsWith('"')) s = s.slice(1, -1);
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\u002F/gi, '/')
    .replace(/\\u003C/gi, '<')
    .replace(/\\u003E/gi, '>')
    .replace(/\\u0026/gi, '&')
    .replace(/\\u0027/gi, "'")
    .replace(/\\\\/g, '\\');
}

const template = jsonUnescape(templateRaw);
const tLines = template.split('\n');

// Find the SECOND <style> block (the first is @font-face declarations).
const styleOpens = []; const styleCloses = [];
tLines.forEach((l, i) => { if (l.includes('<style>')) styleOpens.push(i); if (l.includes('</style>')) styleCloses.push(i); });
if (styleOpens.length < 2 || styleCloses.length < 2) {
  console.error('Could not locate page CSS block.'); process.exit(1);
}
const cssOpenLine = styleOpens[styleOpens.length - 1];
const cssCloseLine = styleCloses[styleCloses.length - 1];

// Slice CSS, including the chars after `<style>` on the open line and before `</style>` on the close line.
const cssOpenLineStr = tLines[cssOpenLine];
const styleIdx = cssOpenLineStr.indexOf('<style>');
const headPart = cssOpenLineStr.slice(styleIdx + '<style>'.length);
const cssBody = [headPart, ...tLines.slice(cssOpenLine + 1, cssCloseLine), tLines[cssCloseLine].slice(0, tLines[cssCloseLine].indexOf('</style>'))].join('\n');
console.log('CSS extracted:', (cssBody.length / 1024).toFixed(1) + ' KB');

// === 7) Build resources map (Felipe's WebPs in Fotos/) ===
const FOTOS = 'Fotos';
const enc = name => name.split('/').map(encodeURIComponent).join('/');
const resources = {
  heroDesktop: `${FOTOS}/${enc('banner-imersa-pc-v2.webp')}`,
  heroMobile:  `${FOTOS}/${enc('banner-imersao-celular.webp')}`,
  secao4:      `${FOTOS}/${enc('seção-4.webp')}`,
  secao7:      `${FOTOS}/${enc('seção-7.webp')}`,
  depoimento1: `${FOTOS}/${enc('depoimento-1.webp')}`,
  depoimento2: `${FOTOS}/${enc('depoimento-2.webp')}`,
  depoimento3: `${FOTOS}/${enc('depoimento-3.webp')}`,
  depoimento4: `${FOTOS}/${enc('depoimento-4.webp')}`,
  depoimento5: `${FOTOS}/${enc('depoimento-5.webp')}`,
  espaco1: `${FOTOS}/${enc('seção-6-1.webp')}`,
  espaco2: `${FOTOS}/${enc('seção-6-2.webp')}`,
  espaco3: `${FOTOS}/${enc('seção-6-3.webp')}`,
  espaco4: `${FOTOS}/${enc('seção-6-4.webp')}`,
  espaco5: `${FOTOS}/${enc('seção-6-5.webp')}`,
  espaco6: `${FOTOS}/${enc('seção-6-6.webp')}`,
  espaco7: `${FOTOS}/${enc('seção-6-7.webp')}`,
  espaco8: `${FOTOS}/${enc('seção-6-8.webp')}`,
};

// Verify each file exists; warn on misses
for (const [id, rel] of Object.entries(resources)) {
  const abs = path.join(ROOT, decodeURIComponent(rel));
  if (!fs.existsSync(abs)) console.warn('  MISSING:', rel, '(used by', id + ')');
}

// === 8) Compose index.html ===
const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Imersão Re-Encontro · Grazi Berlato</title>
<meta name="description" content="Imersão Re-Encontro com Grazi Berlato — uma experiência de transformação para mulheres que desejam silenciar o barulho do mundo e se reconectar com a própria essência. 21 de Maio de 2026 · Chácara do Lago, São José dos Campos.">
<meta property="og:title" content="Imersão Re-Encontro · Grazi Berlato">
<meta property="og:description" content="Mulheres curadas para transbordar. Uma experiência única de transformação. 21 de Maio de 2026.">
<meta property="og:type" content="website">
<meta property="og:image" content="${resources.heroDesktop}">

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2799267970425402');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2799267970425402&ev=PageView&noscript=1"/></noscript>
<!-- End Meta Pixel Code -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://unpkg.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet">

<link rel="preload" as="image" href="${resources.heroDesktop}" fetchpriority="high">

<style>
${cssBody}
</style>
</head>
<body>
<div id="root"></div>

<script>
window.__resources = ${JSON.stringify(resources, null, 2)};
</script>

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="js/app.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');
console.log('index.html written:', (html.length / 1024).toFixed(1) + ' KB');
console.log('\n✓ Build complete.');
