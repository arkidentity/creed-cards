import type { CreedCard } from "../cardData";

// Deck 2 — Creed Cards (Foundations). 50 doctrine-schema cards, ids 1-50.
// Source of record: DECK2-FOUNDATIONS-CARDS.md (roster: DECK2-FOUNDATIONS.md).
// Moved into code for Phase A (lib/decks.ts registry).

export const FOUNDATIONS_CARDS: CreedCard[] = [

  // ─── THE CREEDS & COUNCILS (1–10) ──────────────────────────────────────────

  {
    id: 1,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE WORD \"TRINITY\"",
    shortDesc: "Naming the Threeness",
    term: "τριάς",
    termLabel: "Greek",
    translation: "Trias",
    englishMeaning: "Threeness",
    definition:
      "The Bible never uses the word \"Trinity,\" yet it teaches the reality on every page: one God, and the Father, the Son, and the Spirit each fully God. The church coined a word to guard the truth — to say in one term what Scripture says in a hundred places. A good creed adds nothing to Scripture; it fences it.",
    scripture:
      "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit.",
    reference: "Matthew 28:19",
    historicalContext:
      "Theophilus of Antioch first used the Greek \"trias\" around 180 AD; Tertullian soon gave us the Latin \"trinitas.\" Both were answering confusion, not inventing doctrine.",
    reflection:
      "Why is it sometimes necessary to use a word the Bible doesn't, in order to protect what the Bible does say?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 2,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE APOSTLES' CREED",
    shortDesc: "The Baptismal Confession",
    term: "Symbolum Apostolorum",
    termLabel: "Latin",
    translation: "Symbolum Apostolorum",
    englishMeaning: "The Apostles' Symbol",
    definition:
      "The oldest and simplest summary of the faith, used for centuries to prepare believers for baptism. In a few lines it traces the whole story — Father, Son, and Spirit; creation, cross, resurrection, and the life to come. To confess it is to stand with the whole church across every age.",
    scripture:
      "With the heart a person believes, resulting in righteousness, and with the mouth he confesses, resulting in salvation.",
    reference: "Romans 10:10",
    historicalContext:
      "It grew from early Roman baptismal questions — \"Do you believe in God the Father almighty?\" — and reached its familiar form between the 6th and 8th centuries. \"Symbolum\" meant a token of identity: proof you belonged.",
    reflection:
      "What does it mean to you that your faith is not new, but shared with believers going back nearly two thousand years?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 3,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE NICENE CREED",
    shortDesc: "One Faith for the Whole Church",
    term: "Symbolum Nicaenum",
    termLabel: "Latin",
    translation: "Symbolum Nicaenum",
    englishMeaning: "The Nicene Symbol",
    definition:
      "Written at Nicaea in 325 and expanded at Constantinople in 381, this is the one creed confessed by Catholic, Orthodox, and Protestant churches alike. It spells out what the Apostles' Creed assumes: the Son is \"true God from true God,\" and the Spirit is \"worshiped and glorified\" with the Father and the Son.",
    scripture:
      "There is one body and one Spirit... one Lord, one faith, one baptism, one God and Father of all.",
    reference: "Ephesians 4:4-6",
    historicalContext:
      "The 381 council added the fuller section on the Holy Spirit. Centuries later the Western church added \"and the Son\" (filioque) to the clause on the Spirit's procession — a phrase that became a fault line between East and West.",
    reflection:
      "The Nicene Creed unites Christians who disagree on much else. What might that teach you about which truths are central?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 4,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE COUNCIL OF NICAEA",
    shortDesc: "True God from True God",
    term: "ὁμοούσιος",
    termLabel: "Greek",
    translation: "Homoousios",
    englishMeaning: "Of the Same Being",
    definition:
      "In 325, bishops gathered to answer a teacher named Arius, who said the Son was the highest creature — made, not eternal. The council replied with one word: homoousios. The Son is of the same being as the Father, fully and eternally God. The gospel depends on it, because only God can save.",
    scripture:
      "In the beginning was the Word, and the Word was with God, and the Word was God.",
    reference: "John 1:1",
    historicalContext:
      "Athanasius spent much of his life defending Nicaea and was exiled five times for it. The controversy raged for decades after 325 before the church finally settled.",
    reflection:
      "If Jesus were something less than fully God, what would you lose?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 5,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE COUNCIL OF CHALCEDON",
    shortDesc: "Defining the One Christ",
    term: "ἀσυγχύτως, ἀδιαιρέτως",
    termLabel: "Greek",
    translation: "Asynchytōs, Adiairetōs",
    englishMeaning: "Without Confusion, Without Division",
    definition:
      "In 451, the church confessed that Jesus Christ is one Person in two natures — fully God and fully human — \"without confusion, without change, without division, without separation.\" Not God in a human costume. Not a specially blessed man. One Christ, in whom our humanity is joined to God forever.",
    scripture:
      "For in Him all the fullness of Deity dwells in bodily form.",
    reference: "Colossians 2:9",
    historicalContext:
      "Chalcedon steered between Nestorius, who so divided the natures he seemed to make two Christs, and Eutyches, who blended them into one. The Oriental Orthodox churches parted from Chalcedon over its wording.",
    reflection:
      "Why does it matter that Jesus remains fully human even now, seated in heaven?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 6,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE ATHANASIAN CREED",
    shortDesc: "The Trinity Spelled Out",
    term: "Quicunque vult",
    termLabel: "Latin",
    translation: "Quicunque vult",
    englishMeaning: "Whoever Wishes",
    definition:
      "A later Western creed — not written by Athanasius, but named for his theology. It states the Trinity and the Incarnation with relentless precision: the Persons distinct, the Being undivided, \"neither confounding the Persons nor dividing the Substance.\" It is worship in the form of exact speech.",
    scripture:
      "Now to the King eternal, immortal, invisible, the only God, be honor and glory forever and ever.",
    reference: "1 Timothy 1:17",
    historicalContext:
      "It appeared in southern Gaul around the 5th or 6th century and was long recited in Western worship, especially on Trinity Sunday. It also opens and closes with hard lines — that whoever does not keep this faith \"whole and undefiled\" will \"perish everlastingly\" — which many later Christians have found jarring, and which some churches now omit or soften in use.",
    reflection:
      "Can careful, technical language about God be a form of praise? How?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 7,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE FIVE SOLAS",
    shortDesc: "Grace Alone, Faith Alone",
    term: "sola",
    termLabel: "Latin",
    translation: "Sola",
    englishMeaning: "Alone",
    definition:
      "The Reformation recovered five \"alones\": Scripture alone is our final authority, grace alone saves, faith alone receives, Christ alone is the ground, and God's glory alone is the goal. Not five separate ideas but one confession — salvation is God's work from first to last, and the credit is entirely His.",
    scripture:
      "For by grace you have been saved through faith; and that not of yourselves, it is the gift of God.",
    reference: "Ephesians 2:8",
    historicalContext:
      "The phrases were drawn together after the Reformation as a summary of what Luther, Calvin, and others contended for against a system of merit. \"Sola fide\" was the material heart; \"sola Scriptura\" the formal principle.",
    reflection:
      "Which of the five \"alones\" is hardest for you to actually live by?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 8,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "HERESY",
    shortDesc: "When a Part Denies the Whole",
    term: "αἵρεσις",
    termLabel: "Greek",
    translation: "Hairesis",
    englishMeaning: "A Choosing, a Faction",
    definition:
      "Heresy is not honest questioning or immature belief. It is teaching that contradicts the core of the faith and divides the church — usually by taking one truth and pressing it until it crowds out another. The councils met not to stifle thought but to protect the gospel from distortions that would empty it.",
    scripture:
      "For the time will come when they will not endure sound doctrine... and will turn away their ears from the truth.",
    reference: "2 Timothy 4:3-4",
    historicalContext:
      "The early heresies each denied something essential — Arianism denied Christ's deity, Docetism His humanity, Modalism the distinct Persons, Pelagianism our need for grace. The creeds are the church's settled replies.",
    reflection:
      "How do you tell the difference between wrestling toward truth and drifting away from it?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 9,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "TRADITION",
    shortDesc: "The Faith Handed Down",
    term: "παράδοσις",
    termLabel: "Greek",
    translation: "Paradosis",
    englishMeaning: "That Which Is Passed Down",
    definition:
      "Before there was a bound New Testament, the apostles handed on the gospel by teaching and by life, and the church guarded it. Scripture is the final rule — but the canon, the creeds, and the worship of the church are the faithful handing-down through which we received it. We are not the first to read the Bible well.",
    scripture:
      "So then, brethren, stand firm and hold to the traditions which you were taught, whether by word of mouth or by letter from us.",
    reference: "2 Thessalonians 2:15",
    historicalContext:
      "Irenaeus (2nd century) appealed to the \"rule of faith\" — the consistent teaching passed from the apostles through the churches — as the key to reading Scripture rightly against the Gnostics, who claimed secret traditions of their own.",
    reflection:
      "What have you received in your faith that you did not discover on your own?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },
  {
    id: 10,
    category: "The Creeds & Councils",
    categorySlug: "creeds",
    title: "THE APOSTOLIC OFFICE",
    shortDesc: "The Sent Ones",
    term: "ἀπόστολος",
    termLabel: "Greek",
    translation: "Apostolos",
    englishMeaning: "One Who Is Sent",
    definition:
      "An apostle is a \"sent one\" — but in the New Testament the word carries a unique, unrepeatable weight. The apostles were commissioned directly by the risen Christ as eyewitnesses of the resurrection, and their teaching is the foundation the church is built on. The church is \"apostolic\" not because a title has been passed hand to hand, but because it holds to what they taught.",
    scripture:
      "...having been built on the foundation of the apostles and prophets, Christ Jesus Himself being the corner stone.",
    reference: "Ephesians 2:20",
    historicalContext:
      "Acts sets the bar: an apostle had to have accompanied Jesus \"beginning from the baptism of John\" and to be a witness of the resurrection (Acts 1:21-22). Paul is the striking exception — he met the risen Christ only later, on the Damascus road, and defended his apostleship fiercely (1 Corinthians 9:1). Rome and the Eastern churches hold to apostolic succession — an unbroken line of ordination; the Reformers held to apostolic teaching — fidelity to the apostles' doctrine in Scripture. Movements that revive the title press the question again.",
    reflection:
      "If a church is \"apostolic\" when it keeps the apostles' teaching, how would you tell whether a church — or a teacher — still is?",
    colors: { dark: "#44403c", accent: "#e8b562" },
  },

  // ─── HOLY SCRIPTURE, DEEPER (11–13) ────────────────────────────────────────

  {
    id: 11,
    category: "Holy Scripture, Deeper",
    categorySlug: "scripture",
    title: "THE CANON OF SCRIPTURE",
    shortDesc: "How We Got the Sixty-Six",
    term: "κανών",
    termLabel: "Greek",
    translation: "Kanōn",
    englishMeaning: "Measuring Rod, Standard",
    definition:
      "The canon is the list of books the church receives as Scripture. The church did not create it; it recognized — over time, and under pressure — which writings carried the voice of God and the authority of the apostles. A council's vote did not make a book Scripture; the councils acknowledged an authority the churches were already living under.",
    scripture:
      "All Scripture is inspired by God and profitable for teaching, for reproof, for correction, for training in righteousness.",
    reference: "2 Timothy 3:16",
    historicalContext:
      "Around 144 AD Marcion rejected the Old Testament and trimmed the New to one Gospel and ten letters, forcing the church to state clearly what it had always held. The Muratorian Fragment (c. 180) lists most of our New Testament; Athanasius's Easter letter of 367 first names exactly our twenty-seven books; Hippo (393) and Carthage (397) confirmed it. Trent (1546) also bound the Apocrypha into Rome's Old Testament — a line the Reformers did not follow.",
    reflection:
      "Does it unsettle you or steady you to learn the canon was recognized gradually rather than handed down in one moment?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },
  {
    id: 12,
    category: "Holy Scripture, Deeper",
    categorySlug: "scripture",
    title: "THE CLARITY AND SUFFICIENCY OF SCRIPTURE",
    shortDesc: "Clear Enough, and Enough",
    term: "perspicuitas",
    termLabel: "Latin",
    translation: "Perspicuitas",
    englishMeaning: "Clearness",
    definition:
      "Scripture is clear enough that an ordinary believer, helped by the Spirit and the church, can grasp what is needed for salvation and life — and it is sufficient, holding everything God means to give us for faith and obedience. Hard passages remain, but the main things are the plain things. We are not waiting on an official interpreter to unlock the Bible for us.",
    scripture:
      "The unfolding of Your words gives light; it gives understanding to the simple.",
    reference: "Psalm 119:130",
    historicalContext:
      "By the late medieval period, official interpretation was increasingly reserved to the church's teaching office. The Reformers answered that Scripture interprets itself — the clear passages govern the obscure — and is sufficient without an unwritten tradition standing alongside it. \"Sola Scriptura\" is precisely this: Scripture is the final and sufficient rule, not the only voice we ever hear.",
    reflection:
      "When a passage is hard, do you reach first for a clearer passage of Scripture, or for an outside authority to settle it?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },
  {
    id: 13,
    category: "Holy Scripture, Deeper",
    categorySlug: "scripture",
    title: "THE SPIRIT AND THE WORD",
    shortDesc: "Never One Without the Other",
    term: "Verbum et Spiritus",
    termLabel: "Latin",
    translation: "Verbum et Spiritus",
    englishMeaning: "Word and Spirit",
    definition:
      "The same Spirit who breathed out Scripture is the One who makes it land on the heart. The Word without the Spirit stays a closed book; the Spirit gets claimed for every impulse once He is cut loose from the Word. God has joined them: the Spirit illuminates what He authored, and never contradicts it.",
    scripture:
      "The words that I have spoken to you are spirit and are life.",
    reference: "John 6:63",
    historicalContext:
      "In the 1500s the Reformers fought on two fronts at once: against a church that seemed to bind the Spirit to an institution, and against radical \"enthusiasts\" who claimed fresh revelations that overrode Scripture. Calvin's answer became standard — Spirit and Word are bound together, so the Spirit is known by His agreement with what He inspired.",
    reflection:
      "Have you ever been more drawn to a spiritual \"impression\" than to what Scripture plainly says? How do you tell them apart?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },

  // ─── DEEPER CHRISTOLOGY (14–19) ────────────────────────────────────────────

  {
    id: 14,
    category: "Deeper Christology",
    categorySlug: "christ",
    title: "THE HYPOSTATIC UNION",
    shortDesc: "The Union That Saves Us",
    term: "ἕνωσις ὑποστατική",
    termLabel: "Greek",
    translation: "Henōsis Hypostatikē",
    englishMeaning: "Personal Union",
    definition:
      "In Jesus Christ, one divine Person took on a complete human nature — body and rational soul — without ceasing to be God. The two natures are not blended into a third thing, nor split into two Christs. They are united in the one Person of the Son. It is not a doctrine we could have guessed; it is the shape of the rescue.",
    scripture:
      "The Word became flesh, and dwelt among us, and we saw His glory, glory as of the only begotten from the Father.",
    reference: "John 1:14",
    historicalContext:
      "The word \"hypostasis\" shifted as the church worked: at Nicaea (325) it was used almost interchangeably with \"being\" (ousia); by Chalcedon (451) it had been sharpened to mean \"person.\" The union is called \"hypostatic\" because the two natures meet not in a blended nature but in the single Person of the Son — the point Cyril of Alexandria pressed with his phrase \"one and the same\" Christ, eternal God and born of Mary.",
    reflection:
      "Why does your salvation depend on the two natures being held together in one Person, rather than side by side?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 15,
    category: "Deeper Christology",
    categorySlug: "christ",
    title: "KENOSIS",
    shortDesc: "He Emptied Himself",
    term: "κένωσις",
    termLabel: "Greek",
    translation: "Kenōsis",
    englishMeaning: "Emptying",
    definition:
      "Paul says the Son \"emptied Himself\" in becoming human. He did not empty Himself of deity — He could not stop being God. He set aside the independent use of His glory and rights, took \"the form of a bond-servant,\" lived within the limits of a real human life, and obeyed to the point of death. The emptying is not a subtraction of divinity but its fullest expression: this is what God is like.",
    scripture:
      "He emptied Himself, taking the form of a bond-servant, and being made in the likeness of men.",
    reference: "Philippians 2:7",
    historicalContext:
      "Philippians 2:6-11 is widely thought to be a hymn the church sang before Paul quoted it. In the 1800s some theologians pressed \"emptied\" to mean the Son actually surrendered divine attributes like omniscience — \"kenotic theology.\" Most of the church has resisted that, holding that He veiled His glory and lived within human limits without ever ceasing to be fully God.",
    reflection:
      "If self-emptying love is the very nature of God, where is He calling you to pour yourself out rather than hold on?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 16,
    category: "Deeper Christology",
    categorySlug: "christ",
    title: "CHRIST OUR HIGH PRIEST",
    shortDesc: "He Offered Himself",
    term: "ἀρχιερεύς",
    termLabel: "Greek",
    translation: "Archiereus",
    englishMeaning: "High Priest",
    definition:
      "A priest represents people before God and carries God's mercy back to people. Jesus is the last and greatest priest: He brought not the blood of animals but Himself, offered once for all. And He did not leave the sanctuary — He lives to intercede for us, carrying our names into the presence of God. There is no closer access to be had.",
    scripture:
      "He is able also to save forever those who draw near to God through Him, since He always lives to make intercession for them.",
    reference: "Hebrews 7:25",
    historicalContext:
      "Hebrews argues that Jesus is a priest \"in the order of Melchizedek\" — older than the Levitical priesthood and not dependent on ancestry. At the Reformation this cut hard against the idea of the Mass as a re-offering of Christ: Hebrews says the one sacrifice is finished, and the priest has sat down.",
    reflection:
      "What would change in your prayers if you were sure that Jesus Himself is praying for you right now?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 17,
    category: "Deeper Christology",
    categorySlug: "christ",
    title: "CHRISTUS VICTOR",
    shortDesc: "The Cross as Conquest",
    term: "Christus Victor",
    termLabel: "Latin",
    translation: "Christus Victor",
    englishMeaning: "Christ the Victor",
    definition:
      "The cross is not only a payment for sin; it is a battlefield. On it, Christ disarmed the powers that held humanity captive — sin, death, and the devil — and led them in His victory parade. What looked like His defeat was their undoing. To be a Christian is to have been carried out of one kingdom and into another.",
    scripture:
      "When He had disarmed the rulers and authorities, He made a public display of them, having triumphed over them through Him.",
    reference: "Colossians 2:15",
    historicalContext:
      "This was how the early church most often spoke of the cross — Irenaeus, and the \"ransom\" imagery of Origen and Gregory of Nyssa. Anselm's Cur Deus Homo (1098) turned Western attention to the cross as satisfaction of God's justice. Around 1930 the Swedish theologian Gustaf Aulén argued the older victory theme had been wrongly sidelined, and his book gave it the name Christus Victor.",
    reflection:
      "Which do you feel you need more today — to be forgiven, or to be rescued? How does the cross do both?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 18,
    category: "Deeper Christology",
    categorySlug: "christ",
    title: "THE THREEFOLD OFFICE",
    shortDesc: "Prophet, Priest, and King",
    term: "munus triplex",
    termLabel: "Latin",
    translation: "Munus Triplex",
    englishMeaning: "Threefold Office",
    definition:
      "In the Old Testament, prophets, priests, and kings were anointed for their work. Jesus is the Anointed One — the Christ — who fills all three at once. As Prophet He is God's final word to us; as Priest He reconciles us to God and prays for us; as King He rules over all things and defends His people. Whatever you need from God is met in one Person.",
    scripture:
      "God, after He spoke long ago to the fathers in the prophets in many portions and in many ways, in these last days has spoken to us in His Son.",
    reference: "Hebrews 1:1-2",
    historicalContext:
      "Eusebius of Caesarea (4th century) noticed that all three anointed Old Testament roles converge on Christ. John Calvin made the \"threefold office\" a standard teaching framework in his Institutes, and it has been used across Protestant traditions ever since.",
    reflection:
      "Which office of Christ — Prophet, Priest, or King — do you lean on least? What would it look like to trust Him there?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 19,
    category: "Deeper Christology",
    categorySlug: "christ",
    title: "THE SECOND ADAM",
    shortDesc: "A New Head for the Race",
    term: "ἔσχατος Ἀδάμ",
    termLabel: "Greek",
    translation: "Eschatos Adam",
    englishMeaning: "Last Adam",
    definition:
      "Scripture reads history through two men. The first Adam was tested, disobeyed, and pulled the whole race down with him into sin and death. Christ, the \"last Adam,\" was tested, obeyed all the way to the cross, and raised up a new humanity in Himself. You are born into the first Adam; you are born again into the second.",
    scripture:
      "For as in Adam all die, so also in Christ all will be made alive.",
    reference: "1 Corinthians 15:22",
    historicalContext:
      "Paul develops this in Romans 5 and 1 Corinthians 15. Irenaeus (2nd century) built it into his doctrine of \"recapitulation\" — Christ retracing and reversing Adam's steps, undoing the fall at every point, so humanity gets a fresh start under a faithful head.",
    reflection:
      "What does it mean for your daily fight with sin that you are no longer defined by Adam, but by Christ?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },

  // ─── COVENANT & REDEMPTIVE HISTORY (20–25) ─────────────────────────────────

  {
    id: 20,
    category: "Covenant & Redemptive History",
    categorySlug: "covenant",
    title: "COVENANT",
    shortDesc: "How God Binds Himself to Us",
    term: "בְּרִית",
    termLabel: "Hebrew",
    translation: "Berith",
    englishMeaning: "Covenant, Binding Bond",
    definition:
      "A covenant is a solemn, binding relationship — more than a contract, closer to a marriage. God does not relate to His people by loose arrangement but by covenant: He names a people, makes promises, calls for faithfulness, and swears Himself to it. From Noah to Abraham to Sinai to David, the covenants build toward the new covenant in Christ's blood, where God keeps both sides.",
    scripture:
      "I will establish My covenant between Me and you and your descendants after you throughout their generations for an everlasting covenant, to be God to you.",
    reference: "Genesis 17:7",
    historicalContext:
      "Reformed theologians — Bullinger, Cocceius, and the Westminster Assembly in the 1640s — organized the whole Bible around covenant: one plan of grace unfolding in stages. Later dispensationalists read the covenants as more sharply divided eras. Either way, \"covenant\" is the Bible's own word for how God does relationship.",
    reflection:
      "God relates to you by covenant, not by mood. How does that change the way you come to Him after you have failed?",
    colors: { dark: "#3f2d1a", accent: "#d8b48a" },
  },
  {
    id: 21,
    category: "Covenant & Redemptive History",
    categorySlug: "covenant",
    title: "THE LAW AND ITS PURPOSE",
    shortDesc: "The Tutor That Leads to Christ",
    term: "παιδαγωγός",
    termLabel: "Greek",
    translation: "Paidagōgos",
    englishMeaning: "Guardian, Tutor",
    definition:
      "The law is good, but it was never meant to save. It shows us God's character, exposes our sin, and restrains evil in the world — and it does one more thing: it drives us to Christ by making plain that we cannot keep it. Paul calls it a \"tutor\" that brings us to the door of grace and then hands us over.",
    scripture:
      "The Law has become our tutor to lead us to Christ, so that we may be justified by faith.",
    reference: "Galatians 3:24",
    historicalContext:
      "Paul, a trained Pharisee, had kept the Law meticulously and still called it powerless to make anyone righteous (Romans 8:3). At the Reformation, Luther stressed the Law's work of exposing sin; Calvin added a \"third use\" — the Law as a guide for the grateful believer, which he called its \"principal\" use. How Law and gospel relate has never fully settled.",
    reflection:
      "Do you experience God's commands mostly as crushing, or as a guide you are glad to have? What would move you from one to the other?",
    colors: { dark: "#3f2d1a", accent: "#d8b48a" },
  },
  {
    id: 22,
    category: "Covenant & Redemptive History",
    categorySlug: "covenant",
    title: "TYPOLOGY",
    shortDesc: "Shadows Cast Ahead",
    term: "τύπος",
    termLabel: "Greek",
    translation: "Typos",
    englishMeaning: "Pattern, Foreshadow",
    definition:
      "God wrote the Old Testament so that its people, events, and institutions would prefigure Christ — real history that also carries a pattern pointing forward. The Passover lamb, the bronze serpent, the temple, Jonah's three days: each is a shadow, and Christ is the substance that cast it. Typology is not reading things in; it is seeing what was built in.",
    scripture:
      "Now these things happened to them as an example, and they were written for our instruction, upon whom the ends of the ages have come.",
    reference: "1 Corinthians 10:11",
    historicalContext:
      "The New Testament writers model the method constantly — Hebrews is nearly all typology. The early church split into two schools: Antioch kept typology tethered to the text's plain sense, while Alexandria often let it drift into free allegory. The rule the church settled on: a type must be grounded in the text and confirmed by Scripture itself. (Deck 4, Fulfilled, walks the types one by one.)",
    reflection:
      "How does it deepen your trust in the Bible to see one Author's design running from Genesis to Christ?",
    colors: { dark: "#3f2d1a", accent: "#d8b48a" },
  },
  {
    id: 23,
    category: "Covenant & Redemptive History",
    categorySlug: "covenant",
    title: "THEOPHANY AND THE ANGEL OF THE LORD",
    shortDesc: "When God Showed Up",
    term: "θεοφάνεια",
    termLabel: "Greek",
    translation: "Theophaneia",
    englishMeaning: "Appearance of God",
    definition:
      "Long before Bethlehem, God appeared — in the fire of the bush, as the fourth figure in the furnace, as the \"angel of the LORD\" who speaks as God and receives worship, as the man who wrestled Jacob. These appearances are real, and they are veiled. Many Christians have seen in them the Son making Himself known before He took flesh; others urge caution. Either way, the God of the Old Testament is not distant — He draws near.",
    scripture:
      "The angel of the LORD appeared to him in a blazing fire from the midst of a bush... God called to him from the midst of the bush.",
    reference: "Exodus 3:2-4",
    historicalContext:
      "Justin Martyr (2nd century) and many early fathers identified the \"angel of the LORD\" as the pre-incarnate Word, since he is both distinguished from God and speaks as God. Augustine was more careful, allowing that a created angel might carry God's presence and voice. The church has never dogmatically settled it — a place to hold a strong hunch with an open hand.",
    reflection:
      "The God who kept stepping into His people's story took on flesh to stay. What does His long history of drawing near tell you about His heart?",
    colors: { dark: "#3f2d1a", accent: "#d8b48a" },
  },
  {
    id: 24,
    category: "Covenant & Redemptive History",
    categorySlug: "covenant",
    title: "ALREADY AND NOT YET",
    shortDesc: "Living Between Two Ages",
    definition:
      "The kingdom of God has already broken in — in Jesus' life, death, and resurrection, the future planted a flag in the present. And it is not yet complete: sin, death, and sorrow still operate. The Christian lives in the overlap, tasting the powers of the age to come while still waiting for the King to finish what He started. Most confusion about the Christian life comes from collapsing this tension one way or the other.",
    scripture:
      "...and have tasted the good word of God and the powers of the age to come.",
    reference: "Hebrews 6:5",
    historicalContext:
      "Twentieth-century biblical scholars — Geerhardus Vos, then Oscar Cullmann and George Eldon Ladd — recovered this framework and named it. Cullmann's image: the decisive battle has been won at the cross and resurrection, though the final surrender is still to come.",
    reflection:
      "Which do you tend to lose — the \"already\" (and grow cynical), or the \"not yet\" (and expect heaven now)?",
    colors: { dark: "#3f2d1a", accent: "#d8b48a" },
  },
  {
    id: 25,
    category: "Covenant & Redemptive History",
    categorySlug: "covenant",
    title: "ELECTION IN CHRIST",
    shortDesc: "Chosen in Him",
    term: "ἐκλογή",
    termLabel: "Greek",
    translation: "Eklogē",
    englishMeaning: "A Choosing",
    definition:
      "Before the world began, God set His love on a people and purposed to save them — and Scripture always locates that choice \"in Christ.\" He is the Chosen One; we are chosen in Him. The doctrine is meant to produce not anxious calculation but worship and security: your standing with God did not begin with your decision and does not rest on your performance. This card states what Scripture says and leaves the long debate over how it fits with human freedom for another room.",
    scripture:
      "He chose us in Him before the foundation of the world, that we would be holy and blameless before Him.",
    reference: "Ephesians 1:4",
    historicalContext:
      "The church has argued over election for sixteen centuries — Augustine against Pelagius (5th c.), the Synod of Orange (529), the Synod of Dort against the Remonstrants (1618-19), Wesley against Whitefield. Godly Christians have landed in different places. What nearly all affirm together: salvation originates in God's grace, not our merit, and is received \"in Christ.\"",
    reflection:
      "Can you receive \"you were chosen in love before you existed\" as good news — steadying rather than unsettling?",
    colors: { dark: "#3f2d1a", accent: "#d8b48a" },
  },

  // ─── DEEPER SOTERIOLOGY (26–33) ───────────────────────────────────────────

  {
    id: 26,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "THE ORDER OF SALVATION",
    shortDesc: "How the Pieces Fit",
    term: "ordo salutis",
    termLabel: "Latin",
    translation: "Ordo Salutis",
    englishMeaning: "Order of Salvation",
    definition:
      "Salvation is one act of God, but it has parts, and they relate in an order — not always in time, but in logic. God calls; the Spirit gives new birth; we respond in faith and repentance; God declares us righteous; He adopts us, makes us holy over a lifetime, and finally glorifies us. Naming the parts guards two mistakes: thinking we started it, and thinking it stalls.",
    scripture:
      "These whom He predestined, He also called; and these whom He called, He also justified; and these whom He justified, He also glorified.",
    reference: "Romans 8:30",
    historicalContext:
      "Romans 8:29-30 — the \"golden chain\" — is the seed text. Protestant scholastics in the 1600s worked out detailed orderings; Lutheran and Reformed writers arranged the links a little differently, and the Puritans mapped the stages of conversion closely. The value is pastoral: you can locate where you are, and see that God finishes what He starts.",
    reflection:
      "Which link do you most need to hear today — that you were called, that you are righteous, that you will be glorified?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 27,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "REDEMPTION",
    shortDesc: "Bought Back at a Price",
    term: "ἀπολύτρωσις",
    termLabel: "Greek",
    translation: "Apolytrōsis",
    englishMeaning: "Release by Payment",
    definition:
      "To redeem is to buy someone out of bondage. We were enslaved — to sin, to death, to a debt we could not pay — and Christ purchased our freedom with His own blood. Redemption names the cost. Your liberty was not cheap, and it was not owed to you; it was bought.",
    scripture:
      "In Him we have redemption through His blood, the forgiveness of our trespasses, according to the riches of His grace.",
    reference: "Ephesians 1:7",
    historicalContext:
      "In the ancient world the word belonged to the marketplace and the slave market — a price paid to release someone from bondage. The New Testament writers reach for it deliberately (\"you were bought with a price\") while staying restrained about the details the picture could invite. What Scripture insists on is the cost: \"not with perishable things like silver or gold, but with precious blood, as of a lamb unblemished and spotless\" (1 Peter 1:18-19).",
    reflection:
      "What does it do to your sense of worth to know God considered you worth the blood of His Son?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 28,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "RECONCILIATION",
    shortDesc: "Enemies Made Friends",
    term: "καταλλαγή",
    termLabel: "Greek",
    translation: "Katallagē",
    englishMeaning: "Exchange, Restored Friendship",
    definition:
      "Sin is not only a legal problem; it is a broken relationship. We were \"enemies\" of God — hostile, estranged, hiding. Reconciliation is God Himself removing the hostility from His side at the cross, and then coming to remove it from ours. The record is cleared in justification; in reconciliation the two parties are actually brought back together.",
    scripture:
      "For if while we were enemies we were reconciled to God through the death of His Son, much more, having been reconciled, we shall be saved by His life.",
    reference: "Romans 5:10",
    historicalContext:
      "Paul's word pictures a change from enmity to peace. The doctrine moved to the center of some 20th-century theology — Karl Barth organized his account of salvation around it — and it grounds the church's \"ministry of reconciliation,\" between people and God and between people long divided from each other.",
    reflection:
      "Is there a way you still relate to God as if He were reluctant or annoyed with you? What would it mean to believe the war is over?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 29,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "PROPITIATION AND EXPIATION",
    shortDesc: "Wrath Turned, Sin Covered",
    term: "ἱλαστήριον",
    termLabel: "Greek",
    translation: "Hilastērion",
    englishMeaning: "Place / Means of Atonement",
    definition:
      "The cross does two things the words are often split between. Expiation means our sin is covered and carried away. Propitiation means God's righteous anger against sin is satisfied and turned aside. Both are true and not at odds: at the cross God Himself provides the offering that answers His own justice. Holiness and love meet there, neither one compromised.",
    scripture:
      "God displayed Him publicly as a propitiation in His blood through faith... so that He would be just and the justifier of the one who has faith in Jesus.",
    reference: "Romans 3:25-26",
    historicalContext:
      "In the 1930s the British scholar C.H. Dodd argued the Greek word should be softened to \"expiation\" — sin dealt with, but no divine wrath in view. Leon Morris and others answered in the 1950s that Scripture does speak of God's wrath and that the cross turns it aside. Most traditions and translations have kept both ideas.",
    reflection:
      "Does it comfort or trouble you that God takes sin seriously enough to be angry at it? Why might that anger be good news?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 30,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "ASSURANCE",
    shortDesc: "Knowing That You're His",
    term: "πληροφορία",
    termLabel: "Greek",
    translation: "Plērophoria",
    englishMeaning: "Full Confidence",
    definition:
      "Can a Christian know they are saved? Scripture says yes — not by hunting inward for enough feeling or fruit, but by looking to Christ's finished work, trusting God's promises, and noticing the Spirit's quiet witness that we are God's children. Assurance is not arrogance; it is resting where God tells you to rest — and that rest frees you to love.",
    scripture:
      "The Spirit Himself testifies with our spirit that we are children of God.",
    reference: "Romans 8:16",
    historicalContext:
      "The Council of Trent (1547) taught that ordinary believers cannot be certain of their grace — certainty looked like presumption. The Reformers and the Westminster Confession (ch. 18) answered that assurance is possible and is to be sought. Wesley's heart \"strangely warmed\" at Aldersgate in 1738 became the era's most famous account. This card also carries the older picture of the Spirit as God's \"seal and guarantee\" — the down payment on our inheritance (Eph 1:13-14).",
    reflection:
      "When you doubt your standing with God, where do you go looking for reassurance — and where does Scripture send you?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 31,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "THE PRESERVATION OF THE SAINTS",
    shortDesc: "Kept to the End",
    term: "τηρέω",
    termLabel: "Greek",
    translation: "Tēreō",
    englishMeaning: "To Keep, Guard, Preserve",
    definition:
      "Can a true believer finally fall away? The Reformed answer no: everyone God actually saves, He preserves — held by the Father's grip and the Son's unceasing prayer, not by their own strength. Wesleyan and Arminian traditions answer that genuine faith can be abandoned, and that the New Testament's warnings mean exactly what they say. Both sides take Scripture's assurances and its warnings with full seriousness; they weigh them differently.",
    scripture:
      "For I am confident of this very thing, that He who began a good work in you will perfect it until the day of Christ Jesus.",
    reference: "Philippians 1:6",
    historicalContext:
      "The Synod of Dort (1618-19) affirmed the preservation of the saints as the fifth answer to the Remonstrants, who taught that genuine believers could finally fall away. Wesleyan and much of Arminian Christianity has held that line ever since. Both traditions wrestle hardest with the warning passages, especially Hebrews 6 and 10.",
    reflection:
      "Whichever way you land, Scripture means its assurances to steady you and its warnings to sober you. Which do you need to hear more today?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 32,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "GLORIFICATION AND THEOSIS",
    shortDesc: "Sharing God's Own Life",
    term: "θέωσις",
    termLabel: "Greek",
    translation: "Theōsis",
    englishMeaning: "Deification, Being Made Godlike",
    definition:
      "The end of salvation is more than a clean record and a place in heaven. God means to make us like Christ all the way through — bodies raised imperishable, character finally whole, our whole being caught up into the life and love of the Trinity. The old teachers dared to call it \"deification\": not that we become God by nature, but that by grace we truly share what is His — His holiness, His immortality, His glory.",
    scripture:
      "He has granted to us His precious and magnificent promises, so that by them you may become partakers of the divine nature.",
    reference: "2 Peter 1:4",
    historicalContext:
      "Irenaeus and Athanasius put it bluntly: \"He became what we are that He might make us what He is\" (Athanasius, On the Incarnation). The Cappadocians and Maximus the Confessor developed it; in the 14th century Gregory Palamas distinguished God's unknowable essence from His energies, which we really do partake. The East kept this at the center of salvation; the West has recovered it lately through C.S. Lewis and fresh readings of Luther.",
    reflection:
      "If your future is not just forgiveness but sharing God's own life, how does that reframe the person you are becoming now?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 33,
    category: "Deeper Soteriology",
    categorySlug: "salvation",
    title: "THE SAINTS",
    shortDesc: "You Are Already One",
    term: "οἱ ἅγιοι",
    termLabel: "Greek",
    translation: "Hoi Hagioi",
    englishMeaning: "The Holy Ones",
    definition:
      "In the New Testament, \"saint\" is not a medal for the spiritually elite — it is the ordinary word for every believer. To be \"in Christ\" is to be holy, set apart, given a new name and a new belonging before you feel remotely holy. Paul writes to whole messy churches and calls them \"saints.\" Your identity is a gift you grow into, not a rank you climb toward.",
    scripture:
      "To the church of God which is at Corinth, to those who have been sanctified in Christ Jesus, saints by calling.",
    reference: "1 Corinthians 1:2",
    historicalContext:
      "By the Middle Ages \"saint\" had narrowed to the canonized dead, recognized through a formal papal process (regularized from the 10th century) and honored with feast days. The Reformers recovered the New Testament usage — every believer a saint — while still holding up exemplary Christians as worth imitating. ARK's own language: \"beloved sinner\" becomes \"beloved saint.\"",
    reflection:
      "If God already calls you a saint, what changes when you stop trying to earn the title and start living from it?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },

  // ─── DEEPER PNEUMATOLOGY (34–37) ──────────────────────────────────────────

  {
    id: 34,
    category: "Deeper Pneumatology",
    categorySlug: "spirit",
    title: "ILLUMINATION",
    shortDesc: "Eyes Opened to the Text",
    term: "φωτισμός",
    termLabel: "Greek",
    translation: "Phōtismos",
    englishMeaning: "Enlightenment, Giving of Light",
    definition:
      "Inspiration is what the Spirit did when Scripture was written; illumination is what He does when it is read. The same words can sit dead on the page or suddenly land with weight and light. The Spirit adds no new revelation — He opens blind eyes to see what is already there, and moves the truth from the head to the heart.",
    scripture:
      "I pray that the eyes of your heart may be enlightened, so that you will know what is the hope of His calling.",
    reference: "Ephesians 1:18",
    historicalContext:
      "Jonathan Edwards called what happens when the Spirit lights up a text \"a divine and supernatural light\" (1734) — not new information, but a new spiritual sense of what Scripture already says, the way one moves from knowing honey is sweet to tasting it. The Puritans built the practice of praying Scripture back to God around exactly this expectation.",
    reflection:
      "When did a familiar verse last open up for you? What were you doing when it happened?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 35,
    category: "Deeper Pneumatology",
    categorySlug: "spirit",
    title: "FILLED WITH THE SPIRIT",
    shortDesc: "Indwelt Once, Filled Often",
    term: "πληρόω",
    termLabel: "Greek",
    translation: "Plēroō",
    englishMeaning: "To Fill, Make Full",
    definition:
      "Every believer has the Spirit — He takes up permanent residence at conversion. But Scripture also commands us to \"be filled\": a present-tense, repeatable thing — to be so yielded to the Spirit that He governs your words, your worship, your courage, your love. Indwelling is a fact to rest in; filling is a reality to keep seeking.",
    scripture:
      "Do not get drunk with wine, for that is dissipation, but be filled with the Spirit.",
    reference: "Ephesians 5:18",
    historicalContext:
      "The nineteenth-century Wesleyan holiness movement and the Keswick \"higher life\" Convention (from 1875) taught a decisive experience of consecration or Spirit-filling after conversion. Traditions still differ on whether \"filling\" is one crisis, many, or a settled walk; nearly all agree it is not automatic. \"Be filled\" in Ephesians 5:18 is a present-tense command — keep on being filled.",
    reflection:
      "What does a life \"under the influence\" of the Spirit look like in practice for you this week?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 36,
    category: "Deeper Pneumatology",
    categorySlug: "spirit",
    title: "SANCTIFICATION — THE TRADITIONS",
    shortDesc: "How Holiness Grows",
    term: "ἁγιασμός",
    termLabel: "Greek",
    translation: "Hagiasmos",
    englishMeaning: "The Process of Being Made Holy",
    definition:
      "All Christians agree the Spirit makes believers holy; they describe the how differently. The Reformed stress steady, lifelong growth through ordinary means. Wesleyans hope for a deeper work that breaks sin's reign. The Keswick stream speaks of \"letting go and letting God.\" Lutherans keep returning the believer to their baptism and to justification. Each guards something true; none holds the whole picture alone.",
    scripture:
      "But we all, with unveiled face, beholding as in a mirror the glory of the Lord, are being transformed into the same image from glory to glory.",
    reference: "2 Corinthians 3:18",
    historicalContext:
      "John Wesley's \"Christian perfection\" (1700s), the Keswick Convention (from 1875), and Reformed critics such as B.B. Warfield — these debates shaped how whole movements teach the Christian life. The common ground: sanctification is the Spirit's work, it uses means (Word, prayer, community, obedience), and it is not finished until glory.",
    reflection:
      "Which of these pictures of growth have you absorbed without realizing it? Does it help you, or leave you stuck?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 37,
    category: "Deeper Pneumatology",
    categorySlug: "spirit",
    title: "PROPHECY AND THE GIFTS TODAY",
    shortDesc: "Do the Gifts Continue?",
    term: "προφητεία",
    termLabel: "Greek",
    translation: "Prophēteia",
    englishMeaning: "Prophecy, Inspired Speech",
    definition:
      "In the New Testament, prophecy is Spirit-prompted speech that strengthens, encourages, and comforts the church — always weighed, never a rival to Scripture. Whether the more dramatic gifts (prophecy, tongues, healing) continue today or ceased with the apostolic age is a question the church has answered in different ways. Both sides want the same thing: the Spirit's power, under the Spirit's Word.",
    scripture:
      "Pursue love, yet desire earnestly spiritual gifts, but especially that you may prophesy... one who prophesies speaks to men for edification and exhortation and consolation.",
    reference: "1 Corinthians 14:1-3",
    historicalContext:
      "Montanism (2nd century) claimed new, authoritative prophecy and was rejected — teaching the church to test every claim against Scripture. Many later held the gifts had ceased with the apostles, a view sharpened by B.B. Warfield in 1918. The Pentecostal movement (1906) and the charismatic renewal (1960s) reasserted their continuation. \"Cessationist\" and \"continuationist\" are the modern labels.",
    reflection:
      "Whichever way you lean, how do you make room for the Spirit to work without lowering your guard on Scripture?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },

  // ─── DEEPER ECCLESIOLOGY (38–42) ──────────────────────────────────────────

  {
    id: 38,
    category: "Deeper Ecclesiology",
    categorySlug: "church",
    title: "THE FOUR MARKS OF THE CHURCH",
    shortDesc: "One, Holy, Catholic, Apostolic",
    term: "μία, ἁγία, καθολικὴ, ἀποστολική",
    termLabel: "Greek",
    translation: "Mia, Hagia, Katholikē, Apostolikē",
    englishMeaning: "One, Holy, Universal, Apostolic",
    definition:
      "The Nicene Creed confesses four marks. The church is one — a single body across every division. Holy — set apart by God, however unfinished it looks. Catholic — universal, the same faith in every place and age. Apostolic — built on and faithful to the apostles' teaching. These are not achievements the church has reached; they are gifts of Christ it is called to live up to.",
    scripture:
      "There is one body and one Spirit, just as also you were called in one hope of your calling.",
    reference: "Ephesians 4:4",
    historicalContext:
      "The Council of Constantinople (381) added the phrase to the Nicene Creed. At the Reformation, when \"which church is the true one?\" became urgent, the Reformers proposed a working test alongside the four marks: the true church is found where the Word is rightly preached and the sacraments rightly administered (Belgic Confession, 1561).",
    reflection:
      "Which of the four marks does your own church community most need to grow into right now?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 39,
    category: "Deeper Ecclesiology",
    categorySlug: "church",
    title: "THE COMMUNION OF SAINTS",
    shortDesc: "A Fellowship Across Time",
    term: "communio sanctorum",
    termLabel: "Latin",
    translation: "Communio Sanctorum",
    englishMeaning: "The Fellowship of the Holy Ones",
    definition:
      "Every believer, living or dead, is joined to Christ — and therefore to one another. We share one Lord, one Spirit, one inheritance; what belongs to one belongs to all. This is why the church is not a club you join but a family you are born into, and why the Christians of the past are not gone but \"a great cloud of witnesses\" around the ones still running.",
    scripture:
      "You have come to Mount Zion... to the general assembly and church of the firstborn who are enrolled in heaven... and to the spirits of the righteous made perfect.",
    reference: "Hebrews 12:22-23",
    historicalContext:
      "The phrase entered the Apostles' Creed by the fifth century. In the Middle Ages it grew to include a \"treasury of merit\" and prayers to and for the dead; the Reformers trimmed it back to its core — the living fellowship of all who are in Christ — while keeping deep honor for the faithful who have gone before.",
    reflection:
      "How would remembering that you belong to a family two thousand years deep change the way you carry a hard week?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 40,
    category: "Deeper Ecclesiology",
    categorySlug: "church",
    title: "THE PRIESTHOOD OF ALL BELIEVERS",
    shortDesc: "Every Christian a Priest",
    term: "ἱεράτευμα",
    termLabel: "Greek",
    translation: "Hierateuma",
    englishMeaning: "Priesthood, Body of Priests",
    definition:
      "Under the old covenant, only priests came near to God and mediated for others. In Christ, that access belongs to every believer: you may go straight to God through Jesus, you offer spiritual sacrifices of praise and service, and you can point others to Him. There is still a place for pastors and teachers — but not as a barrier between you and God.",
    scripture:
      "You are a chosen race, a royal priesthood, a holy nation, a people for God's own possession, so that you may proclaim the excellencies of Him who has called you.",
    reference: "1 Peter 2:9",
    historicalContext:
      "Luther pressed this hard in 1520 (To the Christian Nobility of the German Nation), against a sharp clergy–laity divide: every baptized Christian, he argued, is already a priest, and the ordained ministry is an office of order, not a higher spiritual class. It reshaped Protestant worship, vocation, and the expectation that every believer reads Scripture and serves.",
    reflection:
      "If you are a priest, whom has God set near you that you could carry to Him in prayer, or bring a word of grace to?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 41,
    category: "Deeper Ecclesiology",
    categorySlug: "church",
    title: "THE KEYS OF THE KINGDOM",
    shortDesc: "Authority to Bind and Loose",
    term: "κλεῖς",
    termLabel: "Greek",
    translation: "Kleis",
    englishMeaning: "Key",
    definition:
      "Jesus gave His church \"the keys\" — the authority to open and shut the door of the kingdom by declaring the gospel's terms: forgiveness announced to the repentant, warning to the unrepentant. It is exercised in preaching, in baptism and the Lord's Table, and in recognizing or removing members. The keys do not create the verdict; they announce heaven's.",
    scripture:
      "I will give you the keys of the kingdom of heaven; and whatever you bind on earth shall have been bound in heaven, and whatever you loose on earth shall have been loosed in heaven.",
    reference: "Matthew 16:19",
    historicalContext:
      "Rome has read this text as granting a unique authority to Peter and his successors. The Reformers read the keys as given to the whole church and exercised through the ministry of the Word — the same authority Jesus repeats to the gathered community in Matthew 18:18. The difference still marks the divide over church authority.",
    reflection:
      "Does it comfort or unsettle you that Christ entrusted real spiritual authority to a body of ordinary Christians?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 42,
    category: "Deeper Ecclesiology",
    categorySlug: "church",
    title: "CHURCH DISCIPLINE",
    shortDesc: "Correction That Aims to Restore",
    term: "νουθεσία",
    termLabel: "Greek",
    translation: "Nouthesia",
    englishMeaning: "Admonition, Correction",
    definition:
      "When a believer falls into serious, unrepented sin, Jesus lays out a path: a private word, then one or two others, then the church — every step hoping for repentance, none of it eager for exclusion. The goal is never punishment; it is to win a brother back, to protect the flock, and to keep the church's witness honest. Done in love, it is one of the kindest things a church can do.",
    scripture:
      "If your brother sins, go and show him his fault in private; if he listens to you, you have won your brother.",
    reference: "Matthew 18:15",
    historicalContext:
      "The Anabaptists made the \"ban\" central to their vision of a pure church; Calvin's Geneva built a \"consistory\" to oversee congregational life; for some Reformation churches, rightly exercised discipline became a third \"mark\" of a true church alongside Word and sacrament. Neglect of it, and abuse of it, have both done real damage.",
    reflection:
      "Have you experienced correction that was actually for you, not against you? What made the difference?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },

  // ─── DEEPER LAST THINGS (43–46) ───────────────────────────────────────────

  {
    id: 43,
    category: "Deeper Last Things",
    categorySlug: "eschatology",
    title: "THE INTERMEDIATE STATE",
    shortDesc: "Between Death and Resurrection",
    term: "status intermedius",
    termLabel: "Latin",
    translation: "Status Intermedius",
    englishMeaning: "The In-Between State",
    definition:
      "When a believer dies, Scripture pictures them \"away from the body and at home with the Lord\" — a conscious, restful presence with Christ, not oblivion and not an unconscious sleep. It is real and good, and it is still not the goal. The goal is the resurrection of the body, when the whole person is made new.",
    scripture:
      "We are of good courage, I say, and prefer rather to be absent from the body and to be at home with the Lord.",
    reference: "2 Corinthians 5:8",
    historicalContext:
      "Some, in various eras, have taught \"soul sleep\" — that the dead are unconscious until the resurrection; Calvin wrote a treatise against it (Psychopannychia, drafted 1534). Rome developed the doctrine of purgatory, a purifying after death; the Reformers rejected it as adding to Christ's finished work. The common Christian hope: to die is to be \"with Christ,\" which is \"far better\" (Philippians 1:23).",
    reflection:
      "How does \"at home with the Lord\" the moment you die change the way you think about your own death, or a loved one's?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
  {
    id: 44,
    category: "Deeper Last Things",
    categorySlug: "eschatology",
    title: "THE MILLENNIUM",
    shortDesc: "The Thousand Years",
    term: "χίλια ἔτη",
    termLabel: "Greek",
    translation: "Chilia Etē",
    englishMeaning: "A Thousand Years",
    definition:
      "Revelation 20 describes Christ reigning for \"a thousand years.\" Christians read it three main ways. Premillennialism: Christ returns, then reigns on earth for an age. Postmillennialism: the gospel gradually brings a long era of blessing, then Christ returns. Amillennialism: the \"thousand years\" is the whole present church age, Christ reigning now from heaven. Godly readers hold each. The return itself is not in doubt; its timetable is.",
    scripture:
      "They came to life and reigned with Christ for a thousand years.",
    reference: "Revelation 20:4",
    historicalContext:
      "Early writers like Papias and Irenaeus expected an earthly reign (chiliasm). Augustine's City of God (early 400s) argued the thousand years is the present age, and amillennialism became the Western default for a millennium. Postmillennial hope surged in the 1700s–1800s; dispensational premillennialism spread widely from the 1830s through popular teaching. This card lays out the views rather than settling them.",
    reflection:
      "Does your reading of the end times make you more anxious, more passive, or more ready to work and wait? Which does Scripture seem to want?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
  {
    id: 45,
    category: "Deeper Last Things",
    categorySlug: "eschatology",
    title: "HELL AND JUDGMENT",
    shortDesc: "The Weight of Final Things",
    term: "γέεννα",
    termLabel: "Greek",
    translation: "Gehenna",
    englishMeaning: "The Valley of Hinnom; Final Judgment",
    definition:
      "Scripture is sober and clear that there is a final judgment, and that rejecting God has a lasting end. The historic mainstream has understood this as conscious, unending separation from God. A minority of orthodox voices have argued for \"conditional immortality\" — that the finally lost cease to exist. Universal salvation has been proposed and, historically, rejected. However one weighs the language, the doctrine is a summons to take God, sin, and the gospel seriously.",
    scripture:
      "These will go away into eternal punishment, but the righteous into eternal life.",
    reference: "Matthew 25:46",
    historicalContext:
      "A form of universalism associated with Origen was condemned at the Second Council of Constantinople (553). Conditional immortality / annihilationism has had respected modern defenders (Edward Fudge; John Stott expressed sympathy). Eternal conscious torment has been the majority position across the traditions. The church holds the reality firmly and the details with care.",
    reflection:
      "How does the seriousness of judgment change the way you hear — and share — the offer of grace?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
  {
    id: 46,
    category: "Deeper Last Things",
    categorySlug: "eschatology",
    title: "THE BEATIFIC VISION",
    shortDesc: "Seeing God Face to Face",
    term: "visio Dei",
    termLabel: "Latin",
    translation: "Visio Dei",
    englishMeaning: "The Vision of God",
    definition:
      "The deepest promise of the age to come is not a place or a reward but a Person: we will see God. \"The pure in heart shall see God.\" \"We will see Him just as He is,\" and be made like Him in the seeing. Every other joy of the new creation flows from this one — the unhindered sight of the face we were made for.",
    scripture:
      "For now we see in a mirror dimly, but then face to face; now I know in part, but then I will know fully just as I also have been fully known.",
    reference: "1 Corinthians 13:12",
    historicalContext:
      "Augustine ended The City of God on it; Thomas Aquinas made the vision of God the final end of human life. A medieval dispute over whether the saints see God immediately at death was settled for Rome by the bull Benedictus Deus (1336). Protestant writers kept the hope while insisting it is Christ, and grace, that make the sight possible.",
    reflection:
      "What in you is being prepared — or needs to be — for the day you see God's face?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },

  // ─── THE CHRISTIAN LIFE, DEEPER (47–50) ───────────────────────────────────

  {
    id: 47,
    category: "The Christian Life, Deeper",
    categorySlug: "life",
    title: "SABBATH AND REST",
    shortDesc: "Rest as Trust, Not Reward",
    term: "שַׁבָּת",
    termLabel: "Hebrew",
    translation: "Shabbat",
    englishMeaning: "To Cease, To Rest",
    definition:
      "God rested on the seventh day, not from exhaustion but from completion — and He built that rhythm into His people. In Christ, Sabbath rest is fulfilled: we stop striving to earn what He has finished, and we practice trusting Him by actually ceasing our work. Rest is not the prize at the end of a productive life; it is a weekly confession that the world is held by God, not by us.",
    scripture:
      "So there remains a Sabbath rest for the people of God. For the one who has entered His rest has himself also rested from his works, as God did from His.",
    reference: "Hebrews 4:9-10",
    historicalContext:
      "The Puritans and the Westminster Confession taught a strict \"Christian Sabbath\" on Sunday; continental Reformed and Lutheran views were more relaxed; Seventh-day Adventists kept Saturday. Hebrews 4 reframes the question: the Sabbath was always pointing to the rest Christ gives, which we enter by faith and rehearse by resting.",
    reflection:
      "What would it cost you to stop for a full day each week — and what might that cost reveal about where your trust actually sits?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 48,
    category: "The Christian Life, Deeper",
    categorySlug: "life",
    title: "VOCATION AND CALLING",
    shortDesc: "All of Life Is Sacred Work",
    term: "κλῆσις",
    termLabel: "Greek",
    translation: "Klēsis",
    englishMeaning: "A Calling, Invitation",
    definition:
      "God calls every believer — first to Himself, and then to a life of love expressed through ordinary work: parenting, trades, study, neighboring, employment. There is no sacred/secular divide in the kingdom; the farmer and the pastor both serve God in their labor. Done in faith and love, your daily work is one of the main places that calling actually happens.",
    scripture:
      "Each man must remain in that condition in which he was called... For he who was called in the Lord while a slave, is the Lord's freedman.",
    reference: "1 Corinthians 7:20-22",
    historicalContext:
      "Medieval thought reserved \"vocation\" for monks and clergy. Luther insisted that milkmaid and magistrate have callings as real as any priest's, and that God feeds the world through ordinary work. Centuries later the sociologist Max Weber traced modern attitudes toward work back to this \"Protestant ethic\" — for better and worse.",
    reflection:
      "Do you think of your daily work as something God cares about, or as time to get through? What would change if it were a calling?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 49,
    category: "The Christian Life, Deeper",
    categorySlug: "life",
    title: "THE FEAR OF THE LORD",
    shortDesc: "Awe That Opens the Door",
    term: "יִרְאַת יְהוָה",
    termLabel: "Hebrew",
    translation: "Yir'at YHWH",
    englishMeaning: "The Fear of the LORD",
    definition:
      "The fear of the Lord is not cringing dread of a tyrant. It is the awe of someone who sees God as He actually is — holy, vast, blazing with life — and it turns out to be the doorway to intimacy, not its opposite. To fear God rightly is to be freed from fearing everything else. It is \"the beginning of wisdom\" because until you know who God is, nothing else is in scale.",
    scripture:
      "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is understanding.",
    reference: "Proverbs 9:10",
    historicalContext:
      "Isaiah 11:2 lists \"the fear of the LORD\" among the Spirit's endowments on the Messiah, and from that verse the medieval church developed its list of \"seven gifts of the Spirit.\" Thomas Aquinas distinguished servile fear (afraid of punishment) from filial fear (afraid of grieving a Father you love) — the second grows as love grows. Much modern teaching has quietly dropped the theme.",
    reflection:
      "When did you last feel genuine awe before God? What tends to shrink Him back down to manageable size for you?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 50,
    category: "The Christian Life, Deeper",
    categorySlug: "life",
    title: "WORSHIP",
    shortDesc: "Life Turned Godward",
    term: "λατρεία",
    termLabel: "Greek",
    translation: "Latreia",
    englishMeaning: "Service, Worship",
    definition:
      "Worship is two things at once. It is the whole of life offered to God — your body, work, and choices laid on the altar as \"spiritual service.\" And it is the gathered church's deliberate act of ascribing worth to God in word, song, prayer, and sacrament. The private and the public feed each other; neither is the real worship while the other is optional.",
    scripture:
      "I urge you therefore, brethren, by the mercies of God, to present your bodies a living and holy sacrifice, acceptable to God, which is your spiritual service of worship.",
    reference: "Romans 12:1",
    historicalContext:
      "How to worship has been fought over for centuries. The iconoclast controversy over images in worship was settled for the East at the Second Council of Nicaea (787). The Reformation split over the \"regulative principle\" (do only what Scripture commands in worship) versus the \"normative principle\" (whatever it does not forbid). Every generation renegotiates the forms; the object never changes.",
    reflection:
      "If someone watched your ordinary week with no explanation, what would they conclude you actually worship?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },

];
