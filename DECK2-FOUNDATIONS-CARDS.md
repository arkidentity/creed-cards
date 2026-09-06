# Creed Cards (Foundations) — Full Card Data

**Status:** 50 / 50 written · review pass 1 applied 2026-09-06 · **Started:** 2026-09-06
**Roster + rationale:** `DECK2-FOUNDATIONS.md` (v2, approved 2026-09-06)

The 50 `CreedCard` objects for Deck 2, ready to drop into `lib/decks.ts` once the
deck framework (Phase A) exists. Same schema as Essentials. IDs are 1–50 within
the deck. Category colours:

| slug | dark | accent |
|---|---|---|
| `creeds` | `#44403c` | `#e8b562` |
| `scripture` | `#4c1d95` | `#c084fc` |
| `christ` | `#7f1d1d` | `#fca5a5` |
| `covenant` | `#3f2d1a` | `#d8b48a` |
| `salvation` | `#14532d` | `#86efac` |
| `spirit` | `#713f12` | `#fbbf24` |
| `church` | `#7c2d12` | `#fdba74` |
| `eschatology` | `#1e293b` | `#94a3b8` |
| `life` | `#134e4a` | `#5eead4` |

All 9 groups drafted: Creeds & Councils (10) · Holy Scripture, Deeper (3) ·
Deeper Christology (6) · Covenant & Redemptive History (6) · Deeper Soteriology
(8) · Deeper Pneumatology (4) · Deeper Ecclesiology (5) · Deeper Last Things (4) ·
The Christian Life, Deeper (4).

**Decisions folded in while drafting:** card 46 is **THE BEATIFIC VISION**
(not New Heaven / New Earth — that stays in Essentials); cards 38 & 39 (the Four
Marks, the Communion of Saints — both ←D1) were **rewritten** to Deck 2's register.

**Review pass 1 (2026-09-06) applied:** card 31 retitled `THE PERSEVERANCE OF THE
SAINTS` → `THE PRESERVATION OF THE SAINTS` and rewritten to present both views
evenhandedly (new term Tēreō, scripture Phil 1:6); card 6 now names the
Athanasian Creed's damnatory clauses; card 10 notes Paul as the apostolic
exception; card 43 term → `status intermedius`; card 13 divine-pronoun
capitalization fixed; cards 5/14 and 13/34 and 17/27 and 11/21 de-duplicated in
their `historicalContext`; minor date/attribution fixes (Psychopannychia 1534,
Aulén ~1930, Keswick/holiness). Grace-monergist lean on cards 25 & 26 kept as
consistent with ARK's stated theology.

`scripture` category colour: **reuses Essentials' purple** (`#4c1d95` / `#c084fc`) —
settled 2026-09-06.

> **The FOUNDATIONS_CARDS array now lives in code:** [`lib/decks/foundationsCards.ts`](lib/decks/foundationsCards.ts).
> Phase A (2026-09-06) moved it out of this doc so there is one source of truth.
> This file keeps the roster rationale and review notes above; edit the card copy in the `.ts` file.
