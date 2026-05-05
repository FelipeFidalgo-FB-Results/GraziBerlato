// === Tweaks-panel stubs (editor-only components removed for production) ===
function useTweaks(defaults) {
  const [t] = React.useState(defaults);
  return [t, () => {}];
}
function TweaksPanel(props) {
  return null;
}
function TweakSection(props) {
  return null;
}
function TweakSelect(props) {
  return null;
}
function TweakColor(props) {
  return null;
}
// === End stubs ===

/* global React, ReactDOM */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "wine": "#9a3a23",
  "wineDeep": "#702a18",
  "forest": "#3d4f3a",
  "forestDeep": "#283627",
  "cream": "#efe4d2",
  "creamSoft": "#f7eede",
  "gold": "#c98a3c"
} /*EDITMODE-END*/;
const __R = (id, fallback) => typeof window !== 'undefined' && window.__resources && window.__resources[id] || fallback;
const TESTIMONIAL_IMAGES = [{
  src: __R('depoimento1', "assets/depoimento-1.png"),
  alt: "Depoimento: A experiência ontem foi muito agradável e leve…",
  author: "Camila R."
}, {
  src: __R('depoimento2', "assets/depoimento-2.png"),
  alt: "Depoimento: a sensação de paz é impressionante. Gratidão.",
  author: "Ana Paula S."
}, {
  src: __R('depoimento3', "assets/depoimento-3.png"),
  alt: "Depoimento: Bom dia Grazi! Estou mais disposta e motivada…",
  author: "Letícia M."
}, {
  src: __R('depoimento4', "assets/depoimento-4.png"),
  alt: "Depoimento: Feedback, para mim foi maravilhoso…",
  author: "Marina F."
}, {
  src: __R('depoimento5', "assets/depoimento-5.png"),
  alt: "Depoimento: Foi maravilhosa a imersão! Pra mim foi transformadora…",
  author: "Juliana P."
}];
const TESTIMONIALS = [{
  quote: "O dia foi incrível. Saí de lá outra mulher — mais leve, mais inteira, mais minha.",
  author: "Camila R.",
  city: "São José dos Campos"
}, {
  quote: "Para mim foi transformador. Uma conexão profunda com algo que eu já tinha esquecido que existia em mim.",
  author: "Letícia M.",
  city: "Jacareí"
}, {
  quote: "A sensação de paz é impressionante. Voltei pra casa diferente. Gratidão.",
  author: "Ana Paula S.",
  city: "Taubaté"
}, {
  quote: "Encontrei um espaço para chorar, rir e respirar fundo. A Grazi conduz com uma escuta rara.",
  author: "Marina F.",
  city: "São Paulo"
}];
function Hero({
  onScrollToCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: __R('heroDesktop', 'assets/foto-hero-desktop.png'),
    alt: "Grazi \xE0 beira do lago"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "hero-nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand"
  }, "Grazi Berlato"), /*#__PURE__*/React.createElement("span", {
    className: "handle"
  }, "@grazi_berlato", /*#__PURE__*/React.createElement("span", {
    className: "check",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow eyebrow"
  }, "Imers\xE3o Re-Encontro \xB7 Edi\xE7\xE3o 21.05.2026"), /*#__PURE__*/React.createElement("h1", null, "Mulheres curadas", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "para transbordar.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Uma experi\xEAncia \xFAnica de transforma\xE7\xE3o para voc\xEA silenciar o barulho do mundo e se reconectar com sua ess\xEAncia."), /*#__PURE__*/React.createElement("button", {
    className: "cta",
    onClick: onScrollToCTA
  }, "Quero participar da imers\xE3o", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-7.6-7-12a7 7 0 1 1 14 0c0 4.4-7 12-7 12z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  })), "S\xE3o Jos\xE9 dos Campos \xB7 Ch\xE1cara do Lago"), /*#__PURE__*/React.createElement("span", {
    className: "item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 3v4M16 3v4"
  })), "21 de Maio \xB7 2026"), /*#__PURE__*/React.createElement("span", {
    className: "item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })), "8h \xE0s 16h30"))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-indicator"
  }, /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), " Role para descobrir"));
}
function SectionId() {
  return /*#__PURE__*/React.createElement("section", {
    className: "s-id",
    "data-screen-label": "02 Identifica\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ornament"
  }, "\xB7 \xB7 \xB7"), /*#__PURE__*/React.createElement("h2", null, "O tempo para si que voc\xEA tanto merece e deseja"), /*#__PURE__*/React.createElement("p", null, "Em nossa busca por estabilidade, seguran\xE7a, rotina e fam\xEDlia, \xE0s vezes nos perdemos no meio do caminho e esquecemos de quem somos. Maternidade, carreira, relacionamentos e fam\xEDlia s\xE3o s\xF3 alguns dos in\xFAmeros pap\xE9is que, na maioria das vezes, voc\xEA tenta dar conta. Por isso, em meio a tantos pap\xE9is e tarefas, responsabilidades que a vida nos coloca, existe um ponto: voc\xEA \xE9 a prioridade."), /*#__PURE__*/React.createElement("p", null)));
}
function SectionFor({
  onScrollToCTA
}) {
  const items = ["Conseguir reconstruir o controle e equilíbrio entre sua rotina pessoal, profissional e emocional e familiar", "Lidar com ansiedade, medo e dor", "Resgatar sua autoestima, essência e autenticidade", "Sentir mais clareza para tomar decisões assertivas", "Parar de carregar sozinha e recuperar a leveza e o prazer no dia a dia"];
  return /*#__PURE__*/React.createElement("section", {
    className: "s-for",
    "data-screen-label": "03 Para quem \xE9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-for-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(246,239,228,.6)"
    }
  }, "Para quem \xE9"), /*#__PURE__*/React.createElement("h2", null, "Uma imers\xE3o para mulheres que ", /*#__PURE__*/React.createElement("em", null, "querem"), ":"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }), /*#__PURE__*/React.createElement("div", {
    className: "s-for-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta cta-light",
    onClick: onScrollToCTA
  }, "Quero participar", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "s-for-list"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", null, t)))))));
}
function SectionLive({
  onScrollToCTA
}) {
  const items = ["Dinâmicas terapêuticas guiadas", "Vivências emocionais profundas de cura", "Exercícios de reconexão com a sua essência", "Práticas de mindfulness e escuta interna", "Conexão com a natureza em um espaço acolhedor"];
  return /*#__PURE__*/React.createElement("section", {
    className: "s-live",
    "data-screen-label": "04 O que voc\xEA vai viver"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-live-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--wine)"
    }
  }, "O dia inteiro"), /*#__PURE__*/React.createElement("h2", null, "Tudo o que voc\xEA vai viver ", /*#__PURE__*/React.createElement("em", null, "nesse dia"), "."), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "A imers\xE3o Re-Encontro \xE9 uma experi\xEAncia \xFAnica, que conduz voc\xEA mulher a resgatar sua ess\xEAncia mais profunda, conhecer quem voc\xEA realmente \xE9, alinhando sua hist\xF3ria com a nova pessoa e a nova vida."), /*#__PURE__*/React.createElement("ul", {
    className: "s-live-list"
  }, items.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("button", {
    className: "cta",
    onClick: onScrollToCTA
  }, "Quero participar da imers\xE3o", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "s-live-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: __R('secao4', 'assets/foto-secao4.jpg'),
    alt: "Grazi \xE0 beira do lago com cesta de flores"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cap"
  })))));
}
function SectionTesti({
  onScrollToCTA
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const N = TESTIMONIAL_IMAGES.length;
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % N), 7000);
    return () => clearInterval(t);
  }, [paused, N]);
  const go = n => setIdx((n % N + N) % N);
  return /*#__PURE__*/React.createElement("section", {
    className: "s-testi",
    "data-screen-label": "05 Depoimentos",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-testi-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(246,239,228,.6)"
    }
  }, "Depoimentos"), /*#__PURE__*/React.createElement("h2", null, "O que essas mulheres t\xEAm a dizer.")), /*#__PURE__*/React.createElement("div", {
    className: "testi-stage-img",
    "aria-live": "polite"
  }, TESTIMONIAL_IMAGES.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "testi-img-card" + (i === idx ? " active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "testi-img-frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: t.src,
    alt: t.alt,
    loading: "lazy"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "testi-controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "testi-arrow",
    "aria-label": "Anterior",
    onClick: () => go(idx - 1)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "testi-dots",
    role: "tablist"
  }, TESTIMONIAL_IMAGES.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "testi-dot" + (i === idx ? " active" : ""),
    onClick: () => go(i),
    "aria-label": "Depoimento " + (i + 1)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "testi-arrow",
    "aria-label": "Pr\xF3ximo",
    onClick: () => go(idx + 1)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "s-testi-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta cta-light",
    onClick: onScrollToCTA
  }, "Quero viver isso tamb\xE9m", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  })))));
}
function SectionSpace() {
  const photos = [{
    src: __R('espaco1', "assets/espaco-1.jpg"),
    tag: "Piscina"
  }, {
    src: __R('espaco2', "assets/espaco-2.jpg"),
    tag: "Vivência ao ar livre"
  }, {
    src: __R('espaco3', "assets/espaco-3.jpg"),
    tag: "Roda · jardim"
  }, {
    src: __R('espaco4', "assets/espaco-4.jpg"),
    tag: "Grupo · 2025"
  }, {
    src: __R('espaco5', "assets/espaco-5.jpg"),
    tag: "Beira do lago"
  }, {
    src: __R('espaco6', "assets/espaco-6.jpg"),
    tag: "Quiosque"
  }, {
    src: __R('espaco7', "assets/espaco-7.jpg"),
    tag: "Roda · fogo"
  }, {
    src: __R('espaco8', "assets/espaco-8.jpg"),
    tag: "Lago · vista"
  }];
  const N = photos.length;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % N), 5500);
    return () => clearInterval(t);
  }, [paused, N]);
  const go = n => setIdx((n % N + N) % N);
  return /*#__PURE__*/React.createElement("section", {
    className: "s-space",
    "data-screen-label": "06 O espa\xE7o",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-space-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--forest)"
    }
  }, "O espa\xE7o"), /*#__PURE__*/React.createElement("h2", null, "O para\xEDso perfeito para o seu ", /*#__PURE__*/React.createElement("em", null, "re-encontro"), ".")), /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", {
    className: "space-carousel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-stage",
    "aria-live": "polite"
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "space-slide" + (i === idx ? " active" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.tag,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "space-tag"
  }, p.tag)))), /*#__PURE__*/React.createElement("button", {
    className: "space-arrow space-arrow-prev",
    "aria-label": "Anterior",
    onClick: () => go(idx - 1)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 6l-6 6 6 6"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "space-arrow space-arrow-next",
    "aria-label": "Pr\xF3xima",
    onClick: () => go(idx + 1)
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-dots",
    role: "tablist"
  }, photos.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "space-dot" + (i === idx ? " active" : ""),
    onClick: () => go(i),
    "aria-label": "Foto " + (i + 1)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-counter"
  }, String(idx + 1).padStart(2, "0"), " / ", String(N).padStart(2, "0")))));
}
function SectionAbout() {
  return /*#__PURE__*/React.createElement("section", {
    className: "s-about",
    "data-screen-label": "07 Sobre a Grazi",
    style: {
      backgroundColor: "rgb(31, 58, 46)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-about-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: __R('secao7', 'assets/foto-secao7.jpg'),
    alt: "Grazi com bouquet de flores"
  }), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Sobre")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgb(184, 138, 62)"
    }
  }, "Quem conduz"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "rgb(251, 246, 236)"
    }
  }, "Grazi ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "rgb(184, 138, 62)"
    }
  }, "Berlato")), /*#__PURE__*/React.createElement("p", {
    className: "role",
    style: {
      color: "rgb(184, 138, 62)"
    }
  }, "An\xE1lise corporal\xA0"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgb(251, 246, 236)"
    }
  }, "Se voc\xEA ainda n\xE3o me conhece, muito prazer! Sou Grazi Berlato. Com mais de 20 anos de experi\xEAncia em gest\xE3o e lideran\xE7a, sempre fui apaixonada por entender pessoas e desenvolver talentos. Mas foi atrav\xE9s das minhas pr\xF3prias transforma\xE7\xF5es que encontrei um prop\xF3sito maior: ajudar outras mulheres a se reconectarem com sua ess\xEAncia. Me formei em An\xE1lise Corporal pelo Instituto O Corpo Explica e, desde ent\xE3o, venho aprofundando meus conhecimentos com cursos e viv\xEAncias terap\xEAuticas. Hoje, meu trabalho \xE9 conduzir mulheres em jornadas profundas de autoconhecimento, cura emocional e reconex\xE3o com quem elas realmente s\xE3o."), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("div", {
    className: "s-about-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  })))))));
}
function SectionSignup({
  formRef
}) {
  const waLink = "https://wa.me/5512996079289?text=Oi%20Grazi!%20Vim%20da%20p%C3%A1gina%20da%20Imers%C3%A3o%20Re-Encontro%20e%20gostaria%20de%20participar!";
  return /*#__PURE__*/React.createElement("section", {
    className: "s-signup",
    id: "signup",
    ref: formRef,
    "data-screen-label": "08 Inscri\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "s-signup-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signup-steps signup-cta-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--wine)"
    }
  }, "Inscri\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", null, "Pronta para ", /*#__PURE__*/React.createElement("em", null, "se inscrever"), "?"), /*#__PURE__*/React.createElement("p", {
    className: "signup-sub"
  }, "Clique abaixo e fale diretamente com a Grazi no WhatsApp para garantir sua vaga."), /*#__PURE__*/React.createElement("a", {
    href: waLink,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "cta cta-wine cta-whatsapp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wa-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "20",
    height: "20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.001 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.594 4.467 1.722 6.41L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.252 1.605h.005c7.07 0 12.8-5.73 12.8-12.8 0-3.42-1.332-6.635-3.751-9.054A12.713 12.713 0 0 0 16.001 3.2zm0 23.36h-.004a10.61 10.61 0 0 1-5.41-1.482l-.388-.23-3.886 1.016 1.037-3.79-.253-.4a10.598 10.598 0 0 1-1.626-5.673c0-5.864 4.772-10.636 10.636-10.636a10.567 10.567 0 0 1 7.52 3.118 10.564 10.564 0 0 1 3.116 7.523c0 5.864-4.772 10.554-10.742 10.554zm5.83-7.957c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.951-.847-1.593-1.894-1.78-2.214-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.524-.54-.72-.55l-.613-.011a1.18 1.18 0 0 0-.853.4c-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.146 3.094 1.306 3.308.16.213 2.255 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.466.21 2.018.127.616-.092 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.134-.293-.213-.613-.373z"
  }))), "GARANTIR MINHA VAGA NO WHATSAPP", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "invest"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "rgba(246,239,228,.7)"
    }
  }, "Investimento"), /*#__PURE__*/React.createElement("h2", {
    className: "invest-h2"
  }, "Um dia que ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "#fbf6ec"
    }
  }, "n\xE3o tem pre\xE7o.\xA0"), "Venha viver essa experi\xEAncia ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#d4a44a"
    }
  }, "por apenas:")), /*#__PURE__*/React.createElement("div", {
    className: "price-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "price-installment"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b88a3e"
    }
  }, "12x de")), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, /*#__PURE__*/React.createElement("small", {
    style: {
      color: "rgb(251, 246, 236)"
    }
  }, "R$"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(251, 246, 236)"
    }
  }, "35,"), /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(251, 246, 236)"
    }
  }, "00"))))), /*#__PURE__*/React.createElement("div", {
    className: "price-cash"
  }, /*#__PURE__*/React.createElement("span", null, "ou \xE0 vista"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "R$ 350,00"))), /*#__PURE__*/React.createElement("div", {
    className: "invest-incl"
  }, "Inclui:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Dia inteiro de viv\xEAncias (8h\u201316h30)"), /*#__PURE__*/React.createElement("li", null, "Almo\xE7o completo na Ch\xE1cara do Lago"), /*#__PURE__*/React.createElement("li", null, "Material de apoio e lembran\xE7a da imers\xE3o"), /*#__PURE__*/React.createElement("li", null, "Roda de encerramento e acolhimento individual")))))));
}
function Footer({
  onScrollToCTA
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "s-footer",
    "data-screen-label": "09 Rodap\xE9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "urgency"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse",
    "aria-hidden": "true"
  }), "Aten\xE7\xE3o \xB7 Apenas 15 vagas"), /*#__PURE__*/React.createElement("h2", null, "Esta imers\xE3o \xE9 para mulheres dispostas a se encontrar. Se voc\xEA sentiu, \xE9 com voc\xEA."), /*#__PURE__*/React.createElement("button", {
    className: "cta",
    onClick: onScrollToCTA
  }, "Garantir minha vaga", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 GRAZI BERLATO"), /*#__PURE__*/React.createElement("span", null, "S\xE3o Jos\xE9 dos Campos \xB7 SP"), /*#__PURE__*/React.createElement("span", null, "IMERS\xC3O RE-ENCONTRO"))));
}
function StickyCTA({
  visible,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky-cta" + (visible ? " visible" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta cta-wine",
    onClick: onClick
  }, "Quero participar \xB7 21.05", /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    "aria-hidden": "true"
  })));
}

