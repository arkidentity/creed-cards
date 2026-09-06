# Creed Cards — Category Icons

**Created:** 2026-09-06 · **Code:** `lib/categoryIcons.tsx` (`CategoryIcon({ slug, accentColor, stroke })`)

Icons are now **per category, not per card**. Every card renders its category's
mark. One icon per slug, shared across all decks that use that slug. Each is
abstract line-art: `stroke` for the outline (2px), one `accentColor` highlight,
`viewBox 0 0 120 120` — monochrome + accent, so the same mark works on any deck's
color palette.

## The set (15 icons)

| Slug | Category name | Used by | Concept |
|---|---|---|---|
| `trinity` | Trinity & Nature of God | Essentials | Three overlapping circles in a triad; accent dot at the shared centre. The classic Trinity mark. |
| `christ` | Jesus Christ / Deeper Christology | Essentials, Foundations | Upright cross inside a faint halo; accent at the crossing. |
| `spirit` | Holy Spirit / Deeper Pneumatology | Essentials, Foundations | A flame, with an inner accent flame (Pentecost). |
| `salvation` | Salvation & Gospel / Covenant & Salvation | Essentials, Foundations | A cupped open hand with a gift descending — "faith is the empty hand that receives." |
| `scripture` | Holy Scripture | Essentials, Foundations | An open book, centre spine, accent on the page. |
| `church` | Church & Sacraments / Deeper Ecclesiology | Essentials, Foundations | A rounded arch on a baseline — the church as doorway; accent keystone. |
| `life` | Christian Life | Essentials, Foundations | A sprout: stem and two leaves, accent bud. Growth / fruit. |
| `eschatology` | Last Things | Essentials, Foundations | A half-sun rising over a horizon line, with rays; accent at the horizon. |
| `creeds` | The Creeds & Councils | Foundations | A shield with a small cross — "a good creed fences the truth." |
| `covenant` | Covenant & Redemptive History | Foundations | Two interlocking rings (a marriage, not a contract); accent where they cross. |
| `prophecy` | Messianic Prophecies | Fulfilled | An arc-arrow rising left→right; accent dot at the origin — spoken long before, landing later. |
| `feasts` | The Feasts & Sacred Calendar | Fulfilled | A lamp on a stand with an accent flame — the appointed lights of the year. |
| `persons` | Persons as Types | Fulfilled | Head-and-shoulders silhouette; accent over the heart. |
| `objects` | Objects & Institutions | Fulfilled | A tent / tabernacle (triangle + door flap); accent above (glory). |
| `events` | Shadow Events | Fulfilled | Three wave lines — "passing through the waters"; accent cresting above. |

## Not yet designed

- **Promises (Deck 3)** — its groupings aren't locked (situational: God's Presence,
  Provision, Guidance, Peace & Rest, Forgiveness, Strength in Weakness, Protection,
  Hope in Suffering, Answered Prayer, The Spirit's Help, Eternal Security, Christ's
  Return). Add slugs + icons to `categoryIcons.tsx` once that deck's structure is
  set. Sketch ideas: Presence → a tent/pillar; Provision → an open hand with grain;
  Rest → a crescent; Protection → a shield-wall; Return → a doorway with a star.

## Adding a deck's categories

1. Add each new `slug` case to the `switch` in `lib/categoryIcons.tsx`.
2. In the deck's category config (`lib/decks.ts`, once it exists), the `icon`
   field is just the slug — `CategoryIcon` switches on it directly.
3. Reuse an existing slug where the meaning matches (Foundations reuses `christ`,
   `spirit`, `scripture`, `salvation`, `church`, `eschatology`, `life`).

## Migration note

`lib/cardIcons.tsx` is now a shim: `CardIcon({ categorySlug, accentColor, stroke })`
delegates to `CategoryIcon`. The old 50 per-card `IconN` components were deleted.
Call sites (`app/page.tsx`, `components/cards/CardFront.tsx`) pass
`card.categorySlug`.
