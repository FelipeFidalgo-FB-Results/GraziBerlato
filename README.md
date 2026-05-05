# Grazi Berlato

Landing pages e projetos digitais da Grazi Berlato — Análise Corporal · Imersões Femininas.

## Estrutura

Cada LP/projeto vive em seu próprio subfolder e tem deploy independente no Vercel.

| Pasta | Descrição | Evento | Status |
|---|---|---|---|
| [`imersao-reencontro/`](./imersao-reencontro/) | LP da Imersão Re-Encontro | 21.05.2026 | Ativa |

## Como adicionar uma nova LP

1. Crie um novo subfolder no repo (ex: `workshop-julho/`)
2. Coloque o HTML standalone exportado do Claude Design dentro dele
3. Copie o `_build/build.js` da LP existente como template e ajuste se necessário
4. Rode `node _build/build.js` dentro do subfolder pra gerar `index.html` + `js/app.js`
5. No Vercel: "Add New Project" → escolha esse repo → defina **Root Directory** = `<nome-do-subfolder>`
6. Cada LP terá seu próprio domínio Vercel e seu próprio Pixel Meta
