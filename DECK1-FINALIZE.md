# Creed Cards (Essentials) — Finalized 50

**Status:** ROSTER FROZEN + written into `lib/cardData.ts` 2026-09-06 · **Created:** 2026-09-05
**Companions:** `DECK-LINEUP.md`, `DECK2-FOUNDATIONS.md`, `DECK-STRATEGY.md`

Locks Deck 1 at exactly 50 cards. Supersedes the roster in `DECK1-PLAN.md`.

---

## What shipped to `cardData.ts` (2026-09-06)

**`CARD_DATA` renumbered 1–50** (Travis: "just make them 1 through 50"). The array
is physically ordered by new id, matching the roster below. `CARD_DATA.length`
= **50**; category counts trinity 8 · christ 7 · spirit 6 · salvation 11 ·
scripture 3 · church 4 · life 6 · eschatology 5; `tsc --noEmit` clean.

- **Deleted:** old ids 16 (Christ the Head), 37 (Communion of Saints), 38 (Four
  Marks), 42 (Spiritual Warfare), 44 (Good Works).
- **Added:** THE DIVINE DANCE (new #5), IMAGO DEI (#7), UNION WITH CHRIST (#28),
  THE NEW COVENANT (#30).

### Old → new id map (carried cards)

`2→1 3→2 4→3 5→4 7→6 8→8 · 9→9 10→10 11→11 12→12 53→13 13→14 14→15 ·
17→16 18→17 19→18 20→19 21→20 22→21 · 51→22 23→23 24→24 25→25 27→26 26→27
28→29 52→31 54→32 · 29→33 30→34 31→35 · 33→36 34→37 35→38 36→39 ·
39→40 40→41 41→42 43→43 45→44 46→45 · 47→46 48→47 49→48 50→49 55→50`

### Progress migration

- **On-device:** `lib/progress.ts` runs `runIdMigrationOnce()` (gated by
  `creedcards_idmap_v2`) — remaps `creedcards_learned` + `creedcards_last_studied`,
  drops retired/removed ids. Ships with this change.
- **Supabase:** `dna-hub/database/229_creed_deck1_id_remap.sql` remaps
  `disciple_creed_progress.cards_mastered`. **Cleanup only** — the Hub stat is a
  count (unaffected), and an active viewer's next push self-heals it. Run when
  convenient.

### Done alongside the freeze

- `daily-dna/lib/creedCardTitles.ts` + `dna-hub/src/lib/creedCardsList.ts` —
  regenerated from the frozen `cardData.ts` (new 1–50 ids, titles, categories).
- `cardIcons.tsx` — replaced by category icons (`lib/categoryIcons.tsx`,
  `CATEGORY-ICONS.md`); call sites updated.

### Still-deferred follow-ups (non-blocking)

- **Stored card numbers under the old numbering**: any saved Live Service
  `creed_card` block (`service_blocks`) or in-flight `creed_push_notifications`
  row now points at a different card. Pushes expire fast (self-resolves); saved
  services need a sweep — fold into `DECK-STRATEGY.md` Phase D (Live Service block
  gets `deckId` there anyway).
- `lib/quizData.ts` `DECK1_L3_QUESTIONS` uses old `cardId` values and includes
  `l3-x-06` / `l3-x-12` (now Foundations topics). Fix in the quiz redesign.

---

## What changes: remove 5, add 4

Current live deck: **51** → **50**.

### 5 cards leaving Deck 1

| Card | Current ID | Where it goes | Status |
|---|---|---|---|
| Communion of Saints | 37 | → **Foundations** (`church`) | approved |
| One, Holy, Catholic, Apostolic | 38 | → **Foundations** (`church`, "The Four Marks") | approved |
| Christ the Head | 16 | **retired** — thin history; concept lives in Four Marks / Body of Christ | approved 2026-09-06 |
| Spiritual Warfare | 42 | **retired** — thin history for a doctrine deck; candidate for a future practical deck | approved 2026-09-06 |
| Good Works | 44 | **retired** — ground already covered by Faith + The Five Solas | approved 2026-09-06 |

**Salvation (52) stays in Essentials** (Travis, 2026-09-06). "Retired" cards are
dropped in the ID remap — no Deck 2 slot, no other deck planned.

### 4 cards entering Deck 1 (new copy written below)

| Card | Category | Note |
|---|---|---|
| **The Divine Dance** (Perichōrēsis) | Trinity | In the *original* deck; cut in the May 2026 revision. Restored — it's how ARK teaches the Trinity (ID3, The Way). |
| **Imago Dei** | Trinity | New. ID3's opening move — identity starts here. |
| **Union with Christ** (En Christō) | Salvation & Gospel | New. The biggest gap; "the foundation of Christian living." |
| **The New Covenant** (Kainē Diathēkē) | Salvation & Gospel | New. Grace not law — the frame of ARK's *Freedom* teaching. |

**No open slot. No card called "Freedom in Christ" is needed now** (that was a
miscount in the first draft — it moves to a future "Free" deck). **New Heaven and
New Earth stays.**

---

## Finalized roster (50)

IDs reassigned **1–50** at freeze; current ID in parentheses. Order = study order.
`NEW` = new copy in this doc.

### Trinity & Nature of God — 8
| # | Title | Term | Was |
|---|---|---|---|
| 1 | ONE GOD IN THREE PERSONS | Homoousios | (2) |
| 2 | GOD THE FATHER | Patēr | (3) |
| 3 | GOD THE SON | Huios tou Theou | (4) |
| 4 | GOD THE HOLY SPIRIT | Pneuma Hagion | (5) |
| 5 | THE DIVINE DANCE | Perichōrēsis | `NEW` |
| 6 | THE CREATOR GOD | Elohim Bara | (7) |
| 7 | IMAGO DEI | Imago Dei | `NEW` |
| 8 | GOD'S SOVEREIGNTY | Pantokratōr | (8) |

### Jesus Christ — 7
| # | Title | Term | Was |
|---|---|---|---|
| 9 | THE INCARNATION | Ensarkōsis | (9) |
| 10 | THE VIRGIN BIRTH | Parthenos | (10) |
| 11 | FULLY GOD AND FULLY HUMAN | Henōsis Hypostatikē | (11) |
| 12 | CHRIST'S SACRIFICE | Hilasmos | (12) |
| 13 | ATONEMENT | Kippur | (53) |
| 14 | THE RESURRECTION | Anastasis | (13) |
| 15 | THE ASCENSION | Analēpsis | (14) |

> Overlap to confirm: 12 (Hilasmos / propitiation) vs 13 (Kippur / covering &
> reconciliation). Keep both only if the cards are written distinct; otherwise
> 13 → Foundations.

### Holy Spirit — 6
| # | Title | Term | Was |
|---|---|---|---|
| 16 | THE COMFORTER | Paraklētos | (17) |
| 17 | REGENERATION | Palingenesia | (18) |
| 18 | SANCTIFICATION | Hagiasmos | (19) |
| 19 | THE FRUIT OF THE SPIRIT | Karpos tou Pneumatos | (20) |
| 20 | GIFTS OF THE SPIRIT | Charismata | (21) |
| 21 | THE SPIRIT'S INDWELLING | Enoikēsis | (22) |

### Salvation & Gospel — 11
| # | Title | Term | Was |
|---|---|---|---|
| 22 | SIN AND THE FALL | Hamartia | (51) |
| 23 | THE GOSPEL | Euangelion | (23) |
| 24 | GRACE | Charis | (24) |
| 25 | FAITH | Pistis | (25) |
| 26 | REPENTANCE | Metanoia | (27) |
| 27 | JUSTIFICATION | Dikaiōsis | (26) |
| 28 | UNION WITH CHRIST | En Christō | `NEW` |
| 29 | ADOPTION | Huiothesia | (28) |
| 30 | THE NEW COVENANT | Kainē Diathēkē | `NEW` |
| 31 | SALVATION | Sōtēria | (52) — **stays** |
| 32 | THE KINGDOM OF GOD | Basileia tou Theou | (54) |

### Holy Scripture — 3
| # | Title | Term | Was |
|---|---|---|---|
| 33 | INSPIRATION OF SCRIPTURE | Theopneustos | (29) |
| 34 | AUTHORITY OF SCRIPTURE | Exousia | (30) |
| 35 | CHRIST IN SCRIPTURE | Logos | (31) |

### Church & Sacraments — 4
| # | Title | Term | Was |
|---|---|---|---|
| 36 | THE CHURCH | Ekklēsia | (33) |
| 37 | THE BODY OF CHRIST | Sōma Christou | (34) |
| 38 | BAPTISM | Baptisma | (35) |
| 39 | THE LORD'S SUPPER | Koinōnia | (36) |

### Christian Life — 6
| # | Title | Term | Was |
|---|---|---|---|
| 40 | DISCIPLESHIP | Mathēteia | (39) |
| 41 | LOVE | Agapē | (40) |
| 42 | PRAYER | Proseuchē | (41) |
| 43 | PERSEVERANCE | Hypomonē | (43) |
| 44 | SUFFERING | Pathēma | (45) |
| 45 | WITNESS | Martyria | (46) |

> **Out:** Spiritual Warfare (42) and Good Works (44) → Foundations.

### Last Things — 5
| # | Title | Term | Was |
|---|---|---|---|
| 46 | THE SECOND COMING | Parousia | (47) |
| 47 | RESURRECTION OF THE DEAD | Anastasis Nekrōn | (48) |
| 48 | FINAL JUDGMENT | Krisis | (49) |
| 49 | NEW HEAVEN AND NEW EARTH | Ouranos Kainos, Gē Kainē | (50) |
| 50 | ETERNAL LIFE | Zōē Aiōnios | (55) |

**Count:** 8 + 7 + 6 + 11 + 3 + 4 + 6 + 5 = **50.** ✓

---

## New cards — full data

Matching the existing `CreedCard` shape exactly. Category colors unchanged.

### THE DIVINE DANCE  *(Trinity)*

```ts
{
  id: 5, // provisional
  category: "Trinity & Nature of God",
  categorySlug: "trinity",
  title: "THE DIVINE DANCE",
  shortDesc: "The Mutual Indwelling",
  term: "περιχώρησις",
  termLabel: "Greek",
  translation: "Perichōrēsis",
  englishMeaning: "Mutual Indwelling",
  definition:
    "The three Persons of the Trinity live in one another — the Father in the Son, the Son in the Father, the Spirit in both. This is not three gods cooperating and not one God playing three parts, but a communion of self-giving love with no beginning and no end. The early church called it the divine dance. In Christ, we are drawn into it.",
  scripture:
    "That they may all be one; even as You, Father, are in Me and I in You, that they also may be in Us.",
  reference: "John 17:21",
  historicalContext:
    "John of Damascus (8th century) used perichōrēsis to describe how the divine Persons contain one another without blurring together. It guards the Trinity from two errors at once: dividing God into three, or collapsing Him into one.",
  reflection:
    "If God's own life is a communion of love, what does that tell you about why you were made?",
  colors: { dark: "#0f172a", accent: "#3b82f6" },
}
```

### IMAGO DEI  *(Trinity)*

```ts
{
  id: 7, // provisional
  category: "Trinity & Nature of God",
  categorySlug: "trinity",
  title: "IMAGO DEI",
  shortDesc: "Made in His Image",
  term: "imago Dei",
  termLabel: "Latin",
  translation: "Imago Dei",
  englishMeaning: "Image of God",
  definition:
    "Every human being is made in the image of God — able to know Him, reflect His character, and represent His rule in the world. Sin defaces the image but never erases it. It is being restored in those who are being formed into the likeness of Christ, who is Himself the perfect image of God.",
  scripture:
    "God created man in His own image, in the image of God He created him; male and female He created them.",
  reference: "Genesis 1:27",
  historicalContext:
    "Early theologians such as Irenaeus distinguished the image (retained after the Fall) from the likeness (lost, and restored in Christ). The doctrine grounds human dignity, the sanctity of life, and the call to see Christ in the least of these.",
  reflection:
    "How would you treat the next person you meet if you truly believed they carry the image of God?",
  colors: { dark: "#0f172a", accent: "#3b82f6" },
}
```

### UNION WITH CHRIST  *(Salvation & Gospel)*

```ts
{
  id: 28, // provisional
  category: "Salvation & Gospel",
  categorySlug: "salvation",
  title: "UNION WITH CHRIST",
  shortDesc: "Joined to the Lord",
  term: "ἐν Χριστῷ",
  termLabel: "Greek",
  translation: "En Christō",
  englishMeaning: "In Christ",
  definition:
    "Every blessing of salvation comes to us because we are joined to Jesus Himself. By the Spirit we share His death, His resurrection, and His life; what is true of Him becomes true of us. We died, we were raised, we are seated with Him. \"In Christ\" is Paul's most repeated phrase — the ground of the whole Christian life.",
  scripture:
    "I have been crucified with Christ; and it is no longer I who live, but Christ lives in me.",
  reference: "Galatians 2:20",
  historicalContext:
    "Paul writes \"in Christ\" or \"in Him\" more than 160 times. John Calvin called union with Christ the hinge of salvation: apart from it, everything Christ accomplished \"remains useless\" to us.",
  reflection:
    "What changes when you stop striving to become someone and start living from who you already are in Christ?",
  colors: { dark: "#14532d", accent: "#86efac" },
}
```

### THE NEW COVENANT  *(Salvation & Gospel)*

```ts
{
  id: 30, // provisional
  category: "Salvation & Gospel",
  categorySlug: "salvation",
  title: "THE NEW COVENANT",
  shortDesc: "Written on the Heart",
  term: "καινὴ διαθήκη",
  termLabel: "Greek",
  translation: "Kainē Diathēkē",
  englishMeaning: "New Covenant",
  definition:
    "God promised through Jeremiah a new covenant — not carved in stone but written on the heart. In it, sins are remembered no more, everyone knows the Lord, and the Spirit supplies the power the law never could. Jesus sealed this covenant in His blood. We do not live under the old terms; we live as heirs of the new.",
  scripture:
    "This cup is the new covenant in My blood; do this, as often as you drink it, in remembrance of Me.",
  reference: "1 Corinthians 11:25",
  historicalContext:
    "Jeremiah 31:31–34 is quoted in full in Hebrews 8 — the longest Old Testament quotation in the New. The Reformers recovered the covenant framework to show that grace, not law-keeping, defines life with God.",
  reflection:
    "Where are you still relating to God on old-covenant terms — earning, proving, fearing — when He has offered you new ones?",
  colors: { dark: "#14532d", accent: "#86efac" },
}
```

---

## Working-session checklist

- [x] 5 out = Christ the Head, Communion of Saints, Four Marks, Spiritual Warfare, Good Works. Salvation stays.
- [ ] Rule on the 12 vs 13 overlap (Christ's Sacrifice / Atonement).
- [ ] Approve the 4 new cards' copy (voice, Scripture, term).
- [ ] Approve reassigned IDs 1–50; generate the old-ID → new-ID map for the Phase B migration.
- [ ] Icons: confirm the move to **category-level icons**.
- [ ] Add "superseded by DECK1-FINALIZE.md" to `DECK1-PLAN.md`.
- [ ] Fix pathway copy + `DECK_META.deckName` → "Creed Cards (Essentials)".
