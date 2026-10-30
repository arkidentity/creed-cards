// Builds a print mockup of one Creed Cards category (front + back of each card).
// Usage: node print/build-mockup.mjs [categorySlug]   → print/mockup-<slug>.html (no slug: all 50 → mockup-essentials.html)
// Each back scales its text to fill the card (fit script at the bottom), so short cards don't leave a gap.
// Latin-script terms skip the transliteration line (it would repeat the term).
// Card size: 4 x 6 in (384 x 576 CSS px). Bleed + crop marks come later.
// Each back carries a QR to the card's short link (QR_BASE + "1-" + id, deck-card), which opens the digital card with Go Deeper.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const slug = process.argv[2] || "";
const out = join(mkdtempSync(join(tmpdir(), "cc-")), "cd.cjs");
execSync(`${root}/node_modules/.bin/esbuild ${root}/lib/cardData.ts --bundle --format=cjs --platform=node --outfile=${out} --log-level=error`);
const { CARD_DATA, CATEGORY_INFO } = createRequire(import.meta.url)(out);
const cards = CARD_DATA.filter((c) => (slug ? c.categorySlug === slug : c.deckId === 1 || c.deckId === undefined)).sort((x, y) => x.id - y.id);
const catOf = (c) => CATEGORY_INFO[c.categorySlug];

