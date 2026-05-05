export interface CreedCard {
  id: number;
  category: string;
  categorySlug: CategorySlug;
  title: string;
  shortDesc: string;
  term?: string;
  termLabel?: string; // 'Greek' | 'Hebrew' | 'Latin'
  translation?: string;
  englishMeaning?: string;
  definition: string;
  scripture: string;
  reference: string;
  historicalContext: string;
  reflection: string;
  colors: { dark: string; accent: string };
}

export type CategorySlug =
  | "trinity"
  | "christ"
  | "spirit"
  | "salvation"
  | "scripture"
  | "church"
  | "life"
  | "eschatology";

export const CATEGORY_INFO: Record<
  CategorySlug,
  { name: string; color: string; accent: string; icon: string }
> = {
  trinity: {
    name: "Trinity & Nature of God",
    color: "#0f172a",
    accent: "#3b82f6",
    icon: "trinity",
  },
  christ: {
    name: "Jesus Christ",
    color: "#7f1d1d",
    accent: "#fca5a5",
    icon: "christ",
  },
  spirit: {
    name: "Holy Spirit",
    color: "#713f12",
    accent: "#fbbf24",
    icon: "spirit",
  },
  salvation: {
    name: "Salvation & Gospel",
    color: "#14532d",
    accent: "#86efac",
    icon: "salvation",
  },
  scripture: {
    name: "Holy Scripture",
    color: "#4c1d95",
    accent: "#c084fc",
    icon: "scripture",
  },
  church: {
    name: "Church & Sacraments",
    color: "#7c2d12",
    accent: "#fdba74",
    icon: "church",
  },
  life: {
    name: "Christian Life",
    color: "#134e4a",
    accent: "#5eead4",
    icon: "life",
  },
  eschatology: {
    name: "Last Things",
    color: "#1e293b",
    accent: "#94a3b8",
    icon: "eschatology",
  },
};

