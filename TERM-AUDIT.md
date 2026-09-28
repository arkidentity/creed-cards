# Creed Card Term Audit

> **Essentials (Deck 1): done 2026-09-28.** Foundations (Deck 2): not started. Fulfilled (Deck 4): has no terms.

## Why

Readers reported that the Greek/Hebrew/Latin terms were confusing, and one question kept coming up: *is this word actually in the verse?* Often it wasn't. The cards mixed three kinds of term without saying which was which:

1. **Bible word, in the card's verse** — fine as is.
2. **Bible word, but not in the card's verse** — the word is real, but the pairing implied the verse used it.
3. **Church term** — a word coined later (usually by a council or church teachers) to name something Scripture teaches. Valuable, but it isn't a Bible word.

## What changed

- New optional fields on `CreedCard`: `termType: 'bible' | 'church'` and `termNote` (where the word is used, or where the church term came from).
- **Front:** the language label now reads e.g. `GREEK · BIBLE WORD` or `GREEK · CHURCH TERM`.
- **Back:** a new **About the Word** section under the verse, showing the term and its note.
- Card verses were **not** swapped. Where the word appears elsewhere, the note cites that verse. Swapping verses changes the card's reading, so it waits for the Go Deeper work.
- Cards without `termType` (Foundations, Fulfilled) render exactly as before.

**Term corrections**
- **#40 Discipleship:** `Μαθητεία` (*Mathēteia*) isn't a New Testament word. Replaced with `Μαθητής` (*Mathētēs*, "disciple"), which appears in the card's own verse, Matthew 16:24.
- **#6 The Creator God:** the Hebrew was in reverse order. Now `בָּרָא אֱלֹהִים` (*Bara Elohim*), as in Genesis 1:1.

## Results — Essentials

**21 in the card's verse · 24 Bible words cited to another verse · 5 church terms.** Before the fixes, #40's term wasn't a Bible word at all. #7 *imago Dei* is the Latin Bible's own wording of Genesis 1:27, so it counts as in the verse.

