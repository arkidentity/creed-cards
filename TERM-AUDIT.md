# Creed Card Term Audit

> **Essentials (Deck 1): done 2026-09-28.** Foundations (Deck 2): not started. Fulfilled (Deck 4): has no terms.

## Why

Readers reported that the Greek/Hebrew/Latin terms were confusing, and one question kept coming up: *is this word actually in the verse?* Often it wasn't. The cards mixed three kinds of term without saying which was which:

1. **Bible word, in the card's verse** — fine as is.
2. **Bible word, but not in the card's verse** — the word is real, but the pairing implied the verse used it.
3. **Church term** — a word coined later (usually by a council or church teachers) to name something Scripture teaches. Valuable, but it isn't a Bible word.

## What changed

- New optional fields on `CreedCard`: `termType: 'bible' | 'church'`, `termHighlight` (the English words in the card's verse that translate the term), and `termNote` (shown only when the word isn't in the verse: where it's used, or where the church term came from).
- **Front:** the language label reads e.g. `GREEK · BIBLE WORD` or `GREEK · CHURCH TERM`.
- **Back (v2, 2026-09-28, after Travis saw v1):** the translating words are **highlighted inside the verse**. When the word isn't in the verse, one small line under the reference says where it is. The separate "About the Word" section from v1 was removed as redundant.
- Card verses were **not** swapped. Where the word appears elsewhere, the note cites that verse. Swapping verses changes the card's reading, so it waits for the Go Deeper work.
- Cards without `termType` (Foundations, Fulfilled) render exactly as before.

**Term corrections**
- **#40 Discipleship:** `Μαθητεία` (*Mathēteia*) isn't a New Testament word. Replaced with `Μαθητής` (*Mathētēs*, "disciple"), which appears in the card's own verse, Matthew 16:24.
- **#6 The Creator God:** the Hebrew was in reverse order. Now `בָּרָא אֱלֹהִים` (*Bara Elohim*), as in Genesis 1:1.

## Results — Essentials

**23 in the card's verse · 23 Bible words cited to another verse · 4 church terms.** (#1 changed 2026-09-28 from the church term *homoousios* to the Hebrew *echad*, which is in Deuteronomy 6:4. *Homoousios* now lives in #1's Go Deeper.) (First pass said 21/24; #43 *hypomonē* is in Hebrews 10:36 and was misfiled.) #41 *agapē*: the verse shown uses the verb; the noun is in the rest of v35, so it gets both a highlight and a note. #7 *imago Dei* is the Latin Bible's own wording of Genesis 1:27.

| # | Card | Term | Status | Card's verse | Note shown on the card |
|---|---|---|---|---|---|
| 1 | One God In Three Persons | *Echad* | ✅ in the card's verse — highlighted | Deuteronomy 6:4 | — |
| 2 | God The Father | *Patēr* | ✅ in the card's verse — highlighted | Ephesians 1:3 | — |
| 3 | God The Son | *Huios tou Theou* | ⚠️ Bible word, other verse — cited | Colossians 1:15-16 | Huios tou Theou appears in John 20:31. |
| 4 | God The Holy Spirit | *Pneuma Hagion* | ✅ in the card's verse — highlighted | John 14:26 | — |
| 5 | The Divine Dance | *Perichōrēsis* | ⚠️ church term — labeled | John 17:21 | A church term, made well known by John of Damascus (700s). |
| 6 | The Creator God | *Bara Elohim* | ✅ in the card's verse — highlighted | Genesis 1:1 | — |
| 7 | Imago Dei | *Imago Dei* | ✅ in the card's verse — highlighted | Genesis 1:27 | — |
| 8 | God'S Sovereignty | *Pantokratōr* | ⚠️ Bible word, other verse — cited | Psalm 115:3 | Pantokratōr appears in Revelation 1:8, translated "the Almighty." |
| 9 | The Incarnation | *Ensarkōsis* | ⚠️ church term — labeled | John 1:14 | A church term, formed from the Bible's phrase "in the flesh" (1 John 4:2). |
| 10 | The Virgin Birth | *Parthenos* | ⚠️ Bible word, other verse — cited | Luke 1:35 | Parthenos appears in Luke 1:27. |
| 11 | Fully God And Fully Human | *Henōsis Hypostatikē* | ⚠️ church term — labeled | Colossians 2:9 | A church term from the 400s, reflected in the Council of Chalcedon (AD 451). |
| 12 | Christ'S Sacrifice | *Hilasmos* | ✅ in the card's verse — highlighted | 1 John 2:2 | — |
| 13 | Atonement | *Kippur* | ⚠️ Bible word, other verse — cited | 2 Corinthians 5:19 | Kippur appears in Yom Kippur, the Day of Atonement (Leviticus 23:27). |
| 14 | The Resurrection | *Anastasis* | ✅ in the card's verse — highlighted | 1 Corinthians 15:20-21 | — |
| 15 | The Ascension | *Analēpsis* | ⚠️ Bible word, other verse — cited | Ephesians 4:10 | Analēpsis appears in Luke 9:51, for Jesus being "taken up." |
| 16 | The Comforter | *Paraklētos* | ✅ in the card's verse — highlighted | John 14:16-17 | — |
| 17 | Regeneration | *Palingenesia* | ✅ in the card's verse — highlighted | Titus 3:5 | — |
| 18 | Sanctification | *Hagiasmos* | ⚠️ Bible word, other verse — cited | 2 Corinthians 3:18 | Hagiasmos appears in 1 Thessalonians 4:3. |
| 19 | The Fruit Of The Spirit | *Karpos tou Pneumatos* | ✅ in the card's verse — highlighted | Galatians 5:22-23 | — |
| 20 | Gifts Of The Spirit | *Charismata* | ⚠️ Bible word, other verse — cited | 1 Corinthians 12:7 | Charismata appears in 1 Corinthians 12:4. |
| 21 | The Spirit'S Indwelling | *Enoikēsis* | ⚠️ church term — labeled | 1 Corinthians 3:16 | A church term, built from the Bible's verb "to dwell in" (Romans 8:11). |
| 22 | Sin And The Fall | *Hamartia* | ⚠️ Bible word, other verse — cited | Romans 3:23 | Romans 3:23 uses the verb. The noun hamartia appears in Romans 6:23. |
| 23 | The Gospel | *Euangelion* | ⚠️ Bible word, other verse — cited | 1 Corinthians 15:3-4 | Euangelion appears in 1 Corinthians 15:1. |
| 24 | Grace | *Charis* | ✅ in the card's verse — highlighted | Ephesians 2:8-9 | — |
| 25 | Faith | *Pistis* | ✅ in the card's verse — highlighted | Romans 5:1 | — |
| 26 | Repentance | *Metanoia* | ⚠️ Bible word, other verse — cited | Acts 3:19 | Acts 3:19 uses the verb. The noun metanoia appears in Acts 20:21. |
| 27 | Justification | *Dikaiōsis* | ⚠️ Bible word, other verse — cited | Romans 4:5 | Romans 4:5 uses the verb. The noun dikaiōsis appears in Romans 4:25. |
| 28 | Union With Christ | *En Christō* | ⚠️ Bible word, other verse — cited | Galatians 2:20 | En Christō appears in 2 Corinthians 5:17. |
| 29 | Adoption | *Huiothesia* | ✅ in the card's verse — highlighted | Romans 8:15 | — |
| 30 | The New Covenant | *Kainē Diathēkē* | ✅ in the card's verse — highlighted | 1 Corinthians 11:25 | — |
| 31 | Salvation | *Sōtēria* | ⚠️ Bible word, other verse — cited | Luke 19:10 | Luke 19:10 uses the verb. The noun sōtēria appears in Luke 19:9. |
| 32 | The Kingdom Of God | *Basileia tou Theou* | ⚠️ Bible word, other verse — cited | Matthew 4:17 | Basileia tou Theou appears in Mark 1:15. Matthew usually says "kingdom of heaven." |
| 33 | Inspiration Of Scripture | *Theopneustos* | ✅ in the card's verse — highlighted | 2 Timothy 3:16 | — |
| 34 | Authority Of Scripture | *Exousia* | ⚠️ Bible word, other verse — cited | 2 Peter 1:20-21 | Exousia appears in Matthew 28:18, for Jesus' authority. |
| 35 | Christ In Scripture | *Logos* | ⚠️ Bible word, other verse — cited | John 5:39 | Logos appears in John 1:1. |
| 36 | The Church | *Ekklēsia* | ⚠️ Bible word, other verse — cited | 1 Corinthians 12:12 | Ekklēsia appears in Matthew 16:18. |
| 37 | The Body Of Christ | *Sōma Christou* | ✅ in the card's verse — highlighted | 1 Corinthians 12:27 | — |
| 38 | Baptism | *Baptisma* | ✅ in the card's verse — highlighted | Romans 6:3-4 | — |
| 39 | The Lord'S Supper | *Koinōnia* | ✅ in the card's verse — highlighted | 1 Corinthians 10:16 | — |
| 40 | Discipleship | *Mathētēs* | ✅ in the card's verse — highlighted | Matthew 16:24 | — |
| 41 | Love | *Agapē* | ✅ in the card's verse — highlighted | John 13:34-35 | Here "love" is a verb. The noun agapē follows in the rest of verse 35: "if you have love for one another." |
| 42 | Prayer | *Proseuchē* | ⚠️ Bible word, other verse — cited | 1 Thessalonians 5:16-18 | 1 Thessalonians 5:17 uses the verb. The noun proseuchē appears in Philippians 4:6. |
| 43 | Perseverance | *Hypomonē* | ✅ in the card's verse — highlighted | Hebrews 10:36 | — |
| 44 | Suffering | *Pathēma* | ⚠️ Bible word, other verse — cited | James 1:2-3 | Pathēma appears in Romans 8:18. |
| 45 | Witness | *Martyria* | ⚠️ Bible word, other verse — cited | Acts 1:8 | Acts 1:8 uses the related word "witnesses." Martyria appears in Revelation 12:11. |
| 46 | The Second Coming | *Parousia* | ⚠️ Bible word, other verse — cited | 1 Thessalonians 4:16 | Parousia appears in 1 Thessalonians 4:15. |
| 47 | Resurrection Of The Dead | *Anastasis Nekrōn* | ⚠️ Bible word, other verse — cited | John 5:28-29 | Anastasis nekrōn appears in 1 Corinthians 15:42. |
| 48 | Final Judgment | *Krisis* | ⚠️ Bible word, other verse — cited | 2 Corinthians 5:10 | Krisis appears in Hebrews 9:27. |
| 49 | New Heaven And New Earth | *Ouranos Kainos, Gē Kainē* | ✅ in the card's verse — highlighted | Revelation 21:1,4 | — |
| 50 | Eternal Life | *Zōē Aiōnios* | ✅ in the card's verse — highlighted | John 17:3 | — |

Each "used in" reference was checked against the Greek (NT) or Hebrew (OT) text. Where the card's verse uses a verb and the term is a noun (e.g. *hamartia*, *metanoia*, *proseuchē*), the note says so rather than pretending the noun is there.

## Etymology fixes (meaning lines)

Word roots aren't word meanings. Fixed on the card face:
- **#22** *hamartia*: "Missing the Mark" → **Sin**. The archery sense belongs to much older Greek. The front line now reads "Falling Short of God's Glory" (Romans 3:23).
- **#36** *ekklēsia*: "Called-Out Assembly" → **Assembly / Gathering**. The front line now reads "God's Gathered People." (Acts 19:32, 39 uses the same word for a town assembly.)
- **#26** *metanoia*: "Change of Mind" → **Repentance / Turning**. **#13** *kippur*: "Covering" → **Atonement**. **#29** *huiothesia*: "Placing as Sons" → **Adoption**.

## Other corrections found along the way

- **#5 The Divine Dance:** the definition said "the early church called it the divine dance." It didn't. *Perichōrēsis* sounds like the Greek for dancing, but the roots differ, and the dance picture is modern. Now: "Many Christians today picture it as a divine dance." **The card title is still "The Divine Dance" — Travis to decide.**
- **#22 Sin and the Fall:** the historical context presented Augustine's view of original sin as settled. Christians differ on inherited guilt, so that's now a middle-path question in Go Deeper, and the card's history is neutral.

## Go Deeper (pilot, 2026-09-28)

A **Go Deeper** button sits beside **Mark as Learned** on the card back, shown only when the card has an entry in `lib/goDeeper.ts`. It opens a bottom sheet (`components/cards/GoDeeperSheet.tsx`, portaled to `document.body` so the card's 3D transform can't trap it) with: What It Means · Where It Shows Up (verses marked "uses this word" / "teaches this idea") · The Story Behind It · The People (with pronunciation) · Questions People Ask.

Pilot cards (Essentials): **#1** echad (homoousios in its story), **#5** perichōrēsis, **#22** hamartia, **#36** ekklēsia, **#40** mathētēs. For these, the card's Historical Context was shortened to plain sentences and the names and dates moved into Go Deeper.

## Next: Foundations (Deck 2)

Decided by Travis, 2026-09-28:

- **Same term audit**, same badge and note fields.
- **Rewrite in the middle-path voice.** Foundations leans heavily on the Reformation (Reformers ×10, Calvin ×6, Luther ×5, a *sola* card). DNA serves churches across denominations, so where Protestant, Catholic, and Orthodox Christians differ, the cards give common ground first, then the views in plain language, with no verdict. See `dna-hub/docs/planning/ai-chat/surface-passage.md` for the middle-path rule and the `scripture-context` skill for how it's applied.
- **Expect more issues** than in Essentials. Travis's instinct is that some Foundations terms and cards may matter less in the grand scheme. The audit should flag candidates for trimming, not just fix labels.

## Later: Go Deeper for Creed Cards

Behind a tap on the card back, same pattern as Passage of the Day: Say It (pronunciation), Where Scripture Teaches It (verses labeled "uses this word" / "teaches this idea"), The People Behind It (names explained, with pronunciation), Why It Mattered, Questions People Ask. Pilot 5 cards first.