export const CARD_DATA: CreedCard[] = [
  // TRINITY CATEGORY (1-8)
  {
    id: 1,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "THE TRIUNE GOD",
    shortDesc: "Three Persons, One God",
    term: "Τριάς",
    termLabel: "Greek",
    translation: "Trias",
    englishMeaning: "Trinity",
    definition:
      "God exists eternally as three distinct Persons—Father, Son, and Holy Spirit—who are one in being, equal in power and glory. This is the eternal communion of holy love. God has always been, and will always be, the perfect unity of Three in One.",
    scripture:
      "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and the Son and the Holy Spirit.",
    reference: "Matthew 28:19",
    historicalContext:
      "The doctrine of the Trinity was formally articulated at the Council of Nicaea (325 AD) and Constantinople (381 AD) in response to heresies that denied either Christ's divinity or the distinct personhood of the Holy Spirit.",
    reflection:
      "How does understanding God as an eternal family of Three Persons change the way you view relationships and community?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 2,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "ONE GOD IN THREE PERSONS",
    shortDesc: "Unity in Diversity",
    term: "ὁμοούσιος",
    termLabel: "Greek",
    translation: "Homoousios",
    englishMeaning: "Same Being",
    definition:
      'The Father, Son, and Holy Spirit are not three gods but one God in three Persons. Each Person is fully God, sharing the same divine essence. They are eternally distinct yet completely united—three "whos" in one "what."',
    scripture: "Hear, O Israel! The Lord is our God, the Lord is one!",
    reference: "Deuteronomy 6:4",
    historicalContext:
      'The term "homoousios" (same being) was affirmed at Nicaea to counter Arianism, which taught that Jesus was a created being rather than eternally God.',
    reflection:
      "Why is it important that God is both one and three, rather than just one or just three?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 3,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "GOD THE FATHER",
    shortDesc: "The Eternal Source",
    term: "Πατήρ",
    termLabel: "Greek",
    translation: "Patēr",
    englishMeaning: "Father",
    definition:
      "The First Person of the Trinity is God the Father, the eternal source of all being. He is Creator of all things, visible and invisible. The Father loves the Son and gives all things into His hands. In Christ, we are adopted as His beloved children.",
    scripture:
      "Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ.",
    reference: "Ephesians 1:3",
    historicalContext:
      'Jesus revealed God as "Father" in a unique and intimate way, teaching us to pray "Our Father" and showing that God\'s fatherhood is grounded in the eternal relationship within the Trinity.',
    reflection:
      "How does knowing God as Father through Jesus Christ change your understanding of your identity?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 4,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "GOD THE SON",
    shortDesc: "The Eternal Word",
    term: "Υἱὸς τοῦ Θεοῦ",
    termLabel: "Greek",
    translation: "Huios tou Theou",
    englishMeaning: "Son of God",
    definition:
      "The Second Person of the Trinity is God the Son, eternally begotten of the Father. Jesus Christ is both fully God and fully human. He is the visible image of the invisible God, through whom all things were created and in whom all things hold together.",
    scripture:
      "He is the image of the invisible God, the firstborn of all creation. For by Him all things were created, both in the heavens and on earth.",
    reference: "Colossians 1:15-16",
    historicalContext:
      'The Council of Nicaea (325 AD) affirmed that the Son is "begotten, not made, being of one substance with the Father," refuting the claim that Jesus was a created being.',
    reflection:
      "What does it mean for your life that Jesus is both fully God and fully human?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 5,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "GOD THE HOLY SPIRIT",
    shortDesc: "The Divine Presence",
    term: "Πνεῦμα Ἅγιον",
    termLabel: "Greek",
    translation: "Pneuma Hagion",
    englishMeaning: "Holy Spirit",
    definition:
      "The Third Person of the Trinity is God the Holy Spirit, who proceeds from the Father and the Son. The Spirit inspired Scripture, conceived Christ in Mary's womb, empowers believers, and unites us with Christ. The Spirit is God dwelling in us.",
    scripture:
      "The Helper, the Holy Spirit, whom the Father will send in My name, He will teach you all things, and bring to your remembrance all that I said to you.",
    reference: "John 14:26",
    historicalContext:
      'The Council of Constantinople (381 AD) affirmed the full deity of the Holy Spirit against those who denied the Spirit\'s personhood, declaring the Spirit is "worshiped and glorified together with the Father and the Son."',
    reflection: "How is the Holy Spirit active in your life today?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 6,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "THE DIVINE DANCE",
    shortDesc: "Eternal Communion",
    term: "Περιχώρησις",
    termLabel: "Greek",
    translation: "Perichoresis",
    englishMeaning: "Mutual Indwelling",
    definition:
      "Perichoresis describes the mutual indwelling and interpenetration of the three Persons of the Trinity. They exist in an eternal dance of love, each giving to and receiving from the others. This divine fellowship is the pattern for all relationships.",
    scripture: "I am in the Father, and the Father is in Me.",
    reference: "John 14:11",
    historicalContext:
      'Early church fathers used perichoresis to explain how the three Persons are distinct yet inseparable, existing in eternal communion. This term comes from Greek words meaning "to dance around."',
    reflection:
      'How might viewing the Trinity as a "dance" of love shape how you relate to others in community?',
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 7,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "THE CREATOR GOD",
    shortDesc: "Maker of All Things",
    term: "אֱלֹהִים בָּרָא",
    termLabel: "Hebrew",
    translation: "Elohim Bara",
    englishMeaning: "God Created",
    definition:
      "The Triune God created all things, visible and invisible, by His word and for His glory. Creation reveals God's power, wisdom, and goodness. All creation exists in and through and for Jesus Christ, who sustains all things by His powerful word.",
    scripture: "In the beginning God created the heavens and the earth.",
    reference: "Genesis 1:1",
    historicalContext:
      'Against Gnosticism\'s claim that matter is evil and created by a lesser god, the church affirmed that the one true God created all things good. The Nicene Creed states God is "maker of heaven and earth, of all things visible and invisible."',
    reflection:
      "How does knowing that God created you on purpose and for a purpose affect your daily life?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },
  {
    id: 8,
    category: "Trinity & Nature of God",
    categorySlug: "trinity",
    title: "GOD'S SOVEREIGNTY",
    shortDesc: "The Almighty Ruler",
    term: "Παντοκράτωρ",
    termLabel: "Greek",
    translation: "Pantokratōr",
    englishMeaning: "Almighty",
    definition:
      "God is sovereign over all creation, ruling with perfect wisdom, power, and love. Nothing happens outside His knowledge or control. His sovereignty gives us confidence that His good purposes will prevail, even when we don't understand His ways.",
    scripture: "Our God is in the heavens; He does whatever He pleases.",
    reference: "Psalm 115:3",
    historicalContext:
      'The Nicene Creed calls God "Pantokratōr" (Almighty), affirming God\'s absolute authority over all things. This gives believers confidence even in times of persecution or suffering.',
    reflection: "How does God's sovereignty give you peace in uncertain times?",
    colors: { dark: "#0f172a", accent: "#3b82f6" },
  },

  // CHRIST CATEGORY (9-16)
  {
    id: 9,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "THE INCARNATION",
    shortDesc: "God Became Flesh",
    term: "Ἐνσάρκωσις",
    termLabel: "Greek",
    translation: "Ensarkōsis",
    englishMeaning: "In Flesh",
    definition:
      "The eternal Son of God took on human nature, becoming fully human while remaining fully divine. Jesus Christ is one Person with two natures—divine and human—united without mixture or separation. God became one of us to save us.",
    scripture:
      "The Word became flesh, and dwelt among us, and we saw His glory, glory as of the only Son from the Father, full of grace and truth.",
    reference: "John 1:14",
    historicalContext:
      'The Council of Chalcedon (451 AD) defined the Incarnation, teaching that Christ is "truly God and truly man," with two complete natures in one person, "without confusion, without change, without division, without separation."',
    reflection:
      "What difference does it make that God didn't just send a message but came Himself?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 10,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "THE VIRGIN BIRTH",
    shortDesc: "Conceived by the Spirit",
    term: "Παρθένος",
    termLabel: "Greek",
    translation: "Parthenos",
    englishMeaning: "Virgin",
    definition:
      "Jesus was conceived by the Holy Spirit in the virgin Mary. He had no human father. This miraculous conception shows that Jesus' origin is divine, while being born of Mary shows His genuine humanity. He is God's Son entering our world.",
    scripture:
      'The angel said to her, "The Holy Spirit will come upon you, and the power of the Most High will overshadow you; and for that reason the holy Child shall be called the Son of God."',
    reference: "Luke 1:35",
    historicalContext:
      "The virgin birth has been affirmed from the earliest creeds (Apostles' Creed, Nicene Creed) as essential to Christ's identity. It demonstrates that Jesus' coming was God's sovereign act, not human achievement.",
    reflection:
      "How does Jesus' unique entrance into the world shape your understanding of who He is?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 11,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "FULLY GOD AND FULLY HUMAN",
    shortDesc: "Two Natures, One Person",
    term: "Ἕνωσις Ὑποστατική",
    termLabel: "Greek",
    translation: "Henōsis Hypostatikē",
    englishMeaning: "Hypostatic Union",
    definition:
      "Jesus Christ is completely God and completely human in one Person. He is not half-God and half-human, nor does He alternate between being God and being human. Both natures exist fully and permanently united in one Person.",
    scripture: "For in Him all the fullness of Deity dwells in bodily form.",
    reference: "Colossians 2:9",
    historicalContext:
      "Chalcedon (451 AD) condemned both Nestorianism (which divided Christ into two persons) and Eutychianism (which mixed the natures into one confused nature), affirming the perfect union of two distinct natures in one Person.",
    reflection:
      "Why must Jesus be both fully God and fully human to be our Savior?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 12,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "CHRIST'S SACRIFICE",
    shortDesc: "The Perfect Offering",
    term: "Ἱλασμός",
    termLabel: "Greek",
    translation: "Hilasmos",
    englishMeaning: "Propitiation",
    definition:
      "Jesus' death on the cross was the perfect sacrifice for sin. He died in our place, bearing the punishment we deserve. His blood satisfies God's justice and demonstrates God's love. Through His sacrifice, we are forgiven and reconciled to God.",
    scripture:
      "He Himself is the propitiation for our sins; and not for ours only, but also for those of the whole world.",
    reference: "1 John 2:2",
    historicalContext:
      "The cross has been the center of Christian faith from the beginning. Early Christians understood Jesus' death as the fulfillment of Old Testament sacrifices, the final and complete offering for sin.",
    reflection:
      "How does Christ's sacrifice on your behalf change your relationship with God?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 13,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "THE RESURRECTION",
    shortDesc: "Victory Over Death",
    term: "Ἀνάστασις",
    termLabel: "Greek",
    translation: "Anastasis",
    englishMeaning: "Rising Again",
    definition:
      "On the third day after His crucifixion, Jesus rose bodily from the dead, conquering sin and death. His resurrection proves He is the Son of God and guarantees our own resurrection. Death no longer has the final word.",
    scripture:
      "But now Christ has been raised from the dead, the first fruits of those who are asleep. For since by a man came death, by a man also came the resurrection of the dead.",
    reference: "1 Corinthians 15:20-21",
    historicalContext:
      'The resurrection was the core apostolic proclamation from the beginning. Paul states that without Christ\'s resurrection, Christian faith is futile. Every Sunday is a "little Easter," celebrating Jesus\' victory over death.',
    reflection:
      "How does the reality of Christ's resurrection give you hope today?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 14,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "THE ASCENSION",
    shortDesc: "Seated at God's Right Hand",
    term: "Ἀνάληψις",
    termLabel: "Greek",
    translation: "Analēpsis",
    englishMeaning: "Taking Up",
    definition:
      "Forty days after His resurrection, Jesus ascended bodily into heaven. He sits at the Father's right hand, ruling over all creation. Though absent in body, He is present with us by His Spirit. Our humanity now reigns in heaven.",
    scripture:
      "He who descended is Himself also He who ascended far above all the heavens, so that He might fill all things.",
    reference: "Ephesians 4:10",
    historicalContext:
      'The Nicene Creed affirms Christ "ascended into heaven and is seated at the right hand of the Father." This position of authority demonstrates Christ\'s ongoing rule and His role as our advocate before God.',
    reflection:
      "What does it mean that Jesus, in His human body, now rules all creation?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 15,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "CHRIST OUR HIGH PRIEST",
    shortDesc: "Our Mediator and Advocate",
    term: "Ἀρχιερεύς",
    termLabel: "Greek",
    translation: "Archiereus",
    englishMeaning: "Chief Priest",
    definition:
      "Jesus is our eternal High Priest who represents us before God. He offered Himself as the perfect sacrifice and now intercedes for us continually. Because He understands our weaknesses, having been tempted as we are, He sympathizes with us and helps us.",
    scripture:
      "Therefore, since we have a great high priest who has passed through the heavens, Jesus the Son of God, let us hold fast our confession.",
    reference: "Hebrews 4:14",
    historicalContext:
      "The book of Hebrews develops the theme of Christ as High Priest, showing how He fulfills and surpasses the Old Testament priesthood. Unlike earthly priests, Christ's priesthood is eternal and His sacrifice is once-for-all.",
    reflection:
      "How does knowing Christ is praying for you right now affect your approach to God?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },
  {
    id: 16,
    category: "Jesus Christ",
    categorySlug: "christ",
    title: "CHRIST THE HEAD",
    shortDesc: "Lord of the Church",
    term: "Κεφαλή",
    termLabel: "Greek",
    translation: "Kephalē",
    englishMeaning: "Head",
    definition:
      "Christ is the head of the Church, His body. He directs, nourishes, and protects the Church. Every believer is united to Christ and to one another in Him. He is our supreme authority and the source of all our spiritual life and growth.",
    scripture:
      "He is also head of the body, the church; and He is the beginning, the firstborn from the dead, so that He Himself will come to have first place in everything.",
    reference: "Colossians 1:18",
    historicalContext:
      "Paul's letters emphasize Christ's headship over the Church, countering any attempt to give another human leader Christ's unique authority. The Church exists in complete dependence on and submission to Christ.",
    reflection: "In what practical ways can you submit to Christ's headship today?",
    colors: { dark: "#7f1d1d", accent: "#fca5a5" },
  },

  // HOLY SPIRIT CATEGORY (17-22)
  {
    id: 17,
    category: "Holy Spirit",
    categorySlug: "spirit",
    title: "THE COMFORTER",
    shortDesc: "Our Helper and Guide",
    term: "Παράκλητος",
    termLabel: "Greek",
    translation: "Paraklētos",
    englishMeaning: "Helper",
    definition:
      "Jesus promised to send \"another Comforter\" who would be with us forever. The Holy Spirit is our Helper, Advocate, and Counselor. He comforts us in sorrow, guides us in truth, and strengthens us for service. He is God's presence with us.",
    scripture:
      "I will ask the Father, and He will give you another Helper, that He may be with you forever; that is the Spirit of truth.",
    reference: "John 14:16-17",
    historicalContext:
      'Jesus used the term "Paraklētos," which means one called alongside to help. Unlike Jesus\' physical presence which was limited to one location, the Spirit dwells in all believers everywhere simultaneously.',
    reflection: "How have you experienced the Holy Spirit's comfort or guidance?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 18,
    category: "Holy Spirit",
    categorySlug: "spirit",
    title: "REGENERATION",
    shortDesc: "Born Again by the Spirit",
    term: "Παλιγγενεσία",
    termLabel: "Greek",
    translation: "Palingenesia",
    englishMeaning: "New Birth",
    definition:
      "The Holy Spirit gives us new life in Christ. We are born again, not by our own effort, but by God's power. The Spirit transforms our hearts, making us new creations. What was dead in sin is made alive in Christ.",
    scripture:
      "He saved us, not on the basis of deeds which we have done in righteousness, but according to His mercy, by the washing of regeneration and renewing by the Holy Spirit.",
    reference: "Titus 3:5",
    historicalContext:
      "Jesus taught Nicodemus that entrance into God's kingdom requires being \"born again\" by the Spirit (John 3). This spiritual rebirth is the beginning of new life in Christ.",
    reflection: "What evidence of spiritual rebirth do you see in your own life?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 19,
    category: "Holy Spirit",
    categorySlug: "spirit",
    title: "SANCTIFICATION",
    shortDesc: "Growing in Holiness",
    term: "Ἁγιασμός",
    termLabel: "Greek",
    translation: "Hagiasmos",
    englishMeaning: "Making Holy",
    definition:
      "The Holy Spirit progressively transforms believers into the likeness of Christ. This lifelong process makes us holy—set apart for God and increasingly free from sin's power. We cooperate with the Spirit, but He provides the power for real change.",
    scripture:
      "But we all, with unveiled face, beholding as in a mirror the glory of the Lord, are being transformed into the same image from glory to glory, just as from the Lord, the Spirit.",
    reference: "2 Corinthians 3:18",
    historicalContext:
      "Protestant Reformers distinguished between justification (being declared righteous) and sanctification (becoming righteous in practice). Both are gifts of grace, but sanctification is the Spirit's ongoing work in believers.",
    reflection: "What area of your life is the Spirit currently transforming?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 20,
    category: "Holy Spirit",
    categorySlug: "spirit",
    title: "THE FRUIT OF THE SPIRIT",
    shortDesc: "Christ-Like Character",
    term: "Καρπὸς τοῦ Πνεύματος",
    termLabel: "Greek",
    translation: "Karpos tou Pneumatos",
    englishMeaning: "Fruit of the Spirit",
    definition:
      "The Holy Spirit produces Christlike character in believers. This fruit—love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control—is evidence of the Spirit's presence and work. We don't manufacture this fruit; the Spirit grows it in us.",
    scripture:
      "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.",
    reference: "Galatians 5:22-23",
    historicalContext:
      "Paul contrasts the Spirit's fruit with the \"deeds of the flesh,\" showing that life in the Spirit produces a completely different kind of character than life controlled by sin.",
    reflection:
      "Which fruit of the Spirit do you most need in your life right now?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 21,
    category: "Holy Spirit",
    categorySlug: "spirit",
    title: "GIFTS OF THE SPIRIT",
    shortDesc: "Empowered for Service",
    term: "Χαρίσματα",
    termLabel: "Greek",
    translation: "Charismata",
    englishMeaning: "Grace Gifts",
    definition:
      "The Holy Spirit distributes spiritual gifts to believers for the common good of the Church. These gifts—including teaching, service, healing, prophecy, and others—are tools for building up the body of Christ. Every believer has gifts to use for God's glory.",
    scripture:
      "But to each one is given the manifestation of the Spirit for the common good.",
    reference: "1 Corinthians 12:7",
    historicalContext:
      "The early church understood spiritual gifts as evidence of the Spirit's presence and empowerment. Paul emphasizes that gifts are for service, not status, and love is greater than any gift.",
    reflection:
      "What spiritual gifts has God given you, and how are you using them to serve others?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 22,
    category: "Holy Spirit",
    categorySlug: "spirit",
    title: "THE SPIRIT'S INDWELLING",
    shortDesc: "God Living Within Us",
    term: "Ἐνοίκησις",
    termLabel: "Greek",
    translation: "Enoikēsis",
    englishMeaning: "Dwelling Within",
    definition:
      "Every believer is a temple where the Holy Spirit dwells. God's presence is not distant but intimately near. The Spirit lives in us, making our bodies sacred spaces. This indwelling presence guarantees our inheritance and empowers holy living.",
    scripture:
      "Do you not know that you are a temple of God and that the Spirit of God dwells in you?",
    reference: "1 Corinthians 3:16",
    historicalContext:
      "In the Old Testament, God's presence dwelt in the tabernacle and temple. Now, through Christ, believers individually and collectively are God's dwelling place through the Spirit.",
    reflection:
      "How does knowing the Spirit dwells in you change how you view yourself and your body?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },

  // SALVATION & GOSPEL CATEGORY (23-28)
  {
    id: 23,
    category: "Salvation & Gospel",
    categorySlug: "salvation",
    title: "THE GOSPEL",
    shortDesc: "The Good News of Jesus",
    term: "Εὐαγγέλιον",
    termLabel: "Greek",
    translation: "Euangelion",
    englishMeaning: "Good News",
    definition:
      "The gospel is the good news that Jesus Christ died for our sins and rose from the dead, according to the Scriptures. Through faith in Him, we receive forgiveness, reconciliation with God, and eternal life. This is God's free gift, not something we earn.",
    scripture:
      "For I delivered to you as of first importance what I also received, that Christ died for our sins according to the Scriptures, and that He was buried, and that He was raised on the third day.",
    reference: "1 Corinthians 15:3-4",
    historicalContext:
      'Paul presents the gospel as the message he "received" and passed on, showing it\'s not human invention but divine revelation. This is the same gospel the apostles preached from the beginning.',
    reflection:
      "How would you explain the gospel to someone who has never heard it?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 24,
    category: "Salvation & Gospel",
    categorySlug: "salvation",
    title: "GRACE",
    shortDesc: "Unmerited Favor",
    term: "Χάρις",
    termLabel: "Greek",
    translation: "Charis",
    englishMeaning: "Grace",
    definition:
      "Grace is God's unmerited favor toward sinners. We cannot earn or deserve it. God freely gives us what we don't deserve—forgiveness, adoption, eternal life—based on Christ's merit, not our own. Salvation is by grace alone, through faith alone.",
    scripture:
      "For by grace you have been saved through faith; and that not of yourselves, it is the gift of God; not as a result of works, so that no one may boast.",
    reference: "Ephesians 2:8-9",
    historicalContext:
      "Augustine defended grace against Pelagius, who taught salvation could be earned. The Protestant Reformation emphasized \"sola gratia\"—grace alone—as essential to the gospel, opposing any teaching that salvation depends on human merit.",
    reflection:
      "How does understanding grace as a completely free gift change your relationship with God?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 25,
    category: "Salvation & Gospel",
    categorySlug: "salvation",
    title: "FAITH",
    shortDesc: "Trusting in Christ Alone",
    term: "Πίστις",
    termLabel: "Greek",
    translation: "Pistis",
    englishMeaning: "Faith",
    definition:
      "Faith is trusting in Jesus Christ for salvation. It's not mere intellectual agreement but wholehearted reliance on Christ and His finished work. Faith looks away from ourselves to Christ, resting in His righteousness rather than our own. Even faith itself is God's gift.",
    scripture:
      "Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ.",
    reference: "Romans 5:1",
    historicalContext:
      "The Reformers emphasized \"sola fide\"—faith alone—teaching that we are justified by faith in Christ without works of the law. Faith is the empty hand that receives what God freely offers in Christ.",
    reflection:
      "What does it look like for you to trust Christ completely rather than relying on your own efforts?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 26,
    category: "Salvation & Gospel",
    categorySlug: "salvation",
    title: "JUSTIFICATION",
    shortDesc: "Declared Righteous",
    term: "Δικαίωσις",
    termLabel: "Greek",
    translation: "Dikaiōsis",
    englishMeaning: "Declaring Righteous",
    definition:
      "Justification is God's act of declaring sinners righteous based on Christ's righteousness, received by faith. It's a legal verdict: \"not guilty.\" God credits Christ's perfect obedience to our account. We stand before God as if we had never sinned and perfectly obeyed.",
    scripture:
      "But to the one who does not work, but believes in Him who justifies the ungodly, his faith is credited as righteousness.",
    reference: "Romans 4:5",
    historicalContext:
      "Martin Luther's discovery of justification by faith alone sparked the Protestant Reformation. This doctrine assures believers that their acceptance with God rests entirely on Christ's merit, not their own performance.",
    reflection:
      "How does knowing you are declared righteous in Christ affect your daily struggles with sin and guilt?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 27,
    category: "Salvation & Gospel",
    categorySlug: "salvation",
    title: "REPENTANCE",
    shortDesc: "Turning from Sin to God",
    term: "Μετάνοια",
    termLabel: "Greek",
    translation: "Metanoia",
    englishMeaning: "Change of Mind",
    definition:
      "Repentance is a change of mind and heart that turns from sin and turns to God. It's not just feeling sorry but a radical reorientation of life. True repentance is a gift from God that leads to life. It accompanies genuine faith and continues throughout the Christian life.",
    scripture:
      "Repent and return, so that your sins may be wiped away, in order that times of refreshing may come from the presence of the Lord.",
    reference: "Acts 3:19",
    historicalContext:
      "John the Baptist, Jesus, and the apostles all preached repentance. Luther's first of 95 Theses stated that the entire Christian life should be one of repentance—continual turning from sin to Christ.",
    reflection: "What sin is God calling you to turn away from right now?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },
  {
    id: 28,
    category: "Salvation & Gospel",
    categorySlug: "salvation",
    title: "ADOPTION",
    shortDesc: "Children of God",
    term: "Υἱοθεσία",
    termLabel: "Greek",
    translation: "Huiothesia",
    englishMeaning: "Placing as Sons",
    definition:
      "Through faith in Christ, God adopts us as His children. We receive the full legal rights and privileges of sons and daughters. We belong to God's family, with Christ as our elder brother. The Spirit witnesses to our hearts that we are God's beloved children.",
    scripture:
      "For you have not received a spirit of slavery leading to fear again, but you have received a spirit of adoption as sons by which we cry out, \"Abba! Father!\"",
    reference: "Romans 8:15",
    historicalContext:
      "Roman adoption was an irrevocable legal act that gave adopted children full rights as heirs. Paul uses this image to show that believers are permanently God's children with full inheritance rights in Christ.",
    reflection:
      "How does knowing you are God's adopted child change your sense of identity and security?",
    colors: { dark: "#14532d", accent: "#86efac" },
  },

  // HOLY SCRIPTURE CATEGORY (29-32)
  {
    id: 29,
    category: "Holy Scripture",
    categorySlug: "scripture",
    title: "INSPIRATION OF SCRIPTURE",
    shortDesc: "God-Breathed Word",
    term: "Θεόπνευστος",
    termLabel: "Greek",
    translation: "Theopneustos",
    englishMeaning: "God-Breathed",
    definition:
      "All Scripture is inspired by God—literally \"breathed out\" by Him. The Bible is not merely human words about God, but God's own Word to humanity. Through human authors, the Holy Spirit guided the writing of Scripture, making it fully trustworthy and authoritative for faith and life.",
    scripture:
      "All Scripture is inspired by God and profitable for teaching, for reproof, for correction, for training in righteousness.",
    reference: "2 Timothy 3:16",
    historicalContext:
      "The early church recognized that Scripture was uniquely authoritative because it came from God Himself. The doctrine of inspiration affirms both divine origin and human authorship working together.",
    reflection:
      "How does believing the Bible is God-breathed change how you read and apply it?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },
  {
    id: 30,
    category: "Holy Scripture",
    categorySlug: "scripture",
    title: "AUTHORITY OF SCRIPTURE",
    shortDesc: "Our Final Standard",
    term: "Ἐξουσία",
    termLabel: "Greek",
    translation: "Exousia",
    englishMeaning: "Authority",
    definition:
      "Scripture is the final authority for Christian faith and practice. When God speaks in His Word, He speaks with absolute authority. The Bible judges all human traditions, experiences, and teachings. We submit to Scripture because we submit to Christ, who affirmed the Scriptures.",
    scripture:
      "But know this first of all, that no prophecy of Scripture is a matter of one's own interpretation, for no prophecy was ever made by an act of human will, but men moved by the Holy Spirit spoke from God.",
    reference: "2 Peter 1:20-21",
    historicalContext:
      "The Protestant Reformation emphasized \"sola scriptura\"—Scripture alone as the final authority, over against church tradition or papal decree. This doesn't deny tradition's value but affirms Scripture's supreme authority.",
    reflection:
      "What areas of your life need to come under Scripture's authority?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },
  {
    id: 31,
    category: "Holy Scripture",
    categorySlug: "scripture",
    title: "CHRIST IN SCRIPTURE",
    shortDesc: "The Word Made Flesh",
    term: "Λόγος",
    termLabel: "Greek",
    translation: "Logos",
    englishMeaning: "The Word",
    definition:
      "Jesus Christ is the living Word of God, and all Scripture points to Him. The Old Testament prepares for His coming; the Gospels proclaim His life, death, and resurrection; the Epistles explain His work; Revelation reveals His return. To read Scripture rightly is to see Christ on every page.",
    scripture:
      "You search the Scriptures because you think that in them you have eternal life; it is these that testify about Me.",
    reference: "John 5:39",
    historicalContext:
      'After His resurrection, Jesus explained to His disciples "beginning with Moses and with all the prophets" how all Scripture spoke of Him (Luke 24:27). The early church read the Old Testament as a Christian book, pointing to Christ.',
    reflection:
      "As you read Scripture, do you look for how it reveals Christ and His gospel?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },
  {
    id: 32,
    category: "Holy Scripture",
    categorySlug: "scripture",
    title: "THE LIVING WORD",
    shortDesc: "Active and Powerful",
    term: "דְּבַר חַי",
    termLabel: "Hebrew",
    translation: "Davar Chai",
    englishMeaning: "Living Word",
    definition:
      "Scripture is not a dead letter but a living and active Word. The same Spirit who inspired Scripture illuminates it, making God's ancient words fresh and powerful today. Through Scripture, God speaks directly to our hearts, bringing conviction, comfort, and transformation.",
    scripture:
      "For the word of God is living and active and sharper than any two-edged sword, and piercing as far as the division of soul and spirit, of both joints and marrow, and able to judge the thoughts and intentions of the heart.",
    reference: "Hebrews 4:12",
    historicalContext:
      "Unlike dead religious texts, Scripture has power because the Holy Spirit works through it. Throughout church history, believers have encountered God personally through the Bible, experiencing its life-giving power.",
    reflection:
      "When has Scripture felt \"living and active\" in your own experience?",
    colors: { dark: "#4c1d95", accent: "#c084fc" },
  },

  // CHURCH & SACRAMENTS CATEGORY (33-38)
  {
    id: 33,
    category: "Church & Sacraments",
    categorySlug: "church",
    title: "THE CHURCH",
    shortDesc: "Called-Out Assembly",
    term: "Ἐκκλησία",
    termLabel: "Greek",
    translation: "Ekklēsia",
    englishMeaning: "Called-Out Assembly",
    definition:
      "The Church is the community of all believers in Jesus Christ—those called out from the world to belong to God. We are one body with Christ as our Head, united by the Spirit across time and space. The Church is both local (gathered congregations) and universal (all believers everywhere).",
    scripture:
      "For even as the body is one and yet has many members, and all the members of the body, though they are many, are one body, so also is Christ.",
    reference: "1 Corinthians 12:12",
    historicalContext:
      'The Nicene Creed describes the Church as "one, holy, catholic, and apostolic." These four marks identify the true Church: unified in Christ, set apart for God, universal in scope, and built on apostolic teaching.',
    reflection:
      "How does your local church reflect the universal Church of all believers?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 34,
    category: "Church & Sacraments",
    categorySlug: "church",
    title: "THE BODY OF CHRIST",
    shortDesc: "Many Members, One Body",
    term: "Σῶμα Χριστοῦ",
    termLabel: "Greek",
    translation: "Sōma Christou",
    englishMeaning: "Body of Christ",
    definition:
      "The Church is Christ's body on earth—He is the Head, and believers are the members. Each person has a unique role, gifted by the Spirit for the common good. We are interdependent; what affects one member affects all. Together we make Christ's presence visible in the world.",
    scripture: "Now you are Christ's body, and individually members of it.",
    reference: "1 Corinthians 12:27",
    historicalContext:
      "Paul's body metaphor shows that the Church is not an organization but an organism—a living body animated by Christ and empowered by the Spirit. Every member is essential and valuable.",
    reflection:
      "What is your unique role in Christ's body, and how are you using your gifts to serve?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 35,
    category: "Church & Sacraments",
    categorySlug: "church",
    title: "BAPTISM",
    shortDesc: "Washed and Sealed",
    term: "Βάπτισμα",
    termLabel: "Greek",
    translation: "Baptisma",
    englishMeaning: "Immersion",
    definition:
      "Baptism is the sacrament of initiation into the Christian faith. Through baptism, we are united with Christ in His death and resurrection, washed clean from sin, and marked as God's children. It is both an act of obedience and a visible sign of invisible grace.",
    scripture:
      "Or do you not know that all of us who have been baptized into Christ Jesus have been baptized into His death? Therefore we have been buried with Him through baptism into death.",
    reference: "Romans 6:3-4",
    historicalContext:
      "Jesus commanded baptism as a sign of discipleship (Matthew 28:19). The early church baptized new converts as their public profession of faith and entrance into the church community.",
    reflection:
      "If you've been baptized, what does it mean to you? If not, what holds you back?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 36,
    category: "Church & Sacraments",
    categorySlug: "church",
    title: "THE LORD'S SUPPER",
    shortDesc: "Communion with Christ",
    term: "Κυριακὸν Δεῖπνον",
    termLabel: "Greek",
    translation: "Kyriakon Deipnon",
    englishMeaning: "Lord's Supper",
    definition:
      "The Lord's Supper (Communion, Eucharist) is the sacrament where we remember Christ's sacrifice and experience His presence. Through bread and wine, we proclaim His death until He returns. In this meal, we commune with Christ and with one another as His body.",
    scripture:
      "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until He comes.",
    reference: "1 Corinthians 11:26",
    historicalContext:
      "Jesus instituted this meal at the Last Supper, commanding His followers to \"do this in remembrance of Me\" (Luke 22:19). The early church gathered regularly to break bread together.",
    reflection:
      "When you take Communion, do you recognize Christ's presence and remember His sacrifice?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 37,
    category: "Church & Sacraments",
    categorySlug: "church",
    title: "COMMUNION OF SAINTS",
    shortDesc: "Fellowship in Christ",
    term: "Communio Sanctorum",
    termLabel: "Latin",
    translation: "Communio Sanctorum",
    englishMeaning: "Fellowship of Saints",
    definition:
      "All believers are united in Christ, forming one holy fellowship that transcends time and space. We are connected not only to other Christians alive today but also to all who have gone before us. This communion means we share in one another's joys, sorrows, and prayers.",
    scripture:
      "If one member suffers, all the members suffer with it; if one member is honored, all the members rejoice with it.",
    reference: "1 Corinthians 12:26",
    historicalContext:
      "The Apostles' Creed confesses belief in \"the communion of saints,\" affirming our spiritual unity with all believers. The early church practiced radical sharing and mutual care as a visible sign of this communion.",
    reflection:
      "How do you experience fellowship with believers beyond your local congregation?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 38,
    category: "Church & Sacraments",
    categorySlug: "church",
    title: "ONE, HOLY, CATHOLIC, APOSTOLIC",
    shortDesc: "Marks of the Church",
    term: "Μία, Ἁγία, Καθολική, Ἀποστολική",
    termLabel: "Greek",
    translation: "Mia, Hagia, Katholikē, Apostolikē",
    englishMeaning: "One, Holy, Universal, Apostolic",
    definition:
      "The Nicene Creed identifies four essential marks of the Church: One (united in Christ), Holy (set apart for God), Catholic/Universal (for all people everywhere), and Apostolic (built on the apostles' teaching). These marks help us recognize the true Church.",
    scripture:
      "There is one body and one Spirit, just as also you were called in one hope of your calling; one Lord, one faith, one baptism, one God and Father of all.",
    reference: "Ephesians 4:4-6",
    historicalContext:
      "The Council of Constantinople (381 AD) added these four marks to the Nicene Creed to combat heresies and define the true Church against false teachers and schismatic groups.",
    reflection: "How does your church embody these four marks?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },

  // CHRISTIAN LIFE CATEGORY (39-46)
  {
    id: 39,
    category: "Christian Life",
    categorySlug: "life",
    title: "DISCIPLESHIP",
    shortDesc: "Following Jesus",
    term: "Μαθητεία",
    termLabel: "Greek",
    translation: "Mathēteia",
    englishMeaning: "Being a Student",
    definition:
      "Discipleship is the lifelong journey of following Jesus, learning from Him, and becoming like Him. A disciple is not just someone who believes in Jesus but someone who walks with Him daily, obeys His teaching, and makes following Him the central priority of life.",
    scripture:
      "Then Jesus said to His disciples, \"If anyone wishes to come after Me, he must deny himself, and take up his cross and follow Me.\"",
    reference: "Matthew 16:24",
    historicalContext:
      "In Jesus' time, disciples literally followed their rabbi everywhere, learning by watching and imitating. Jesus calls His followers to the same radical commitment—not just intellectual assent but whole-life transformation.",
    reflection:
      "What does it mean for you to \"take up your cross\" and follow Jesus daily?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 40,
    category: "Christian Life",
    categorySlug: "life",
    title: "LOVE",
    shortDesc: "The Greatest Commandment",
    term: "Ἀγάπη",
    termLabel: "Greek",
    translation: "Agapē",
    englishMeaning: "Self-Giving Love",
    definition:
      "Love is the defining mark of Christian discipleship. This is not mere sentiment but self-giving love modeled on Christ's sacrifice. We love God with our whole being and love our neighbors—even enemies—as ourselves. Love fulfills the law and bears witness to Christ.",
    scripture:
      "A new commandment I give to you, that you love one another, even as I have loved you, that you also love one another. By this all men will know that you are My disciples.",
    reference: "John 13:34-35",
    historicalContext:
      "Jesus identified love as the greatest commandment and the distinguishing mark of His followers. The early church's sacrificial love for one another and even for enemies was a powerful witness that attracted many to Christianity.",
    reflection:
      "Who in your life is hardest to love, and how can you show them Christ's love?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 41,
    category: "Christian Life",
    categorySlug: "life",
    title: "PRAYER",
    shortDesc: "Communion with God",
    term: "Προσευχή",
    termLabel: "Greek",
    translation: "Proseuchē",
    englishMeaning: "Prayer",
    definition:
      "Prayer is intimate conversation with God—speaking and listening, asking and adoring, confessing and thanking. Through prayer we draw near to God and He draws near to us. Jesus modeled a life of constant prayer, teaching us to pray \"Our Father\" and to persist in asking, seeking, and knocking.",
    scripture:
      "Rejoice always; pray without ceasing; in everything give thanks; for this is God's will for you in Christ Jesus.",
    reference: "1 Thessalonians 5:16-18",
    historicalContext:
      "The Lord's Prayer (Matthew 6:9-13) has served as the model prayer for Christians throughout history. The early church practiced set hours of prayer, following Jewish traditions but now directed to God through Christ.",
    reflection:
      "Is prayer more like a duty or a delight in your life? Why?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 42,
    category: "Christian Life",
    categorySlug: "life",
    title: "SPIRITUAL WARFARE",
    shortDesc: "Standing Firm",
    term: "Πάλη",
    termLabel: "Greek",
    translation: "Palē",
    englishMeaning: "Wrestling",
    definition:
      "Believers face real spiritual opposition from Satan and demonic forces. Our struggle is not against flesh and blood but against spiritual powers. Yet we are not defenseless—God provides spiritual armor, and Christ has already won the victory. We stand firm in His strength, not our own.",
    scripture:
      "For our struggle is not against flesh and blood, but against the rulers, against the powers, against the world forces of this darkness, against the spiritual forces of wickedness in the heavenly places.",
    reference: "Ephesians 6:12",
    historicalContext:
      "The Desert Fathers wrote extensively about spiritual warfare, recognizing that the Christian life involves real battle against temptation and evil. The armor of God (Ephesians 6:10-18) equips us for this fight.",
    reflection:
      "What spiritual battles are you currently facing, and are you relying on God's armor?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 43,
    category: "Christian Life",
    categorySlug: "life",
    title: "PERSEVERANCE",
    shortDesc: "Enduring to the End",
    term: "Ὑπομονή",
    termLabel: "Greek",
    translation: "Hypomonē",
    englishMeaning: "Patient Endurance",
    definition:
      "True disciples persevere in faith through trials, suffering, and doubt. This endurance is not stoic resignation but confident hope in God's faithfulness. God preserves His children, and those who are truly born again will continue in faith to the end. The one who endures to the end will be saved.",
    scripture:
      "For you have need of endurance, so that when you have done the will of God, you may receive what was promised.",
    reference: "Hebrews 10:36",
    historicalContext:
      "The doctrine of perseverance (often called \"eternal security\") teaches that God will bring to completion the work He began in believers (Philippians 1:6). True faith endures, though it may grow weak at times.",
    reflection:
      "What helps you persevere when your faith feels weak or tested?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 44,
    category: "Christian Life",
    categorySlug: "life",
    title: "GOOD WORKS",
    shortDesc: "Faith in Action",
    term: "Ἔργα Ἀγαθά",
    termLabel: "Greek",
    translation: "Erga Agatha",
    englishMeaning: "Good Works",
    definition:
      "We are saved by grace through faith, not by works—but we are saved for good works. Faith without works is dead. True faith inevitably produces obedience and love in action. Good works don't earn salvation but demonstrate its reality and bring glory to God.",
    scripture:
      "For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand so that we would walk in them.",
    reference: "Ephesians 2:10",
    historicalContext:
      "The Reformation clarified that works are the fruit, not the root, of salvation. James and Paul, when read together, show that genuine faith necessarily produces good works as evidence of new life in Christ.",
    reflection:
      "What good works is God preparing you to do in response to His grace?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 45,
    category: "Christian Life",
    categorySlug: "life",
    title: "SUFFERING",
    shortDesc: "Sharing Christ's Afflictions",
    term: "Πάθημα",
    termLabel: "Greek",
    translation: "Pathēma",
    englishMeaning: "Suffering",
    definition:
      "Suffering is part of following Christ in a fallen world. Yet God uses our trials to refine faith, build character, and conform us to Christ's image. We are not promised escape from suffering but God's presence in it. Our momentary afflictions are producing eternal glory.",
    scripture:
      "Consider it all joy, my brethren, when you encounter various trials, knowing that the testing of your faith produces endurance.",
    reference: "James 1:2-3",
    historicalContext:
      "Christian martyrs throughout history have shown that suffering for Christ is a privilege, not merely a burden. The early church rejoiced to suffer for Christ's name, following their Lord who suffered first.",
    reflection:
      "How has God used suffering or trials to shape your faith and character?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 46,
    category: "Christian Life",
    categorySlug: "life",
    title: "WITNESS",
    shortDesc: "Testifying to Christ",
    term: "Μαρτυρία",
    termLabel: "Greek",
    translation: "Martyria",
    englishMeaning: "Testimony",
    definition:
      "Every Christian is called to be a witness—to testify about Jesus through both words and actions. We share the gospel message and live it out, making Christ visible to a watching world. Our witness flows from what we have seen and experienced of Christ's love and transformation.",
    scripture:
      "But you will receive power when the Holy Spirit has come upon you; and you shall be My witnesses both in Jerusalem, and in all Judea and Samaria, and even to the remotest part of the earth.",
    reference: "Acts 1:8",
    historicalContext:
      "The Greek word \"martyria\" (witness) became associated with martyrdom because many early Christians sealed their testimony with their blood. True witness is costly but powerful, empowered by the Holy Spirit.",
    reflection:
      "Who in your life needs to hear your witness about what Christ has done for you?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },

  // LAST THINGS CATEGORY (47-50)
  {
    id: 47,
    category: "Last Things",
    categorySlug: "eschatology",
    title: "THE SECOND COMING",
    shortDesc: "Christ Will Return",
    term: "Παρουσία",
    termLabel: "Greek",
    translation: "Parousia",
    englishMeaning: "Arrival",
    definition:
      "Jesus Christ will return visibly and gloriously to judge the living and the dead and establish His eternal kingdom. This is the \"blessed hope\" that motivates holy living and faithful service. We do not know the day or hour, but we watch and wait with eager expectation.",
    scripture:
      "For the Lord Himself will descend from heaven with a shout, with the voice of the archangel and with the trumpet of God, and the dead in Christ will rise first.",
    reference: "1 Thessalonians 4:16",
    historicalContext:
      "The earliest Christian prayer \"Maranatha\" (Come, Lord!) expressed the church's longing for Christ's return. Every generation has lived in light of His promised coming, though He tarries so that more might be saved.",
    reflection:
      "How would you live differently if you knew Christ would return tomorrow?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
  {
    id: 48,
    category: "Last Things",
    categorySlug: "eschatology",
    title: "RESURRECTION OF THE DEAD",
    shortDesc: "All Will Rise",
    term: "Ἀνάστασις Νεκρῶν",
    termLabel: "Greek",
    translation: "Anastasis Nekrōn",
    englishMeaning: "Rising of the Dead",
    definition:
      "At Christ's return, all people will be raised bodily from death. Believers will receive glorified, imperishable bodies like Christ's resurrection body. Unbelievers will also be raised to face judgment. Death will not have the final word—resurrection is God's promise to all humanity.",
    scripture:
      "Do not marvel at this; for an hour is coming, in which all who are in the tombs will hear His voice, and will come forth.",
    reference: "John 5:28-29",
    historicalContext:
      "Belief in bodily resurrection distinguished early Christianity from Greek philosophy, which viewed the body as a prison. Christians confess resurrection of the body, not merely immortality of the soul.",
    reflection:
      "What difference does belief in bodily resurrection make for how you view death and suffering?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
  {
    id: 49,
    category: "Last Things",
    categorySlug: "eschatology",
    title: "FINAL JUDGMENT",
    shortDesc: "Every Knee Will Bow",
    term: "Κρίσις",
    termLabel: "Greek",
    translation: "Krisis",
    englishMeaning: "Judgment",
    definition:
      "Christ will judge all people, separating the sheep from the goats. Those who trust in Christ are declared righteous by grace and enter eternal life. Those who reject Him face eternal separation from God. This judgment is both sobering and hopeful—justice will be done, and God's people will be vindicated.",
    scripture:
      "For we must all appear before the judgment seat of Christ, so that each one may be recompensed for his deeds in the body, according to what he has done, whether good or bad.",
    reference: "2 Corinthians 5:10",
    historicalContext:
      "The reality of judgment motivated the early church to evangelism and holy living. Revelation 20 describes the \"Great White Throne\" judgment where God's perfect justice will be displayed and every wrong will be made right.",
    reflection:
      "How does the certainty of final judgment affect how you live today?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
  {
    id: 50,
    category: "Last Things",
    categorySlug: "eschatology",
    title: "NEW HEAVEN AND NEW EARTH",
    shortDesc: "All Things New",
    term: "Οὐρανὸς Καινός, Γῆ Καινή",
    termLabel: "Greek",
    translation: "Ouranos Kainos, Gē Kainē",
    englishMeaning: "New Heaven, New Earth",
    definition:
      "God will create a new heaven and new earth where righteousness dwells. This is not a destruction but a renewal—all creation will be liberated from sin and death. God will dwell with His people forever, wiping away every tear. Paradise lost in Genesis is restored in Revelation.",
    scripture:
      "Then I saw a new heaven and a new earth; for the first heaven and the first earth passed away... and He will wipe away every tear from their eyes; and there will no longer be any death.",
    reference: "Revelation 21:1,4",
    historicalContext:
      "God's ultimate plan is not to evacuate earth for heaven but to renew all creation. The biblical vision is of a restored earth where heaven and earth merge, and God's kingdom comes in fullness.",
    reflection:
      "How does the promise of a renewed creation shape your hope and purpose now?",
    colors: { dark: "#1e293b", accent: "#94a3b8" },
  },
];

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = Math.imul(s * 1664525 + 1013904223, 1) | 0;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getCardOfTheDay(): CreedCard {
  const today = new Date();
  const year = today.getFullYear();
  const start = new Date(year, 0, 0);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const shuffled = seededShuffle(CARD_DATA, year);
  return shuffled[dayOfYear % shuffled.length];
}

export function getCardsByCategory(slug: CategorySlug): CreedCard[] {
  return CARD_DATA.filter((c) => c.categorySlug === slug);
}

export function getCardById(id: number): CreedCard | undefined {
  return CARD_DATA.find((c) => c.id === id);
}