| # | Card | Term | Status | Card's verse | Note shown on the card |
|---|---|---|---|---|---|
| 1 | One God In Three Persons | *Homoousios* | ⚠️ church term — now labeled | Deuteronomy 6:4 | A word the church adopted at the Council of Nicaea (AD 325) to say the Son shares the Father's very being. It names what Jesus teaches in John 10:30. |
| 2 | God The Father | *Patēr* | ✅ in the card's verse | Ephesians 1:3 | Used in Ephesians 1:3. |
| 3 | God The Son | *Huios tou Theou* | ⚠️ Bible word, other verse — now cited | Colossians 1:15-16 | Used in John 20:31. |
| 4 | God The Holy Spirit | *Pneuma Hagion* | ✅ in the card's verse | John 14:26 | Used in John 14:26. |
| 5 | The Divine Dance | *Perichōrēsis* | ⚠️ church term — now labeled | John 17:21 | A word early Greek-speaking church teachers used for how the Father, Son, and Spirit live in one another. John of Damascus (700s) made it well known. It names what Jesus describes in John 17:21. |
| 6 | The Creator God | *Bara Elohim* | ✅ in the card's verse | Genesis 1:1 | Used in Genesis 1:1. |
| 7 | Imago Dei | *Imago Dei* | ✅ in the card's verse | Genesis 1:27 | The wording of Genesis 1:27 in the Latin Bible. In Hebrew, it's tselem Elohim. |
| 8 | God'S Sovereignty | *Pantokratōr* | ⚠️ Bible word, other verse — now cited | Psalm 115:3 | Used in Revelation 1:8, where it's translated "the Almighty." |
| 9 | The Incarnation | *Ensarkōsis* | ⚠️ church term — now labeled | John 1:14 | A word early church teachers formed from the Bible's phrase "in the flesh" (1 John 4:2). It names what John 1:14 describes. |
| 10 | The Virgin Birth | *Parthenos* | ⚠️ Bible word, other verse — now cited | Luke 1:35 | Used in Luke 1:27. |
| 11 | Fully God And Fully Human | *Henōsis Hypostatikē* | ⚠️ church term — now labeled | Colossians 2:9 | A phrase developed in the 400s, especially by Cyril of Alexandria, and reflected in the Council of Chalcedon (AD 451). It names what Colossians 2:9 teaches. |
| 12 | Christ'S Sacrifice | *Hilasmos* | ✅ in the card's verse | 1 John 2:2 | Used in 1 John 2:2. |
| 13 | Atonement | *Kippur* | ⚠️ Bible word, other verse — now cited | 2 Corinthians 5:19 | Used in the name Yom Kippur, the Day of Atonement (Leviticus 23:27). |
| 14 | The Resurrection | *Anastasis* | ✅ in the card's verse | 1 Corinthians 15:20-21 | Used in 1 Corinthians 15:21. |
| 15 | The Ascension | *Analēpsis* | ⚠️ Bible word, other verse — now cited | Ephesians 4:10 | Used in Luke 9:51, for Jesus being "taken up." |
| 16 | The Comforter | *Paraklētos* | ✅ in the card's verse | John 14:16-17 | Used in John 14:16. |
| 17 | Regeneration | *Palingenesia* | ✅ in the card's verse | Titus 3:5 | Used in Titus 3:5. |
| 18 | Sanctification | *Hagiasmos* | ⚠️ Bible word, other verse — now cited | 2 Corinthians 3:18 | Used in 1 Thessalonians 4:3. |
| 19 | The Fruit Of The Spirit | *Karpos tou Pneumatos* | ✅ in the card's verse | Galatians 5:22-23 | Used in Galatians 5:22. |
| 20 | Gifts Of The Spirit | *Charismata* | ⚠️ Bible word, other verse — now cited | 1 Corinthians 12:7 | Used in 1 Corinthians 12:4. |
| 21 | The Spirit'S Indwelling | *Enoikēsis* | ⚠️ church term — now labeled | 1 Corinthians 3:16 | A word church teachers built from the Bible's verb "to dwell in" (Romans 8:11). It names what 1 Corinthians 3:16 describes. |
| 22 | Sin And The Fall | *Hamartia* | ⚠️ Bible word, other verse — now cited | Romans 3:23 | Used in Romans 6:23. Romans 3:23 uses the verb form, "have sinned." |
| 23 | The Gospel | *Euangelion* | ⚠️ Bible word, other verse — now cited | 1 Corinthians 15:3-4 | Used in 1 Corinthians 15:1. |
| 24 | Grace | *Charis* | ✅ in the card's verse | Ephesians 2:8-9 | Used in Ephesians 2:8. |
| 25 | Faith | *Pistis* | ✅ in the card's verse | Romans 5:1 | Used in Romans 5:1. |
| 26 | Repentance | *Metanoia* | ⚠️ Bible word, other verse — now cited | Acts 3:19 | Used in Acts 20:21. Acts 3:19 uses the verb form, "repent." |
| 27 | Justification | *Dikaiōsis* | ⚠️ Bible word, other verse — now cited | Romans 4:5 | Used in Romans 4:25. Romans 4:5 uses the verb form, "justifies." |
| 28 | Union With Christ | *En Christō* | ⚠️ Bible word, other verse — now cited | Galatians 2:20 | Used in 2 Corinthians 5:17. |
| 29 | Adoption | *Huiothesia* | ✅ in the card's verse | Romans 8:15 | Used in Romans 8:15. |
| 30 | The New Covenant | *Kainē Diathēkē* | ✅ in the card's verse | 1 Corinthians 11:25 | Used in 1 Corinthians 11:25. |
| 31 | Salvation | *Sōtēria* | ⚠️ Bible word, other verse — now cited | Luke 19:10 | Used in Luke 19:9. Luke 19:10 uses the verb form, "to save." |
| 32 | The Kingdom Of God | *Basileia tou Theou* | ⚠️ Bible word, other verse — now cited | Matthew 4:17 | Used in Mark 1:15. Matthew usually says "kingdom of heaven," as in Matthew 4:17. |
| 33 | Inspiration Of Scripture | *Theopneustos* | ✅ in the card's verse | 2 Timothy 3:16 | Used in 2 Timothy 3:16, and nowhere else in the Bible. |
| 34 | Authority Of Scripture | *Exousia* | ⚠️ Bible word, other verse — now cited | 2 Peter 1:20-21 | Used in Matthew 28:18, for Jesus' authority. |
| 35 | Christ In Scripture | *Logos* | ⚠️ Bible word, other verse — now cited | John 5:39 | Used in John 1:1. |
| 36 | The Church | *Ekklēsia* | ⚠️ Bible word, other verse — now cited | 1 Corinthians 12:12 | Used in Matthew 16:18. |
| 37 | The Body Of Christ | *Sōma Christou* | ✅ in the card's verse | 1 Corinthians 12:27 | Used in 1 Corinthians 12:27. |
| 38 | Baptism | *Baptisma* | ✅ in the card's verse | Romans 6:3-4 | Used in Romans 6:4. |
| 39 | The Lord'S Supper | *Koinōnia* | ✅ in the card's verse | 1 Corinthians 10:16 | Used in 1 Corinthians 10:16. |
| 40 | Discipleship | *Mathētēs* | ✅ in the card's verse | Matthew 16:24 | Used in Matthew 16:24, where it's translated "disciples." |
| 41 | Love | *Agapē* | ✅ in the card's verse | John 13:34-35 | Used in John 13:35. |
| 42 | Prayer | *Proseuchē* | ⚠️ Bible word, other verse — now cited | 1 Thessalonians 5:16-18 | Used in Philippians 4:6. 1 Thessalonians 5:17 uses the verb form, "pray." |
| 43 | Perseverance | *Hypomonē* | ⚠️ Bible word, other verse — now cited | Hebrews 10:36 | Used in Hebrews 10:36. |
| 44 | Suffering | *Pathēma* | ⚠️ Bible word, other verse — now cited | James 1:2-3 | Used in Romans 8:18. |
| 45 | Witness | *Martyria* | ⚠️ Bible word, other verse — now cited | Acts 1:8 | Used in Revelation 12:11. Acts 1:8 uses the related word "witnesses." |
| 46 | The Second Coming | *Parousia* | ⚠️ Bible word, other verse — now cited | 1 Thessalonians 4:16 | Used in 1 Thessalonians 4:15. |
| 47 | Resurrection Of The Dead | *Anastasis Nekrōn* | ⚠️ Bible word, other verse — now cited | John 5:28-29 | Used in 1 Corinthians 15:42. |
| 48 | Final Judgment | *Krisis* | ⚠️ Bible word, other verse — now cited | 2 Corinthians 5:10 | Used in Hebrews 9:27. |
| 49 | New Heaven And New Earth | *Ouranos Kainos, Gē Kainē* | ✅ in the card's verse | Revelation 21:1,4 | Used in Revelation 21:1. |
| 50 | Eternal Life | *Zōē Aiōnios* | ✅ in the card's verse | John 17:3 | Used in John 17:3. |