/* ─── Tweaks ─── */
const PALETTES = {
  "Vinho · Floresta · Creme": {
    wine: "#5b1a2e",
    wineDeep: "#3f0f1f",
    forest: "#1f3a2e",
    forestDeep: "#142b22",
    cream: "#f6efe4",
    creamSoft: "#fbf6ec",
    gold: "#b88a3e"
  },
  "Borgonha · Musgo · Marfim": {
    wine: "#6b1f3a",
    wineDeep: "#481325",
    forest: "#2a4632",
    forestDeep: "#1a2e22",
    cream: "#f1e7d6",
    creamSoft: "#f8f1e3",
    gold: "#c79a4d"
  },
  "Terracota · Sálvia · Areia": {
    wine: "#9a3a23",
    wineDeep: "#702a18",
    forest: "#3d4f3a",
    forestDeep: "#283627",
    cream: "#efe4d2",
    creamSoft: "#f7eede",
    gold: "#c98a3c"
  },
  "Ameixa · Pinho · Pérola": {
    wine: "#4a1530",
    wineDeep: "#320d20",
    forest: "#19342a",
    forestDeep: "#0f231c",
    cream: "#ece4d4",
    creamSoft: "#f4ede0",
    gold: "#a8823a"
  }
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [paletteName, setPaletteName] = useState("Terracota · Sálvia · Areia");
  const [stickyVisible, setStickyVisible] = useState(false);
  const formRef = useRef(null);

  // Apply CSS vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--wine", t.wine);
    r.style.setProperty("--wine-deep", t.wineDeep);
    r.style.setProperty("--forest", t.forest);
    r.style.setProperty("--forest-deep", t.forestDeep);
    r.style.setProperty("--cream", t.cream);
    r.style.setProperty("--cream-soft", t.creamSoft);
    r.style.setProperty("--gold", t.gold);
  }, [t]);

  // Sticky CTA visibility
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setStickyVisible(y > window.innerHeight * 0.6 && y < max - 800);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToCTA = useCallback(() => {
    if (!formRef.current) return;
    const top = formRef.current.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({
      top,
      behavior: "smooth"
    });
    setTimeout(() => {
      const input = document.getElementById("f-name");
      if (input) input.focus({
        preventScroll: true
      });
    }, 700);
  }, []);
  const applyPalette = name => {
    setPaletteName(name);
    const p = PALETTES[name];
    if (!p) return;
    setTweak(p);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onScrollToCTA: scrollToCTA
  }), /*#__PURE__*/React.createElement(SectionId, null), /*#__PURE__*/React.createElement(SectionFor, {
    onScrollToCTA: scrollToCTA
  }), /*#__PURE__*/React.createElement(SectionLive, {
    onScrollToCTA: scrollToCTA
  }), /*#__PURE__*/React.createElement(SectionTesti, {
    onScrollToCTA: scrollToCTA
  }), /*#__PURE__*/React.createElement(SectionSpace, null), /*#__PURE__*/React.createElement(SectionAbout, null), /*#__PURE__*/React.createElement(SectionSignup, {
    formRef: formRef
  }), /*#__PURE__*/React.createElement(Footer, {
    onScrollToCTA: scrollToCTA
  }), /*#__PURE__*/React.createElement(StickyCTA, {
    visible: stickyVisible,
    onClick: scrollToCTA
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks \xB7 Paleta"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Paleta"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Combina\xE7\xE3o",
    value: paletteName,
    options: Object.keys(PALETTES),
    onChange: applyPalette
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Cores individuais"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Vinho",
    value: t.wine,
    onChange: v => setTweak('wine', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Vinho \xB7 escuro",
    value: t.wineDeep,
    onChange: v => setTweak('wineDeep', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Floresta",
    value: t.forest,
    onChange: v => setTweak('forest', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Floresta \xB7 escuro",
    value: t.forestDeep,
    onChange: v => setTweak('forestDeep', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Creme",
    value: t.cream,
    onChange: v => setTweak('cream', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Creme \xB7 suave",
    value: t.creamSoft,
    onChange: v => setTweak('creamSoft', v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Dourado",
    value: t.gold,
    onChange: v => setTweak('gold', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));