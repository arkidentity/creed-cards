// Builds a print mockup of one Creed Cards category (front + back of each card).
// Usage: node print/build-mockup.mjs <categorySlug>   → print/mockup-<slug>.html
// Latin-script terms skip the transliteration line (it would repeat the term).
// Card size: 3.5 x 5 in (336 x 480 CSS px). Bleed + crop marks come later.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const slug = process.argv[2] || "trinity";
const out = join(mkdtempSync(join(tmpdir(), "cc-")), "cd.cjs");
execSync(`${root}/node_modules/.bin/esbuild ${root}/lib/cardData.ts --bundle --format=cjs --platform=node --outfile=${out} --log-level=error`);
const { CARD_DATA, CATEGORY_INFO } = createRequire(import.meta.url)(out);
const cards = CARD_DATA.filter((c) => c.categorySlug === slug);
const cat = CATEGORY_INFO[slug];

// Category marks, copied from lib/categoryIcons.tsx (stroke = cream, accent = gold).
const ICONS = {
  trinity: (s, a) => `<circle cx="60" cy="42" r="22" fill="none" stroke="${s}" stroke-width="2"/><circle cx="44" cy="70" r="22" fill="none" stroke="${s}" stroke-width="2" opacity=".85"/><circle cx="76" cy="70" r="22" fill="none" stroke="${s}" stroke-width="2" opacity=".7"/><circle cx="60" cy="61" r="5" fill="${a}"/>`,
};
const icon = (s, a) => `<svg viewBox="0 0 120 120">${(ICONS[slug] || ICONS.trinity)(s, a)}</svg>`;
const esc = (t = "") => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const pad = (n) => String(n).padStart(2, "0");
const GOLD = "#c9a45c";

const front = (c) => `
<div class="card front">
  <div class="frame">
    <div class="top"><span>Creed Cards</span><span>${pad(c.id)}</span></div>
    <div class="mark">${icon("#efe6d2", GOLD)}</div>
    <div class="term" ${/[֐-׿]/.test(c.term) ? 'dir="rtl"' : ""}>${esc(c.term)}</div>
    <div class="translit">${/^[\x00-\u024F\s']+$/.test(c.term) ? "" : `${esc(c.translation)} · `}<em>${esc(c.englishMeaning)}</em></div>
    <div class="rule"></div>
    <h2>${esc(c.title)}</h2>
    <div class="sub">${esc(c.shortDesc)}</div>
    <div class="bottom">${esc(cat.name)}</div>
  </div>
</div>`;

const back = (c) => `
<div class="card back">
  <div class="band"><span class="num">${pad(c.id)}</span><span class="btitle">${esc(c.title)}</span></div>
  <div class="body">
    <p class="def">${esc(c.definition)}</p>
    <blockquote>“${esc(c.scripture)}”<cite>${esc(c.reference)}</cite></blockquote>
    <p class="hist"><b>Background.</b> ${esc(c.historicalContext)}</p>
    <div class="ask"><span>At the table</span>${esc(c.reflection)}</div>
  </div>
  <div class="foot"><span>ARK Identity</span><span>Go deeper in Daily DNA</span></div>
</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><title>Creed Cards print mockup: ${esc(cat.name)}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&family=Noto+Serif+Hebrew:wght@500&family=Noto+Serif:wght@500&display=swap" rel="stylesheet">
<style>
:root{--dark:${cat.color};--gold:${GOLD};--cream:#efe6d2;--paper:#f7f2e8;--ink:#2a2620}
*{box-sizing:border-box;margin:0}
body{background:#d9d4ca;font-family:Inter,sans-serif;padding:32px 16px}
h1{font:600 20px Inter;color:#333;text-align:center;margin-bottom:4px}
.note{text-align:center;color:#555;font-size:13px;margin-bottom:28px}
.pair{display:flex;gap:28px;justify-content:center;flex-wrap:wrap;margin-bottom:36px}
.card{width:336px;height:480px;border-radius:14px;overflow:hidden;position:relative;box-shadow:0 10px 30px rgba(0,0,0,.25)}
/* FRONT */
.front{background:radial-gradient(120% 80% at 50% 30%,color-mix(in srgb,var(--dark) 70%,#3a4a6e) 0%,var(--dark) 70%);color:var(--cream);padding:14px}
.frame{height:100%;border:1px solid color-mix(in srgb,var(--gold) 55%,transparent);border-radius:8px;display:flex;flex-direction:column;align-items:center;padding:16px 18px;text-align:center}
.top,.bottom{font:500 8.5px Inter;letter-spacing:.22em;text-transform:uppercase;color:var(--gold)}
.top{width:100%;display:flex;justify-content:space-between}
.mark{width:92px;height:92px;margin:22px 0 10px}
.term{font:500 34px 'Noto Serif Hebrew','Noto Serif',serif;line-height:1.2}
.translit{font:500 15px 'Cormorant Garamond',serif;margin-top:6px;opacity:.85}
.rule{width:40px;height:1px;background:var(--gold);margin:18px 0}
.front h2{font:700 25px/1.08 'Cormorant Garamond',serif;letter-spacing:.06em}
.sub{font:italic 500 15px 'Cormorant Garamond',serif;margin-top:6px;opacity:.8}
.bottom{margin-top:auto}
/* BACK */
.back{background:var(--paper);color:var(--ink);display:flex;flex-direction:column}
.band{background:var(--dark);color:var(--cream);padding:11px 16px;display:flex;gap:10px;align-items:baseline}
.num{font:600 9px Inter;color:var(--gold);letter-spacing:.1em}
.btitle{font:700 15px 'Cormorant Garamond',serif;letter-spacing:.06em}
.body{padding:12px 16px 0;display:flex;flex-direction:column;gap:11px;flex:1;overflow:hidden}
.def{font-size:10.6px;line-height:1.48}
blockquote{font:italic 500 15px/1.25 'Cormorant Garamond',serif;border-left:2px solid var(--gold);padding-left:9px}
cite{display:block;font:600 8px Inter;font-style:normal;letter-spacing:.12em;text-transform:uppercase;color:#8a7a5c;margin-top:4px}
.hist{font-size:9.6px;line-height:1.45;color:#4a443a}
.hist b{color:var(--ink)}
.ask{margin-top:auto;background:color-mix(in srgb,var(--dark) 7%,var(--paper));border-top:1px solid var(--gold);padding:8px 10px;font:italic 500 13.5px/1.25 'Cormorant Garamond',serif}
.ask span{display:block;font:600 7.5px Inter;font-style:normal;letter-spacing:.18em;text-transform:uppercase;color:#8a7a5c;margin-bottom:3px}
.foot{display:flex;justify-content:space-between;padding:8px 16px 11px;font:500 7.5px Inter;letter-spacing:.16em;text-transform:uppercase;color:#8a7a5c}
</style></head><body>
<h1>Creed Cards (Essentials): ${esc(cat.name)}</h1>
<p class="note">Print mockup · 3.5 × 5 in · front and back of each card</p>
${cards.map((c) => `<div class="pair">${front(c)}${back(c)}</div>`).join("")}
</body></html>`;
writeFileSync(join(root, "print", `mockup-${slug}.html`), html);
console.log(`wrote print/mockup-${slug}.html (${cards.length} cards)`);
