# Creed Cards (Fulfilled) — Full Card Data

**Status:** 50 / 50 written · review pass 1 applied 2026-09-06 · **Started:** 2026-09-06
**Roster + schema:** `DECK4-FULFILLED.md`

The 50 `fulfillment` cards for Deck 4. Schema per `DECK4-FULFILLED.md`:
`kind` (`prophecy` | `type`), `basis` (`stated` = the NT draws the line ·
`traditional` = a long-held reading, labeled on the card face), `otText` / `otRef`,
`centuriesBefore` (blank for undatable types), `ntText` / `ntRef`, `significance`
(replaces `definition`), `reflection`. `category` is the display name;
`categorySlug` is one of `prophecy` / `feasts` / `persons` / `objects` / `events`.

Category colours:

| slug | dark | accent |
|---|---|---|
| `prophecy` | `#1e1b4b` | `#a5b4fc` |
| `feasts` | `#713f12` | `#fbbf24` |
| `persons` | `#7c2d12` | `#fdba74` |
| `objects` | `#292524` | `#d6d3d1` |
| `events` | `#134e4a` | `#5eead4` |

Basis mix: 44 `stated`, 6 `traditional` (12, 24, 34, 35, 38, 46 — the traditional
element is spelled out in each card's `significance`, e.g. "a pattern the church
has long seen, not a stated one").

**Review pass 1 applied 2026-09-06:** card 12 → `traditional` (NT never cites
Ps 22:16; text-variant noted); cards 1, 6, 9, 23 softened where they implied
prediction over typology; card 33 `ntRef` gains Heb 11:19; card 48 quotes
1 Pet 3:21 in full. **Structural:** old card 38 (Two Angels) + old card 43 (Ark)
merged into **THE EMPTY MERCY SEAT** at slot 38; slot 43 is now **THE ROCK IN THE
WILDERNESS** (1 Cor 10:4, a stated type that was missing); slot 50 replaced
Sinai/Pentecost (redundant with card 24) with **JACOB'S LADDER** (John 1:51,
stated). Card 44 (Sabbath) re-angled to shadow → substance (Col 2:16-17) so it no
longer overlaps Foundations' Sabbath card. Needs Travis sign-off.

> **The FULFILLED_CARDS array now lives in code:** [`lib/decks/fulfilledCards.ts`](lib/decks/fulfilledCards.ts).
> Phase A (2026-09-06) moved it out of this doc so there is one source of truth.
> This file keeps the roster rationale and review notes above; edit the card copy in the `.ts` file.