Each "used in" reference was checked against the Greek (NT) or Hebrew (OT) text. Where the card's verse uses a verb and the term is a noun (e.g. *hamartia*, *metanoia*, *proseuchē*), the note says so rather than pretending the noun is there.

## Next: Foundations (Deck 2)

Decided by Travis, 2026-09-28:

- **Same term audit**, same badge and note fields.
- **Rewrite in the middle-path voice.** Foundations leans heavily on the Reformation (Reformers ×10, Calvin ×6, Luther ×5, a *sola* card). DNA serves churches across denominations, so where Protestant, Catholic, and Orthodox Christians differ, the cards give common ground first, then the views in plain language, with no verdict. See `dna-hub/docs/planning/ai-chat/surface-passage.md` for the middle-path rule and the `scripture-context` skill for how it's applied.
- **Expect more issues** than in Essentials. Travis's instinct is that some Foundations terms and cards may matter less in the grand scheme. The audit should flag candidates for trimming, not just fix labels.

## Later: Go Deeper for Creed Cards

Behind a tap on the card back, same pattern as Passage of the Day: Say It (pronunciation), Where Scripture Teaches It (verses labeled "uses this word" / "teaches this idea"), The People Behind It (names explained, with pronunciation), Why It Mattered, Questions People Ask. Pilot 5 cards first.