// Category marks (Essentials), copied from lib/categoryIcons.tsx (stroke = cream, accent = gold).
const ICONS = {
  trinity: (s, a) => `<circle cx="60" cy="42" r="22" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="44" cy="70" r="22" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/><circle cx="76" cy="70" r="22" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/><circle cx="60" cy="61" r="5" fill="${a}"/>`,
  christ: (s, a) => `<circle cx="60" cy="52" r="30" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".35"/><line x1="60" y1="22" x2="60" y2="98" fill="none" stroke="${s}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="37" y1="50" x2="83" y2="50" fill="none" stroke="${s}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="50" r="4.5" fill="${a}"/>`,
  spirit: (s, a) => `<path d="M60 24 C 80 46, 86 66, 60 96 C 34 66, 40 46, 60 24 Z" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 52 C 68 62, 68 74, 60 88 C 52 74, 52 62, 60 52 Z" fill="${a}"/>`,
  salvation: (s, a) => `<path d="M30 62 q 30 36 60 0" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="40" y1="52" x2="40" y2="66" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="52" y1="47" x2="52" y2="68" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="64" y1="47" x2="64" y2="68" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="76" y1="52" x2="76" y2="66" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="32" r="5" fill="${a}"/>`,
  scripture: (s, a) => `<path d="M60 34 C 48 26, 30 26, 22 30 fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 22 84 C 30 80, 48 80, 60 88 C 72 80, 90 80, 98 84 fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 98 30 C 90 26, 72 26, 60 34 Z" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="60" y1="34" x2="60" y2="88" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="40" cy="56" r="4" fill="${a}"/>`,
  church: (s, a) => `<path d="M34 94 fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 34 54 Q 34 28 60 28 Q 86 28 86 54 fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 86 94" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="24" y1="94" x2="96" y2="94" fill="none" stroke="${s}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="42" r="4.5" fill="${a}"/>`,
  life: (s, a) => `<path d="M60 96 fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 60 48" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 64 C 44 64, 36 52, 36 40 C 50 40, 60 50, 60 62" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M60 56 C 76 56, 84 44, 84 32 C 70 32, 60 42, 60 54" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="42" r="5" fill="${a}"/>`,
  eschatology: (s, a) => `<line x1="22" y1="82" x2="98" y2="82" fill="none" stroke="${s}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 82 A 24 24 0 0 1 84 82" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="60" y1="40" x2="60" y2="30" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="86" y1="52" x2="94" y2="46" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="34" y1="52" x2="26" y2="46" fill="none" stroke="${s}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="82" r="5" fill="${a}"/>`,
};
const icon = (c, s, a) => `<svg viewBox="0 0 120 120">${(ICONS[c.categorySlug] || ICONS.trinity)(s, a)}</svg>`;
const esc = (t = "") => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const lang = (t) => (/[\u0590-\u05FF]/.test(t) ? "Hebrew" : /[\u0370-\u03FF\u1F00-\u1FFF]/.test(t) ? "Greek" : "Latin");
const pad = (n) => String(n).padStart(2, "0");
const QR_BASE = "https://arkidentity.com/cc/";
const QRCode = createRequire(import.meta.url)("qrcode");
const qr = {};
for (const c of cards) qr[c.id] = await QRCode.toString(QR_BASE + "1-" + c.id, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#2a2620", light: "#0000" } });
const GOLD = "#c9a45c";

const front = (c) => `
<div class="card front" style="--dark:${catOf(c).color}">
  <div class="frame">
    <div class="top"><span>Creed Cards</span><span>${pad(c.id)}</span></div>
    <div class="mark">${icon(c, "#efe6d2", GOLD)}</div>
    <div class="lang">${lang(c.term)}</div>
    <div class="term" ${/[֐-׿]/.test(c.term) ? 'dir="rtl"' : ""}>${esc(c.term)}</div>
    <div class="translit">${/^[\x00-\u024F\s']+$/.test(c.term) ? "" : `${esc(c.translation)} · `}<em>${esc(c.englishMeaning)}</em></div>
    <div class="rule"></div>
    <h2>${esc(c.title)}</h2>
    <div class="sub">${esc(c.shortDesc)}</div>
    <div class="bottom">${esc(catOf(c).name)}</div>
  </div>
</div>`;

const back = (c) => `
<div class="card back" style="--dark:${catOf(c).color}">
  <div class="band"><span class="num">${pad(c.id)}</span><span class="btitle">${esc(c.title)}</span></div>
  <div class="body">
    <p class="def">${esc(c.definition)}</p>
    <blockquote>“${esc(c.scripture)}”<cite>${esc(c.reference)}</cite></blockquote>
    <p class="hist"><b>Background.</b> ${esc(c.historicalContext)}</p>
    <div class="ask"><span>At the table</span>${esc(c.reflection)}</div>
  </div>
  <div class="foot"><div class="go"><b>Go deeper</b><span>Scan for the story behind it, the people, and the questions people ask.</span><i>ARK Identity</i></div><div class="qr">${qr[c.id]}</div></div>
</div>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><title>Creed Cards print mockup</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&family=Noto+Serif+Hebrew:wght@500&family=Noto+Serif:wght@500&display=swap" rel="stylesheet">
<style>
.card{--dark:#2a2f45}
:root{--gold:${GOLD};--cream:#efe6d2;--paper:#f7f2e8;--ink:#2a2620}
*{box-sizing:border-box;margin:0}
body{background:#d9d4ca;font-family:Inter,sans-serif;padding:32px 16px}
h1{font:600 20px Inter;color:#333;text-align:center;margin-bottom:4px}
.note{text-align:center;color:#555;font-size:13px;margin-bottom:28px}
.pair{display:flex;gap:28px;justify-content:center;flex-wrap:wrap;margin-bottom:36px}
.card{width:384px;height:576px;border-radius:14px;overflow:hidden;position:relative;box-shadow:0 10px 30px rgba(0,0,0,.25)}
/* FRONT */
.front{background:radial-gradient(120% 80% at 50% 30%,color-mix(in srgb,var(--dark) 70%,#3a4a6e) 0%,var(--dark) 70%);color:var(--cream);padding:14px}
.frame{height:100%;border:1px solid color-mix(in srgb,var(--gold) 55%,transparent);border-radius:8px;display:flex;flex-direction:column;align-items:center;padding:16px 18px;text-align:center}
.top,.bottom{font:500 8.5px Inter;letter-spacing:.22em;text-transform:uppercase;color:var(--gold)}
.top{width:100%;display:flex;justify-content:space-between}
.mark{width:100px;height:100px;margin:30px 0 16px}
.lang{font:500 7.5px Inter;letter-spacing:.24em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}
.term{font:500 28px 'Noto Serif Hebrew','Noto Serif',serif;line-height:1.2;opacity:.92}
.translit{font:500 17px 'Cormorant Garamond',serif;margin-top:6px;opacity:.85}
.rule{width:46px;height:1px;background:var(--gold);margin:22px 0}
.front h2{font:700 35px/1.05 'Cormorant Garamond',serif;letter-spacing:.06em}
.sub{font:italic 500 17px 'Cormorant Garamond',serif;margin-top:6px;opacity:.8}
.bottom{margin-top:auto}
/* BACK */
.back{background:var(--paper);color:var(--ink);display:flex;flex-direction:column}
.band{background:var(--dark);color:var(--cream);padding:11px 16px;display:flex;gap:10px;align-items:baseline}
.num{font:600 9px Inter;color:var(--gold);letter-spacing:.1em}
.btitle{font:700 17px 'Cormorant Garamond',serif;letter-spacing:.06em}
.body{--k:1;padding:14px 16px 0;display:flex;flex-direction:column;justify-content:flex-start;position:relative;gap:8px;flex:1;min-height:0;overflow:hidden}
.def{font-size:calc(10.6px * var(--k));line-height:1.48}
blockquote{font:italic 500 calc(14px * var(--k))/1.28 'Cormorant Garamond',serif;border-left:2px solid var(--gold);margin:0 14px 0 16px;padding:2px 0 2px 12px}
cite{display:block;font:600 8px Inter;font-style:normal;letter-spacing:.12em;text-transform:uppercase;color:#8a7a5c;margin-top:4px}
.hist{font-size:calc(9.6px * var(--k));line-height:1.45;color:#4a443a}
.hist b{color:var(--ink)}
.ask{background:color-mix(in srgb,var(--dark) 7%,var(--paper));border-top:1px solid var(--gold);padding:8px 10px;font:italic 500 calc(13.5px * var(--k))/1.25 'Cormorant Garamond',serif}
.ask span{display:block;font:600 7.5px Inter;font-style:normal;letter-spacing:.18em;text-transform:uppercase;color:#8a7a5c;margin-bottom:3px}
.foot{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;padding:9px 16px 12px}
.go{display:flex;flex-direction:column;gap:2px;max-width:190px}
.go b{font:700 13px 'Cormorant Garamond',serif;letter-spacing:.06em;color:var(--ink)}
.go span{font-size:8.5px;line-height:1.35;color:#4a443a}
.go i{font:500 7px Inter;font-style:normal;letter-spacing:.16em;text-transform:uppercase;color:#8a7a5c;margin-top:4px}
.qr{width:62px;height:62px;flex-shrink:0}
.qr svg{width:100%;height:100%;display:block}
</style></head><body>
<h1>Creed Cards (Essentials)${slug ? ": " + esc(CATEGORY_INFO[slug].name) : ", all " + cards.length + " cards"}</h1>
<p class="note">Print mockup · 4 × 6 in · front and back of each card · QR (0.58 in) opens ${QR_BASE}1-&lt;card&gt;</p>
${cards.map((c) => `<div class="pair">${front(c)}${back(c)}</div>`).join("")}
<script>
// Fit each back: grow the text (k from 1 up to 1.35) until the body is full, shrink (down to .85) if it overflows.
window.addEventListener("load", () => document.fonts.ready.then(() => {
  for (const b of document.querySelectorAll(".back .body")) {
    const fits = (k) => { b.style.setProperty("--k", k); const last = b.lastElementChild; return last.offsetTop + last.offsetHeight <= b.clientHeight - 14; };
    let lo = 0.75, hi = 1.45;
    if (!fits(lo)) { b.style.setProperty("--k", lo); continue; }
    for (let i = 0; i < 12; i++) { const m = (lo + hi) / 2; fits(m) ? (lo = m) : (hi = m); }
    b.style.setProperty("--k", (lo * 0.98).toFixed(3)); b.style.justifyContent = "space-between";
  }
}));
</script>
</body></html>`;
const name = `mockup-${slug || "essentials"}.html`;
writeFileSync(join(root, "print", name), html);
console.log(`wrote print/${name} (${cards.length} cards)`);
