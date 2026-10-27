/**
 * Go Deeper — optional extra layer for a Creed Card, opened from the card back.
 *
 * Kept deliberately small: how to say it, where Scripture uses the word (or
 * teaches the idea), the story and people behind it, and a few questions.
 * Written with the `scripture-context` skill: plain words, no church jargon,
 * no application, middle path where Christians differ, every claim checked.
 *
 * Keyed by `${deckId}:${cardId}`. Cards without an entry show no Go Deeper
 * button, so entries can ship a few at a time.
 */

import type { CreedCard } from "./cardData";

export interface GoDeeperVerse {
  ref: string;
  note: string;
  /** true = this verse uses the card's word; false = it teaches the idea */
  usesWord: boolean;
}

export interface GoDeeperPerson {
  name: string;
  say: string; // pronunciation
  who: string;
}

export interface CreedGoDeeper {
  pronunciation: string;
  meaning: string;
  /** One careful line about the word itself: its roots, or how it was used. */
  wordNote?: string;
  verses: GoDeeperVerse[];
  story: string[];
  people?: GoDeeperPerson[];
  questions?: { q: string; a: string }[];
}

const ENTRIES: Record<string, CreedGoDeeper> = {
  // ── Essentials #1 · One God in Three Persons · echad ─────────────────
  "1:1": {
    pronunciation: "eh-KHAHD",
    meaning: "One. Israel's most basic confession: there is one God, and only one.",
    wordNote:
      "Echad is the ordinary Hebrew word for \"one.\" It can count a single thing (\"one day,\" Genesis 1:5) or describe things made one (\"one flesh,\" Genesis 2:24).",
    verses: [
      { ref: "Deuteronomy 6:4", note: "The Shema: \"The Lord our God, the Lord is one.\"", usesWord: true },
      { ref: "Genesis 2:24", note: "A man and his wife become \"one flesh.\"", usesWord: true },
      { ref: "Mark 12:29", note: "Asked which commandment is most important, Jesus starts with the Shema.", usesWord: false },
      { ref: "1 Corinthians 8:6", note: "\"One God, the Father… and one Lord, Jesus Christ.\" Paul seems to echo the Shema, with Jesus included in its one Lord.", usesWord: false },
    ],
    story: [
      "The Shema, named for its first word, \"Hear,\" is Israel's central confession. By the first century, Jews were praying it every morning and evening, and faithful Jews still do. In a world full of gods, it said there is one.",
      "The first Christians were Jews who kept praying the Shema while worshiping Jesus. Paul even seems to echo its words to include Jesus within the one Lord (1 Corinthians 8:6).",
      "Centuries later, a church leader named Arius taught that the Son was a created being. In AD 325 the Council of Nicaea chose the word homoousios, \"same being,\" to say clearly that the Son shares the one being of God.",
    ],
    people: [
      { name: "Arius", say: "AIR-ee-us", who: "A church leader in Alexandria, Egypt, who taught that the Son was created. His teaching is what the Council of Nicaea answered." },
      { name: "Athanasius", say: "ath-uh-NAY-shus", who: "A young deacon who went to Nicaea with his bishop and later became bishop of Alexandria himself. He defended the Son's full divinity for decades and was sent into exile five times for it." },
    ],
    questions: [
      {
        q: "Does echad mean God is more than one person?",
        a: "Not by itself. It's the ordinary word for \"one,\" and Jewish readers have long read the Shema as confessing that God is one and unique. The word can describe a unity made of parts, as in \"one flesh,\" so it leaves room for what Christians later confessed. But Christians base their belief in the Trinity on how the whole Bible speaks of the Father, Son, and Spirit, not on this one word.",
      },
      {
        q: "Where do \"Trinity\" and homoousios come from, if they aren't Bible words?",
        a: "They're church words that sum up what many verses teach together. \"Trinity\" names the one God who is Father, Son, and Spirit. Homoousios, chosen at Nicaea in AD 325, says the Son is of the same being as the Father. Neither adds to Scripture. They put a fence around what it already says.",
      },
      {
        q: "Do all Christians believe this?",
        a: "Catholic, Orthodox, and Protestant churches all accept the Nicene Creed. It's one of the few statements of faith that nearly every Christian tradition shares.",
      },
    ],
  },

  // ── Essentials #2 · God the Father · patēr ────────────────────────────
  "1:2": {
    pronunciation: "pah-TAIR",
    meaning: "Father. The name Jesus used most for God.",
    wordNote:
      "Patēr is the everyday Greek word for a father. In Gethsemane, Jesus prays with the Aramaic word Abba, and Mark gives it as \"Abba! Father!\" (Mark 14:36).",
    verses: [
      { ref: "Ephesians 1:3", note: "\"The God and Father of our Lord Jesus Christ.\"", usesWord: true },
      { ref: "Matthew 6:9", note: "Jesus teaches His followers to pray \"Our Father.\"", usesWord: true },
      { ref: "Romans 8:15", note: "The Spirit leads believers to cry out, \"Abba! Father!\"", usesWord: true },
      { ref: "Isaiah 63:16", note: "\"You, O Lord, are our Father.\" The Old Testament uses the name only now and then.", usesWord: false },
    ],
    story: [
      "The Old Testament calls God Father only occasionally, usually as the Father of the whole nation of Israel (Deuteronomy 32:6; Malachi 2:10). Jesus speaks of God as His Father all the time. John's Gospel alone uses the word for God more than a hundred times.",
      "Jesus then shared that name with His followers. He taught them to pray \"Our Father,\" and after He rose He said, \"I ascend to My Father and your Father\" (John 20:17).",
      "The earliest creeds open with the same name. The Apostles' Creed begins, \"I believe in God, the Father Almighty.\"",
    ],
    questions: [
      {
        q: "Does Abba mean \"Daddy\"?",
        a: "Not quite. It's a popular picture, but Abba was the word both children and grown adults used for their father in Aramaic, the language Jesus usually spoke. It's warm and close, but it isn't baby talk. Each of the three times it appears in the New Testament, it comes paired with the ordinary word for \"Father\" (Mark 14:36; Romans 8:15; Galatians 4:6).",
      },
      {
        q: "Is God male?",
        a: "No. Christians agree that God is spirit (John 4:24) and isn't male or female. The Bible also uses a mother's love to picture God's care (Isaiah 49:15; Isaiah 66:13), and Jesus compares Himself to a hen gathering her chicks (Matthew 23:37). \"Father\" is the name Jesus used and taught, and it describes a relationship rather than a gender.",
      },
      {
        q: "What if my own father hurt me?",
        a: "Then \"Father\" may be a hard word, and that's not a failure of faith. God isn't a copy of any human father. The Bible pictures Him as a Father who has compassion on His children (Psalm 103:13). If that pain is still with you, please talk with someone you trust, like a pastor, your group leader, or a counselor.",
      },
    ],
  },

  // ── Essentials #3 · God the Son · huios tou Theou ─────────────────────
  "1:3": {
    pronunciation: "hwee-OSS too theh-OO",
    meaning: "Son of God. It names Jesus' unique relationship with the Father.",
    wordNote:
      "In the Old Testament, \"son of God\" could be used for angels (Job 1:6), for Israel (Exodus 4:22), and for Israel's king (Psalm 2:7). The New Testament uses it of Jesus in a way no one else shares.",
    verses: [
      { ref: "John 20:31", note: "John wrote so readers would believe Jesus is \"the Christ, the Son of God.\"", usesWord: true },
      { ref: "Matthew 16:16", note: "Peter: \"You are the Christ, the Son of the living God.\"", usesWord: true },
      { ref: "Luke 1:35", note: "The angel tells Mary her child \"shall be called the Son of God.\"", usesWord: true },
      { ref: "Hebrews 1:5", note: "Quotes Psalm 2:7 and 2 Samuel 7:14, promises about David's line, and applies them to Jesus.", usesWord: false },
    ],
    story: [
      "God promised King David a son whose throne would last forever: \"I will be a father to him and he will be a son to Me\" (2 Samuel 7:14). The kings from David's line were called God's sons in that sense. The New Testament says Jesus fulfills that promise and goes beyond it (Hebrews 1:5).",
      "In the 300s, Arius taught that the Son was created, so there was a time when He didn't exist. The Council of Nicaea answered in AD 325 that the Son is \"begotten, not made.\" The creed finished at Constantinople in AD 381 adds that He is begotten \"before all ages.\" The Son is God's Son forever. He had no starting point.",
    ],
    questions: [
      {
        q: "Does \"firstborn of all creation\" mean Jesus was created?",
        a: "Christians across traditions answer no. In the Bible, \"firstborn\" can mean first in rank. God calls David His \"firstborn, the highest of the kings of the earth\" (Psalm 89:27), and David was the youngest son in his family. The very next verse says all things were created by the Son (Colossians 1:16), so He can't be one of the things created.",
      },
      {
        q: "What does \"begotten\" mean?",
        a: "To beget is to father a child. It means the child shares the father's nature. A person begets a person, and God's Son is God. The creed says the Son is \"begotten, not made\" because what you make can be different from you, like a carpenter and a chair. Some Bibles translate John 3:16 as \"only begotten Son,\" and others as \"one and only Son.\" Both say He is Son in a way no one else is.",
      },
    ],
  },

  // ── Essentials #4 · God the Holy Spirit · pneuma hagion ───────────────
  "1:4": {
    pronunciation: "PNYOO-mah HAH-gee-on",
    meaning: "Holy Spirit. God Himself, present and at work.",
    wordNote:
      "Pneuma can mean spirit, wind, or breath, like the Hebrew ruach. Jesus plays on both senses in John 3:8: \"The wind blows where it wishes… so is everyone who is born of the Spirit.\"",
    verses: [
      { ref: "John 14:26", note: "Jesus promises the Helper, the Holy Spirit, whom the Father will send.", usesWord: true },
      { ref: "Acts 2:4", note: "At Pentecost, \"they were all filled with the Holy Spirit.\"", usesWord: true },
      { ref: "Matthew 28:19", note: "Baptism \"in the name of the Father and the Son and the Holy Spirit.\"", usesWord: true },
      { ref: "Acts 5:3-4", note: "Lying to the Holy Spirit is called lying to God.", usesWord: true },
    ],
    story: [
      "The Spirit is there from the first page: the Spirit of God was \"moving over the surface of the waters\" (Genesis 1:2). But the exact phrase \"Holy Spirit\" appears only in Psalm 51:11 and Isaiah 63:10-11 in the Old Testament.",
      "The prophet Joel promised a day when God would \"pour out My Spirit on all mankind\" (Joel 2:28). At Pentecost, a Jewish harvest festival about fifty days after Passover, Peter stood up and said that day had come (Acts 2:16-17).",
      "In the 300s, some Christians who accepted that Jesus was God still said the Spirit was something less. Basil of Caesarea wrote a book defending the Spirit's full divinity. Two years after he died, the council at Constantinople in AD 381 agreed: the Spirit is \"worshiped and glorified together with the Father and the Son.\"",
    ],
    people: [
      { name: "Basil of Caesarea", say: "BAZ-il of sess-uh-REE-uh", who: "A bishop in the 300s in what's now Turkey. His book On the Holy Spirit shaped what the council at Constantinople said." },
    ],
    questions: [
      {
        q: "Is the Holy Spirit a person or a force?",
        a: "Christians across traditions confess the Spirit as a person. The Bible says the Spirit teaches (John 14:26), can be grieved (Ephesians 4:30), and can be lied to (Acts 5:3-4). Those are things you say about someone, not something. The pictures of wind, fire, and breath show what the Spirit does. They don't turn the Spirit into a thing.",
      },
      {
        q: "Does the Spirit come from the Father, or from the Father and the Son?",
        a: "Christians agree on the heart of this: the Spirit is fully God, and Jesus says He will send the Spirit \"from the Father\" (John 15:26). The creed of AD 381 says the Spirit \"proceeds from the Father.\" Centuries later, churches in western Europe added \"and the Son,\" and churches in the east objected. Some Christians believe the Spirit's eternal origin is in the Father alone, and others believe it is in the Father and the Son together. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #6 · The Creator God · bara Elohim ─────────────────────
  "1:6": {
    pronunciation: "bah-RAH eh-loh-HEEM",
    meaning: "God created. The first words of the Bible after \"In the beginning.\"",
    wordNote:
      "When bara means \"create,\" God is always the one doing it. People make things in the Bible, but they never bara. Elohim is plural in form, yet here it takes a singular verb, because it names the one God of Israel.",
    verses: [
      { ref: "Genesis 1:1", note: "\"In the beginning God created the heavens and the earth.\"", usesWord: true },
      { ref: "Genesis 1:27", note: "Bara appears three times in one verse, for the making of humans.", usesWord: true },
      { ref: "John 1:3", note: "\"All things came into being through Him,\" the Word who became flesh.", usesWord: false },
      { ref: "Hebrews 11:3", note: "\"What is seen was not made out of things which are visible.\"", usesWord: false },
    ],
    story: [
      "Again and again in Genesis 1, God sees that what He made is good. At the end of the sixth day, it's \"very good\" (Genesis 1:31). Matter, bodies, and the physical world are His good work.",
      "By the 100s, some teachers said the opposite. A set of groups later called Gnostics, from the Greek word for \"knowledge,\" taught, in different ways, that the physical world was made by a lesser god. A teacher named Marcion said the God of the Old Testament was a different god from the Father of Jesus.",
      "Irenaeus, a bishop in what is now France, answered them around AD 180. The one true God made everything, and the same God is the Father of Jesus. The Nicene Creed later put it in one line: \"maker of heaven and earth, of all things visible and invisible.\"",
    ],
    people: [
      { name: "Marcion", say: "MAR-see-on", who: "A teacher in Rome in the mid-100s who rejected the Old Testament and its God. The church sent him away." },
      { name: "Irenaeus", say: "eye-ruh-NAY-us", who: "A bishop of Lyon, in what is now France, around AD 180. His long book against the Gnostics is one of our best windows into the early church." },
    ],
    questions: [
      {
        q: "Did God make everything from nothing?",
        a: "Christians across traditions believe so. Genesis 1:1 is read that way by most Bibles, though a few translate it \"When God began to create.\" Other passages say it more plainly. The visible world wasn't made from visible things (Hebrews 11:3), and God \"calls into being that which does not exist\" (Romans 4:17). Nothing existed alongside God for Him to work with.",
      },
      {
        q: "How long did creation take? How old is the earth?",
        a: "Christians agree on the heart of this: God made everything, He made it good, and He made people in His image. Where they differ is on how to read the days of Genesis 1. Some read them as six ordinary days, not long ago. Others read them as long ages, or as a way of arranging the story in a pattern that isn't meant to be a timeline. Many hold that God worked through long natural processes. Faithful Christians hold each of these views. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #7 · Imago Dei · tselem Elohim ─────────────────────────
  "1:7": {
    pronunciation: "ih-MAH-go DAY-ee",
    meaning: "The image of God. What every human being was made to be and to show.",
    wordNote:
      "Imago Dei is the Latin Bible's wording of Genesis 1:27. The Hebrew is tselem Elohim (TSEH-lem eh-loh-HEEM). Elsewhere tselem often means a statue, like the gold image in Daniel 3:1.",
    verses: [
      { ref: "Genesis 1:26-27", note: "God makes people \"in Our image, according to Our likeness,\" male and female.", usesWord: true },
      { ref: "Genesis 9:6", note: "After the flood, murder is wrong because people are still made in God's image.", usesWord: true },
      { ref: "James 3:9", note: "We curse people \"who have been made in the likeness of God.\"", usesWord: false },
      { ref: "Colossians 1:15", note: "Jesus is \"the image of the invisible God.\"", usesWord: false },
    ],
    story: [
      "In the ancient world, kings set up statues of themselves in the lands they ruled. Many scholars think Genesis draws on that picture. God put living images of Himself in His world to show who it belongs to and to care for it (Genesis 1:28).",
      "The New Testament calls Jesus the image of God (Colossians 1:15; 2 Corinthians 4:4). It says God's people are being shaped into His image (Romans 8:29; 2 Corinthians 3:18).",
    ],
    people: [
      { name: "Irenaeus", say: "eye-ruh-NAY-us", who: "A bishop in what is now France around AD 180. He taught that people kept the image of God after the Fall but lost the likeness, and that Christ restores it." },
    ],
    questions: [
      {
        q: "Are \"image\" and \"likeness\" two different things?",
        a: "Christians agree that every person bears God's image. They read the two words in different ways. Some early teachers, like Irenaeus, saw two things: the image we keep, and a likeness to God that was lost and is restored in Christ. Many others read them as Hebrew poetry saying one thing twice. Genesis 5:1-3 uses them in both orders. Both readings have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "What exactly is the image of God in us?",
        a: "The Bible doesn't give a one-line definition. Christians have pointed to three things, and many hold all of them together. First, what we're able to do: think, love, choose, and know God. Second, the job we were given: to care for the world on God's behalf (Genesis 1:28). Third, how we were made: for relationship, as \"male and female\" (Genesis 1:27).",
      },
      {
        q: "Did sin destroy the image?",
        a: "No. After the Fall and the flood, Genesis 9:6 still says people are made in God's image, and James 3:9 says the same about people in his day. Sin damages how we reflect God, but every person still bears His image.",
      },
    ],
  },

  // ── Essentials #5 · The Divine Dance · perichōrēsis ─────────────────────
  "1:5": {
    pronunciation: "peh-ree-koh-REE-sis",
    meaning: "Mutual indwelling. The Father, Son, and Spirit are each fully \"in\" the others.",
    wordNote:
      "Not a Bible word. It sounds like the Greek word for dancing, but the two come from different roots. The \"dance\" is a modern picture, not what the word meant.",
    verses: [
      { ref: "John 14:10-11", note: "Jesus: \"I am in the Father, and the Father is in Me.\"", usesWord: false },
      { ref: "John 17:21", note: "Jesus prays that His people will share in that same oneness.", usesWord: false },
      { ref: "John 10:38", note: "\"The Father is in Me, and I in the Father.\"", usesWord: false },
      { ref: "1 Corinthians 2:10-11", note: "The Spirit knows the deep things of God from the inside.", usesWord: false },
    ],
    story: [
      "Christians believed God is one and also Father, Son, and Spirit. They needed a way to say how three can be truly distinct without being three separate gods.",
      "In the 300s, Gregory of Nazianzus used a related word to describe how Jesus' divine and human natures belong together. Centuries later, John of Damascus, a monk writing near Jerusalem in the 700s, made perichōrēsis the well-known word for the Trinity itself. Each Person is completely in the others, and none of them blurs into another.",
    ],
    people: [
      { name: "Gregory of Nazianzus", say: "nah-zee-AN-zus", who: "A bishop and theologian in the 300s, in what's now Turkey. He helped shape how the church talks about the Trinity." },
      { name: "John of Damascus", say: "duh-MASS-kus", who: "A monk and teacher in the 700s whose summary of Christian belief made this word well known." },
    ],
    questions: [
      {
        q: "So is the Trinity really a \"dance\"?",
        a: "The dance picture became popular in modern times because perichōrēsis sounds like the Greek word for dancing. The two words aren't related, and no early Christian writer we know of pictured the Trinity as a dance. The picture can still help, as long as it points to what the word does mean: the Father, Son, and Spirit living fully in one another, in love.",
      },
      {
        q: "How is this different from three gods working together?",
        a: "Three gods working together would be three separate beings who cooperate. Perichōrēsis says something much closer than that. Each Person is fully in the others, sharing one life and one being. That's why Christians say God is one, not three gods on the same team.",
      },
    ],
  },

  // ── Essentials #22 · Sin and the Fall · hamartia ──────────────────────
  "1:22": {
    pronunciation: "hah-mar-TEE-ah",
    meaning: "Sin. Wrongdoing against God and against His good design.",
    wordNote:
      "Centuries before the New Testament, the related verb could mean missing a target. By Paul's time, the word simply meant sin.",
    verses: [
      { ref: "Romans 5:12", note: "Sin entered the world through one man, and death through sin.", usesWord: true },
      { ref: "Romans 6:23", note: "\"The wages of sin is death, but the gift of God is eternal life.\"", usesWord: true },
      { ref: "John 1:29", note: "Jesus is \"the Lamb of God, who takes away the sin of the world.\"", usesWord: true },
      { ref: "1 John 1:8-9", note: "If we confess our sins, He is faithful to forgive.", usesWord: true },
    ],
    story: [
      "The story of the Fall is in Genesis 3. Eve listened to the serpent instead of God, Adam ate with her, and everything after that is affected: their relationship with God, with each other, and with the world.",
      "In the early 400s, a monk named Pelagius taught that people are born able to choose good on their own. He believed God helps through His law and Jesus' example, but not with an inner grace we need first. Augustine, a bishop in North Africa, argued that sin runs so deep we need God's grace from the very start. Church councils rejected Pelagius's teaching, and Christians across traditions still do.",
    ],
    people: [
      { name: "Pelagius", say: "peh-LAY-jee-us", who: "A monk, probably from Britain, who taught that people can choose good without God's grace first." },
      { name: "Augustine", say: "AW-gus-teen", who: "A bishop in North Africa from the 390s until 430, one of the most influential Christian writers ever. He argued we need grace from the start." },
    ],
    questions: [
      {
        q: "Are we born guilty of Adam's sin?",
        a: "Christians agree on the heart of this: everyone is born into a broken world with a nature bent away from God, and everyone needs God's grace. Where they differ is on guilt. Some believe every person inherits Adam's guilt as well as his brokenness. Others believe we inherit the brokenness and death, but not the guilt of his particular sin. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Does \"missing the mark\" explain what sin is?",
        a: "It's a popular picture, and it's based on how a related word was used in much older Greek. By the time of the New Testament, the word just meant sin. The Bible's own descriptions go deeper than a missed target: sin is distrusting God and doing what He said not to (Genesis 3), breaking God's law (1 John 3:4), and turning from God to go our own way (Isaiah 53:6).",
      },
    ],
  },

  // ── Essentials #36 · The Church · ekklēsia ────────────────────────────
  "1:36": {
    pronunciation: "ek-klay-SEE-ah",
    meaning: "An assembly. A gathering of people.",
    wordNote:
      "The word is built from \"out\" and \"call,\" so some teach it means \"called-out ones.\" In everyday Greek it just meant an assembly, like a town meeting.",
    verses: [
      { ref: "Matthew 16:18", note: "Jesus: \"I will build My church.\"", usesWord: true },
      { ref: "Acts 19:32, 39", note: "The same word for an angry crowd and a legal town assembly in Ephesus.", usesWord: true },
      { ref: "Ephesians 5:25", note: "\"Christ loved the church and gave Himself up for her.\"", usesWord: true },
      { ref: "Colossians 1:18", note: "Christ is the head of the body, the church.", usesWord: true },
    ],
    story: [
      "Long before Jesus, the Greek translation of the Old Testament used ekklēsia for the assembly of Israel gathered before God (Deuteronomy 9:10). So when the first believers called themselves the ekklēsia, they were saying they were God's people, gathered.",
      "It was never a word for a building. In its early years, the church mostly met in homes (Romans 16:5). In Jerusalem, believers also gathered in the temple courts (Acts 2:46).",
      "The creed finished at Constantinople in AD 381, the one usually called the Nicene Creed, describes the church as \"one, holy, catholic, and apostolic.\" Here \"catholic\" means universal, the whole church everywhere. A bishop named Ignatius was already using the phrase \"the catholic church\" around AD 110.",
    ],
    people: [
      { name: "Ignatius of Antioch", say: "ig-NAY-shus", who: "A bishop who wrote letters to churches on his way to martyrdom in Rome, around AD 110. He's the first known writer to call it \"the catholic church.\"" },
    ],
    questions: [
      {
        q: "Why does the creed say \"catholic\"?",
        a: "Because the word means universal, the whole church in every place and time. It was in use long before the church divided into the traditions we know today. When Christians of many traditions say it in the creed, they mean the one worldwide family of believers.",
      },
      {
        q: "Is the church a building?",
        a: "Not in the Bible. Every time the New Testament uses the word, it means people. Paul greets \"the church that meets at their house\" (Romans 16:5). Buildings came later, as places for the church to gather.",
      },
    ],
  },

  // ── Essentials #40 · Discipleship · mathētēs ──────────────────────────
  "1:40": {
    pronunciation: "mah-thay-TAYS",
    meaning: "A disciple. A learner, a student, a follower.",
    wordNote:
      "The word was used for anyone learning under a teacher. The Gospels use it for Jesus' followers, and also for John the Baptist's and the Pharisees' followers (Mark 2:18).",
    verses: [
      { ref: "Matthew 28:19", note: "\"Go and make disciples of all nations\" uses the related verb.", usesWord: false },
      { ref: "John 8:31", note: "\"If you continue in My word, then you are truly disciples of Mine.\"", usesWord: true },
      { ref: "Luke 14:27", note: "Whoever doesn't carry their cross \"cannot be My disciple.\"", usesWord: true },
      { ref: "Acts 11:26", note: "\"The disciples were called Christians first at Antioch.\"", usesWord: true },
    ],
    story: [
      "Jesus' disciples didn't just take notes. They traveled with Him, ate with Him, watched how He lived, and were sent out to do what He did (Mark 3:14; Luke 9:1-2).",
      "The word shows up over 250 times in the Gospels and Acts. In Acts, \"disciples\" is one of the main names for all believers. Then something surprising happens. The New Testament letters, and Revelation, never use it. They say \"brothers and sisters,\" \"saints,\" and \"believers\" instead.",
    ],
    questions: [
      {
        q: "Is the word \"discipleship\" in the Bible?",
        a: "The English word isn't. The Bible uses \"disciple\" (mathētēs) and the verb \"make disciples\" (Matthew 28:19). \"Discipleship\" is a helpful word Christians use for the whole life of following Jesus as His disciple.",
      },
      {
        q: "Why do the letters stop using \"disciple\"?",
        a: "The New Testament doesn't say. Some think the letters simply use family words, like \"brothers and sisters,\" because they're written to churches that already know each other. What's clear is that the idea doesn't disappear. Paul still writes, \"Follow my example, as I follow the example of Christ\" (1 Corinthians 11:1).",
      },
    ],
  },

  // ── Essentials #8 · God's Sovereignty · Pantokratōr ──────────────────
  "1:8": {
    pronunciation: "pan-toh-KRAH-tor",
    meaning: "Almighty. The One who holds all things in His hand.",
    wordNote:
      "Pantokratōr joins two Greek words: \"all\" and \"to hold power.\" When the Old Testament was translated into Greek, it often used this word for \"the Lord of hosts.\"",
    verses: [
      { ref: "Revelation 1:8", note: "\"I am the Alpha and the Omega,\" says the Lord God, \"the Almighty.\"", usesWord: true },
      { ref: "Revelation 4:8", note: "Around God's throne: \"Holy, holy, holy is the Lord God, the Almighty.\"", usesWord: true },
      { ref: "2 Corinthians 6:18", note: "Paul quotes God's promise to be a Father to His people, \"says the Lord Almighty.\"", usesWord: true },
      { ref: "Psalm 115:3", note: "\"He does whatever He pleases.\" The idea without the word.", usesWord: false },
    ],
    story: [
      "Outside of one quote from Paul, the New Testament saves this word for Revelation, where it shows up nine times. Revelation was written to small churches under pressure from Rome, an empire that called its own emperor lord. The book keeps saying who really rules.",
      "The Nicene Creed opens with it: \"We believe in one God, the Father Almighty.\" Many old churches also have a painting of Jesus called Christ Pantocrator, holding a book in one hand and blessing with the other. One of the oldest, from the 500s, still hangs in St. Catherine's Monastery at the foot of Mount Sinai.",
    ],
    questions: [
      {
        q: "If God is in control, does He cause evil?",
        a: "Christians agree God is never the author of evil and never tempts anyone to sin (James 1:13). They also agree He can bring good out of what people mean for harm, like Joseph's brothers selling him (Genesis 50:20). Christians differ on how God's rule and our real choices fit together. Some believe God has planned everything that happens, and that our choices are still real inside that plan. Others believe God chose to give people real freedom and rules by working through it. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Why doesn't God stop the suffering I'm in right now?",
        a: "The Bible doesn't hide this question. Whole psalms ask it (Psalm 13). It doesn't give a neat answer either, but it does promise that God is with people in suffering and that one day He will wipe every tear away (Revelation 21:4). If you're carrying something heavy, please tell someone you trust, like a pastor, your group leader, or a friend.",
      },
      {
        q: "What does \"Lord of hosts\" mean?",
        a: "\"Hosts\" means armies: heaven's armies of angels, and sometimes the stars (Psalm 103:21; Isaiah 40:26). \"The Lord of hosts\" is one of the Old Testament's most common names for God, and it pictures Him as commander of everything in heaven and earth. When the Old Testament was translated into Greek, this name was often rendered pantokratōr, \"Almighty.\"",
      },
    ],
  },

  // ── Essentials #9 · The Incarnation · ensarkōsis ─────────────────────
  "1:9": {
    pronunciation: "en-SAR-koh-sis",
    meaning: "In flesh. God the Son became a real human being.",
    wordNote:
      "Sarx is Greek for \"flesh.\" The church built this word from the Bible's phrase \"in the flesh.\" The English word \"incarnation\" comes from the Latin version of the same idea.",
    verses: [
      { ref: "John 1:14", note: "\"The Word became flesh, and dwelt among us.\"", usesWord: false },
      { ref: "1 John 4:2", note: "Every spirit that confesses Jesus Christ \"has come in the flesh\" is from God.", usesWord: false },
      { ref: "Philippians 2:6-7", note: "Though He existed in the form of God, He took \"the form of a bond-servant.\"", usesWord: false },
      { ref: "1 Timothy 3:16", note: "An early Christian saying: \"He who was revealed in the flesh.\"", usesWord: false },
    ],
    story: [
      "Some of the earliest arguments in the church weren't about whether Jesus was God. They were about whether He was really human. Some teachers said He only seemed to have a body. 1 John answers that kind of teaching head on (1 John 4:2-3).",
      "Around AD 110, a church leader named Ignatius wrote letters on his way to die in Rome. He insisted Jesus truly ate, drank, suffered, and died. A couple of centuries later, Athanasius wrote a short book called On the Incarnation. He said God became one of us so that we could be made new.",
    ],
    people: [
      { name: "Ignatius of Antioch", say: "ig-NAY-shus", who: "A church leader in Antioch, Syria. He wrote seven letters while being taken under guard to Rome, where he was killed for his faith." },
      { name: "Athanasius", say: "ath-uh-NAY-shus", who: "A bishop of Alexandria, Egypt, in the 300s. His book On the Incarnation is still read today." },
    ],
    questions: [
      {
        q: "When Jesus became human, did He stop being God?",
        a: "No. Christians across traditions confess that He stayed fully God and became fully human. Philippians 2 says He \"emptied Himself,\" and Christians understand that as Him taking on the limits of a human life, not giving up who He is.",
      },
      {
        q: "Is Jesus still human now?",
        a: "Yes. He rose in a real body and went to the Father in that body (Luke 24:39; Acts 1:9). Paul calls Him \"the man Christ Jesus\" even after His return to heaven (1 Timothy 2:5).",
      },
      {
        q: "Why did God have to become human to save us?",
        a: "Hebrews gives part of the answer: Jesus shared our flesh and blood so that through death He could break the power of death, and so He could be a merciful high priest who knows our weakness (Hebrews 2:14-18). A church leader named Gregory of Nazianzus put it this way in the 300s: what He did not take on, He did not heal. To heal all of us, He became all of what we are.",
      },
    ],
  },

  // ── Essentials #10 · The Virgin Birth · parthenos ────────────────────
  "1:10": {
    pronunciation: "par-THEN-oss",
    meaning: "Virgin. Jesus had a human mother and no human father.",
    wordNote:
      "Parthenos was the usual Greek word for a young unmarried woman, normally meaning one who had never been with a man.",
    verses: [
      { ref: "Luke 1:27", note: "Gabriel is sent \"to a virgin engaged to a man whose name was Joseph.\"", usesWord: true },
      { ref: "Luke 1:34-35", note: "Mary asks how this can be, and the angel answers: the Holy Spirit will come upon you.", usesWord: false },
      { ref: "Matthew 1:23", note: "Matthew quotes Isaiah 7:14: \"The virgin shall be with child.\"", usesWord: true },
      { ref: "Galatians 4:4", note: "\"God sent forth His Son, born of a woman.\"", usesWord: false },
    ],
    story: [
      "Matthew and Luke tell the story in different ways. Matthew follows Joseph, his dreams, and his choice to stay with Mary. Luke follows Mary, the angel's visit, and her answer: \"May it be done to me according to your word\" (Luke 1:38).",
      "The belief shows up very early. Ignatius mentions it in his letters around AD 110, and the Apostles' Creed confesses Jesus \"born of the Virgin Mary.\" Strictly speaking, the miracle is in how Jesus was conceived. His birth itself was an ordinary human birth.",
    ],
    questions: [
      {
        q: "Doesn't Isaiah 7:14 just say \"young woman\"?",
        a: "The Hebrew word there, almah, means a young woman old enough to marry. When Jewish scholars translated Isaiah into Greek, before Jesus was born, they chose parthenos, \"virgin.\" Matthew quotes that Greek version and sees the promise reaching its full meaning in Jesus. That's why some Bibles say \"virgin\" and others say \"young woman\" in Isaiah.",
      },
      {
        q: "Did Mary have other children after Jesus?",
        a: "Christians agree on the heart of this: Mary was a virgin when Jesus was conceived. They differ on what came after. Some believe Mary stayed a virgin her whole life and read Jesus' \"brothers\" (Mark 6:3) as cousins or Joseph's children from an earlier marriage. Others read them as Mary and Joseph's later children (Matthew 1:25). Both views have long histories. It's a good one to talk through with your group.",
      },
      {
        q: "Why does it matter that Jesus had no human father?",
        a: "Luke ties it to who Jesus is: the Spirit will come upon Mary, \"and for that reason\" the child will be called the Son of God (Luke 1:35). It shows His coming was God's act, not a human plan. Christians have also long noticed that Luke traces Jesus' family line all the way back to \"Adam, the son of God\" (Luke 3:38). Like Adam, Jesus is a new beginning for the human race.",
      },
    ],
  },

  // ── Essentials #11 · Fully God and Fully Human · henōsis hypostatikē ──
  "1:11": {
    pronunciation: "HEN-oh-sis hoo-po-stah-tee-KAY",
    meaning: "The union in one person. Jesus is one person who is both God and human.",
    wordNote:
      "Hypostasis means what really stands underneath, a thing's real being. Hebrews 1:3 uses it when it calls the Son \"the exact representation of His nature.\"",
    verses: [
      { ref: "Colossians 2:9", note: "\"In Him all the fullness of Deity dwells in bodily form.\"", usesWord: false },
      { ref: "John 1:1, 14", note: "The Word was God, and the Word became flesh.", usesWord: false },
      { ref: "Hebrews 2:17", note: "He had to be made like His brothers \"in all things.\"", usesWord: false },
      { ref: "Hebrews 4:15", note: "Tempted in every way as we are, \"yet without sin.\"", usesWord: false },
    ],
    story: [
      "In the 400s, two teachings pulled in opposite directions. Nestorius, a bishop of Constantinople, was accused of splitting Jesus into two persons, one divine and one human. A monk named Eutyches taught that Jesus' human nature was swallowed up by His divine nature.",
      "In AD 451, hundreds of bishops met at Chalcedon, across the water from Constantinople. They said Christ is one person in two natures, \"without confusion, without change, without division, without separation.\" Those four phrases don't explain how it works. They mark off the ways to get it wrong.",
    ],
    people: [
      { name: "Nestorius", say: "neh-STOR-ee-us", who: "A bishop of Constantinople. He objected to calling Mary \"Mother of God\" and was removed at the Council of Ephesus in AD 431." },
      { name: "Leo the Great", say: "LEE-oh", who: "A bishop of Rome. His letter on the two natures of Christ was read aloud at Chalcedon." },
    ],
    questions: [
      {
        q: "If Jesus is God, how could He not know something?",
        a: "Jesus said no one knows the day or hour of His return, \"not even the Son\" (Mark 13:32), and Luke says He \"kept increasing in wisdom\" (Luke 2:52). Christians have long explained this through His two natures. As a real human, He grew and learned the way we do, without ever stopping being God.",
      },
      {
        q: "Does every church accept Chalcedon?",
        a: "Most do. Some ancient churches, like the Coptic church of Egypt and the Armenian church, didn't accept its wording. In recent decades, many leaders on both sides have said they confess the same Christ in different words.",
      },
      {
        q: "Could Jesus have sinned?",
        a: "Christians agree on the heart of this: Jesus was really tempted, and He never sinned (Hebrews 4:15). The temptations in the wilderness weren't pretend (Matthew 4:1-11). They differ on one point. Some believe that because He is God, He could not have sinned, though the struggle was real. Others believe that as a true human He could have, and that His victory is all the more real because of it. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #12 · Christ's Sacrifice · hilasmos ───────────────────
  "1:12": {
    pronunciation: "hih-lahs-MOSS",
    meaning: "Atoning sacrifice. The way God deals with sin and brings people back to Himself.",
    wordNote:
      "A related word, hilastērion, is used in the Greek Old Testament for the mercy seat, the gold lid on the ark of the covenant. Hebrews 9:5 uses it that way too.",
    verses: [
      { ref: "1 John 2:2", note: "He is the atoning sacrifice for our sins, \"and not only for ours but also for the whole world.\"", usesWord: true },
      { ref: "1 John 4:10", note: "God \"loved us and sent His Son\" to be the atoning sacrifice.", usesWord: true },
      { ref: "Romans 3:25", note: "God \"displayed\" Jesus publicly as a hilastērion.", usesWord: false },
      { ref: "Leviticus 16:14-15", note: "The high priest sprinkles blood on the mercy seat.", usesWord: false },
    ],
    story: [
      "The ark of the covenant was a gold-covered chest kept in the innermost room of the tabernacle, and later the temple. Its lid was called the mercy seat. God said He would meet with His people there (Exodus 25:22). Once a year, the high priest sprinkled blood on it for the sins of the whole nation.",
      "In 1 John 4:10, John ties it to love: God loved first and sent His Son. Over the centuries Christians have used several pictures for what the cross did: a sacrifice, a ransom, a victory over the powers of evil, and God healing humanity from the inside.",
    ],
    people: [
      { name: "Irenaeus", say: "eye-ruh-NAY-us", who: "A bishop in Lyon, France, in the 100s. He taught that Jesus lived our whole human story over again, getting right what Adam got wrong." },
      { name: "Anselm", say: "AN-selm", who: "An archbishop of Canterbury, England. Around 1098 he wrote Why God Became Man, a famous answer to why the cross was needed." },
    ],
    questions: [
      {
        q: "Why do Bibles translate this word differently?",
        a: "Some Bibles say \"propitiation,\" which means turning away anger. Some say \"expiation,\" which means wiping sin away. Many newer Bibles say \"atoning sacrifice.\" Christians agree on the heart of it: God Himself provided the sacrifice because He loves the world (1 John 4:10). They differ on how much the word is about God's anger against sin and how much it's about removing sin. It's a good one to talk through with your group.",
      },
      {
        q: "Why did there have to be blood?",
        a: "In the Bible, blood stands for life. \"The life of the flesh is in the blood\" (Leviticus 17:11). A sacrifice meant a life given. Hebrews says that \"without shedding of blood there is no forgiveness\" (Hebrews 9:22), and that the animal sacrifices pointed ahead to the one life that could truly deal with sin, Jesus giving His own (Hebrews 9:12-14).",
      },
      {
        q: "Did Jesus die for everyone?",
        a: "Christians agree Jesus' death is enough for the whole world and that the good news is to be offered to everyone (1 John 2:2; Matthew 28:19). They differ on God's purpose in it. Some believe Christ died to save everyone who would believe, and offered Himself for all. Others believe His death was meant to surely save the people God had chosen, while still being offered to all. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #13 · Atonement · kippur ──────────────────────────────
  "1:13": {
    pronunciation: "kih-POOR",
    meaning: "Atonement. Covering or wiping away sin so people can be with God.",
    wordNote:
      "Scholars debate what the root word first meant. Ideas include \"to cover,\" \"to wipe clean,\" and \"to pay a ransom.\" The English word \"atonement\" was made from \"at one,\" and William Tyndale used it in his English Bible in the 1520s and 1530s.",
    verses: [
      { ref: "Leviticus 16:30", note: "\"On this day atonement shall be made for you to cleanse you.\"", usesWord: true },
      { ref: "Leviticus 17:11", note: "\"It is the blood by reason of the life that makes atonement.\"", usesWord: true },
      { ref: "Hebrews 9:12", note: "Christ entered the holy place \"once for all\" through His own blood.", usesWord: false },
      { ref: "Romans 5:11", note: "\"We have now received the reconciliation.\" Older Bibles say \"atonement\" here.", usesWord: false },
    ],
    story: [
      "Yom Kippur, the Day of Atonement, was the one day a year the high priest went into the innermost room of the tabernacle, and later the temple. Two goats were part of the day. One was sacrificed. The high priest laid his hands on the other, confessed the people's sins over it, and sent it out into the wilderness (Leviticus 16). That second goat is where the English word \"scapegoat\" comes from.",
      "Hebrews reads Jesus' death through this day. The high priest had to go in every year. Jesus went in once, for good (Hebrews 9:12). Yom Kippur is still the holiest day of the year for Jewish people today.",
    ],
    people: [
      { name: "William Tyndale", say: "TIN-dull", who: "An English scholar who translated the New Testament from Greek into English. He was killed for it in 1536, and much of his wording lives on in later English Bibles." },
    ],
    questions: [
      {
        q: "What's the difference between this card and #12?",
        a: "They're close cousins. #12 looks at the sacrifice itself, Jesus giving His life. This card looks at what it brings about: people who were far from God made one with Him again (2 Corinthians 5:19).",
      },
      {
        q: "What was the scapegoat for?",
        a: "On the Day of Atonement, the high priest confessed the people's sins over a live goat, and it was led away into the wilderness, carrying them \"to a solitary land\" (Leviticus 16:21-22). The first goat's blood showed sin was dealt with. The second showed sin being taken far away. Psalm 103:12 uses a similar picture: \"As far as the east is from the west, so far has He removed our transgressions from us.\"",
      },
      {
        q: "Why did Israel need a Day of Atonement every year?",
        a: "Hebrews asks the same question. It says the yearly sacrifices were a reminder of sins, since animal blood could never take sins away for good (Hebrews 10:1-4). Priests stood every day offering the same sacrifices. Jesus offered one sacrifice for all time and sat down, because the work was finished (Hebrews 10:11-14).",
      },
    ],
  },

  // ── Essentials #14 · The Resurrection · anastasis ────────────────────
  "1:14": {
    pronunciation: "ah-NAH-stah-sis",
    meaning: "Rising again. Standing up from death.",
    wordNote:
      "Anastasis comes from \"up\" and \"to stand.\" People used it for standing up from a chair as much as for rising from the dead.",
    verses: [
      { ref: "1 Corinthians 15:20-21", note: "Christ is \"the first fruits,\" the first of the harvest to come.", usesWord: true },
      { ref: "John 11:25", note: "\"I am the resurrection and the life.\"", usesWord: true },
      { ref: "Acts 4:2", note: "The leaders were upset that the apostles preached \"the resurrection from the dead.\"", usesWord: true },
      { ref: "Luke 24:39", note: "The risen Jesus: \"A spirit does not have flesh and bones as you see that I have.\"", usesWord: false },
    ],
    story: [
      "In 1 Corinthians 15:3-8, Paul passes on a short summary he says he \"received\": Christ died, was buried, was raised on the third day, and appeared to many people, including more than 500 at once. Many scholars think this summary was being said within a few years of the cross.",
      "In Athens, when Paul preached Jesus and the resurrection, some listeners seem to have thought \"Anastasis\" was the name of a new goddess (Acts 17:18). The first Christians began meeting on the first day of the week, the day Jesus rose (Acts 20:7). Revelation calls it \"the Lord's day\" (Revelation 1:10).",
    ],
    questions: [
      {
        q: "Did Jesus rise with a body, or just as a spirit?",
        a: "With a body. He ate fish and invited His friends to touch Him (Luke 24:39-43). His body was also changed. He could appear in a locked room (John 20:19). Paul calls it a \"spiritual body\" (1 Corinthians 15:44). He means a body fully alive by God's Spirit, not a ghost.",
      },
      {
        q: "Will we rise too?",
        a: "Yes. That's Paul's point with \"first fruits\": Jesus is the first of the harvest, and those who belong to Him follow (1 Corinthians 15:23). The Apostles' Creed ends with \"the resurrection of the body.\"",
      },
      {
        q: "How do we know it really happened?",
        a: "The New Testament points to witnesses. Paul says Jesus appeared to more than 500 people at once, most of them still alive when he wrote, so readers could ask them (1 Corinthians 15:6). The first witnesses at the tomb were women, whose word often counted for less in that culture, an unlikely detail to make up. And the disciples went from hiding behind locked doors (John 20:19) to preaching it openly in Jerusalem (Acts 2:32).",
      },
    ],
  },

  // ── Essentials #15 · The Ascension · analēpsis ───────────────────────
  "1:15": {
    pronunciation: "ah-NAH-layp-sis",
    meaning: "Taking up. Jesus returning to the Father, body and all.",
    wordNote:
      "Analēpsis comes from a verb meaning \"to take up.\" Luke uses the noun once (Luke 9:51) and the verb when Jesus is \"taken up\" (Acts 1:2, 11).",
    verses: [
      { ref: "Luke 9:51", note: "\"When the days were approaching for His ascension, He was determined to go to Jerusalem.\"", usesWord: true },
      { ref: "Acts 1:9-11", note: "A cloud receives Him, and two men in white say He will come back the same way.", usesWord: false },
      { ref: "Psalm 110:1", note: "\"Sit at My right hand.\" One of the Old Testament verses the New quotes most.", usesWord: false },
      { ref: "Hebrews 7:25", note: "\"He always lives to make intercession for them.\"", usesWord: false },
    ],
    story: [
      "Luke tells this story at the end of his Gospel and again at the start of Acts (Acts 1:9-11). Acts says Jesus appeared to His followers over forty days before He was taken up (Acts 1:3).",
      "Psalm 110 says God's chosen king would sit at His right hand, the place of honor and power. Jesus applies it to Himself (Mark 14:62), and Peter preaches it on the day of Pentecost (Acts 2:34-35). Many churches mark Ascension Day forty days after Easter, which always falls on a Thursday.",
    ],
    questions: [
      {
        q: "Did Jesus fly up into space?",
        a: "The point of the story isn't a trip through the sky. In the Bible, a cloud often shows God's presence (Exodus 40:34). Luke is saying Jesus went into the Father's presence to rule. Christians differ on how much to picture it as going \"up,\" but they agree He went bodily to the Father and will return.",
      },
      {
        q: "If Jesus left, how is He with us?",
        a: "Jesus said it was better for His followers that He go, because then He would send the Helper, the Holy Spirit (John 16:7). He also promised, \"I am with you always\" (Matthew 28:20).",
      },
      {
        q: "What is Jesus doing now?",
        a: "The New Testament gives several answers. He rules until every enemy is under His feet (1 Corinthians 15:25). He prays for His people: \"He always lives to make intercession for them\" (Hebrews 7:25; Romans 8:34). And He is preparing a place for them (John 14:2-3).",
      },
    ],
  },

  // ── Essentials #16 · The Comforter · paraklētos ──────────────────────
  "1:16": {
    pronunciation: "pah-RAH-klay-toss",
    meaning: "Helper. One called alongside you.",
    wordNote:
      "Paraklētos was often used for someone called to stand beside you in court, a helper or advocate. Bibles translate it Comforter, Helper, Counselor, or Advocate. All four catch part of it.",
    verses: [
      { ref: "John 14:16-17", note: "\"He will give you another Helper… the Spirit of truth.\"", usesWord: true },
      { ref: "John 14:26", note: "The Helper \"will teach you all things, and bring to your remembrance\" what Jesus said.", usesWord: true },
      { ref: "John 16:7", note: "\"It is to your advantage that I go away.\"", usesWord: true },
      { ref: "1 John 2:1", note: "Jesus Himself is our paraklētos, \"an Advocate with the Father.\"", usesWord: true },
    ],
    story: [
      "Only John uses this word in the New Testament. Four times, Jesus uses it for the Spirit on the night before He died (John 14–16). Once, John uses it for Jesus (1 John 2:1). That's why Jesus says \"another\" Helper. The Spirit would do for His followers what Jesus had been doing beside them.",
      "The old English word \"Comforter\" goes back to the Latin for \"to make strong.\" In older English, to comfort someone meant to strengthen them, not only to console them.",
    ],
    questions: [
      {
        q: "Is the Holy Spirit a person or a force?",
        a: "Christians across traditions confess the Spirit as a person, fully God with the Father and the Son. In these chapters the Spirit teaches, reminds, testifies, and guides (John 14:26; 15:26; 16:13). Those are things a person does, not a power. The Nicene Creed calls Him \"the Lord, the giver of life.\"",
      },
      {
        q: "Why did Jesus say it was better for Him to leave?",
        a: "Jesus said, \"It is to your advantage that I go away; for if I do not go away, the Helper will not come to you\" (John 16:7). In His body, Jesus could be in one place at a time. The Spirit would be with every one of His followers, everywhere, at once. Jesus even said those who believe would do \"greater works\" than He had, because He was going to the Father (John 14:12).",
      },
      {
        q: "Is the Spirit only for some Christians?",
        a: "No. Paul says anyone who doesn't have the Spirit of Christ doesn't belong to Him (Romans 8:9), which means everyone who does belong to Him has the Spirit. On the day of Pentecost, Peter promised the gift of the Spirit to everyone who turned to Jesus, \"and to your children and for all who are far off\" (Acts 2:38-39).",
      },
    ],
  },

  // ── Essentials #17 · Regeneration · palingenesia ─────────────────────
  "1:17": {
    pronunciation: "pah-lin-geh-neh-SEE-ah",
    meaning: "New birth. Being made new from the start.",
    wordNote:
      "Palingenesia joins \"again\" and \"birth.\" Some Greek thinkers used it for the world being reborn. The New Testament uses it only twice.",
    verses: [
      { ref: "Titus 3:5", note: "\"By the washing of regeneration and renewing by the Holy Spirit.\"", usesWord: true },
      { ref: "Matthew 19:28", note: "The other use: the renewal of all things, when the Son of Man sits on His throne.", usesWord: true },
      { ref: "John 3:3", note: "\"Unless one is born again he cannot see the kingdom of God.\"", usesWord: false },
      { ref: "Ezekiel 36:26", note: "God promises a new heart and a new spirit.", usesWord: false },
    ],
    story: [
      "Nicodemus was a Pharisee, a member of a group known for keeping God's law carefully, and a leader of his people. He came to Jesus at night (John 3:1-2). Jesus told him he must be born again. The Greek word for \"again\" can also mean \"from above,\" and Nicodemus heard it the first way: \"How can a man be born when he is old?\"",
      "John doesn't say what Nicodemus decided that night. But he shows up again later, bringing about 75 pounds of spices to help bury Jesus (John 19:39).",
    ],
    questions: [
      {
        q: "What does \"washing of regeneration\" mean? Is it baptism?",
        a: "Christians agree the new birth is God's work by His Spirit, not something we earn (Titus 3:5). They differ on how baptism fits. Some believe God gives new birth through baptism itself. Others believe baptism is an outward sign of a new birth the Spirit gives. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Is \"born again\" a special kind of Christian?",
        a: "Not in the Bible. Jesus says everyone who enters God's kingdom is born again (John 3:3). Peter writes to all believers that God \"caused us to be born again\" (1 Peter 1:3).",
      },
      {
        q: "Do I need to remember the day I was born again?",
        a: "Not according to the Bible. Some people can name the moment, like Paul on the road to Damascus (Acts 9:3-6). Others, like Timothy, grew up knowing the Scriptures from childhood (2 Timothy 1:5; 3:15). Jesus compared the Spirit's work to the wind: you can't see where it comes from, but you can see what it does (John 3:8).",
      },
    ],
  },

  // ── Essentials #18 · Sanctification · hagiasmos ──────────────────────
  "1:18": {
    pronunciation: "hah-gee-ahs-MOSS",
    meaning: "Making holy. Being set apart for God and made more like Jesus.",
    wordNote:
      "It comes from hagios, \"holy,\" which first meant set apart for God. The same root gives the word \"saints,\" hagioi, the holy ones.",
    verses: [
      { ref: "1 Thessalonians 4:3", note: "\"This is the will of God, your sanctification.\"", usesWord: true },
      { ref: "Hebrews 12:14", note: "Pursue peace and \"the sanctification without which no one will see the Lord.\"", usesWord: true },
      { ref: "1 Corinthians 1:30", note: "Christ \"became to us wisdom from God, and righteousness and sanctification.\"", usesWord: true },
      { ref: "2 Corinthians 3:18", note: "We \"are being transformed into the same image from glory to glory.\"", usesWord: false },
    ],
    story: [
      "Paul opens his first letter to the church in Corinth by calling them \"saints\" (1 Corinthians 1:2). Then he spends much of the letter correcting them for fighting, suing each other, and getting drunk at the Lord's Supper. To Paul, being holy started with belonging to God. Living holy came after, and it took time.",
      "Later in the same letter he puts it in the past tense: \"you were sanctified\" (1 Corinthians 6:11). The New Testament talks about holiness as something already given and something still growing.",
    ],
    questions: [
      {
        q: "How holy can a person become in this life?",
        a: "Christians agree the Spirit really changes people, and that the change will be complete when Jesus returns (1 John 3:2). They differ on how far it goes before then. Some believe the Spirit can free a believer from choosing sin on purpose in this life. Others believe the struggle with sin lasts until death, even as we grow. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "What's the difference between justification and sanctification?",
        a: "Justification is God declaring a person right with Him, once and for all (Romans 5:1). Sanctification is God making that person holy, over a lifetime (2 Corinthians 3:18). Both are gifts of grace, and both come through being joined to Christ (1 Corinthians 1:30). One is about our standing before God. The other is about our growth.",
      },
      {
        q: "Does the Spirit do it all, or do I have a part?",
        a: "Paul holds both together in one sentence: \"Work out your salvation with fear and trembling; for it is God who is at work in you, both to will and to work for His good pleasure\" (Philippians 2:12-13). The power is God's. People still choose, practice, and train (1 Timothy 4:7). Christians agree on that much, even when they describe the balance differently.",
      },
    ],
  },

  // ── Essentials #19 · The Fruit of the Spirit · karpos tou Pneumatos ──
  "1:19": {
    pronunciation: "kar-POSS too PNYOO-mah-toss",
    meaning: "Fruit of the Spirit. The character the Spirit grows in a person.",
    wordNote:
      "Karpos is the everyday word for fruit or a crop. In Galatians 5:22 it's singular: \"the fruit,\" not \"the fruits.\"",
    verses: [
      { ref: "Galatians 5:22-23", note: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.", usesWord: true },
      { ref: "John 15:5", note: "\"I am the vine, you are the branches… he bears much fruit.\"", usesWord: true },
      { ref: "Matthew 7:16", note: "\"You will know them by their fruits.\"", usesWord: true },
      { ref: "Galatians 5:19-21", note: "Just before, Paul lists \"the deeds of the flesh.\"", usesWord: false },
    ],
    story: [
      "Paul wrote Galatians to churches in what is now central Turkey. Teachers had come telling them that non-Jewish believers had to keep the law of Moses, including circumcision, to truly belong. Paul pushes back hard.",
      "His answer isn't more rules. It's the Spirit. He contrasts a list of deeds people do with a fruit the Spirit grows, and ends with a quiet jab at the rule-keepers: \"against such things there is no law\" (Galatians 5:23).",
    ],
    questions: [
      {
        q: "Why \"fruit\" and not \"fruits\"?",
        a: "The Bible doesn't explain it. Many read it as one fruit with nine sides, all growing together, so you can't pick some and skip others. Others say the singular simply works like \"harvest\" in English, one word for many things.",
      },
      {
        q: "How is the fruit different from the gifts?",
        a: "Gifts are abilities the Spirit gives different people for serving others (1 Corinthians 12:4-7). Fruit is character the Spirit grows in everyone who follows Jesus. Paul says the gifts without love are worth nothing (1 Corinthians 13:2), and love comes first in the fruit.",
      },
      {
        q: "What if I don't see much fruit in myself yet?",
        a: "Fruit takes time. Jesus describes growth as \"first the blade, then the head, then the mature grain\" (Mark 4:28), and the farmer doesn't know how it happens. Jesus' answer for bearing fruit isn't to try harder but to stay connected to Him: \"Abide in Me\" (John 15:4-5). Others often notice fruit in us before we do.",
      },
    ],
  },

  // ── Essentials #20 · Gifts of the Spirit · charismata ────────────────
  "1:20": {
    pronunciation: "khar-IZ-mah-tah",
    meaning: "Grace gifts. Abilities the Spirit gives for serving others.",
    wordNote:
      "Charisma comes from charis, \"grace.\" Paul also uses it for salvation itself: \"the free gift of God is eternal life\" (Romans 6:23).",
    verses: [
      { ref: "1 Corinthians 12:4", note: "\"There are varieties of gifts, but the same Spirit.\"", usesWord: true },
      { ref: "Romans 12:6", note: "\"We have gifts that differ according to the grace given to us.\"", usesWord: true },
      { ref: "1 Peter 4:10", note: "Each one should use their gift to serve one another.", usesWord: true },
      { ref: "Ephesians 4:11-12", note: "Christ gave apostles, prophets, evangelists, pastors and teachers, to equip His people.", usesWord: false },
    ],
    story: [
      "The New Testament lists gifts in several places (Romans 12, 1 Corinthians 12, Ephesians 4, 1 Peter 4), and no two lists match. That suggests none of them was meant to be complete.",
      "The church in Corinth had lots of gifts and lots of pride about them. Paul's answer is to compare the church to a body, where every part is needed (1 Corinthians 12:12-27). Right in the middle of his teaching on gifts sits the famous chapter on love, 1 Corinthians 13.",
    ],
    questions: [
      {
        q: "Are gifts like healing, prophecy and tongues still for today?",
        a: "Christians agree the Spirit still gives gifts to every believer for building up others, and that love matters more than any gift (1 Corinthians 13). They differ on the more miraculous gifts. Some believe all the gifts continue today as they did in Acts. Others believe some of them were given mainly for the church's first years, while God still heals and works in answer to prayer. Many land somewhere in between. It's a good one to talk through with your group.",
      },
      {
        q: "How do I find out what my gifts are?",
        a: "The New Testament doesn't give a test. It describes people serving and others seeing God at work through them (1 Peter 4:10-11). Trying different ways of serving, and listening to what people who know you notice, is a good place to start.",
      },
      {
        q: "Does everyone have a gift?",
        a: "Yes. Paul says \"to each one is given\" the Spirit's work for the common good (1 Corinthians 12:7), and Peter writes, \"as each one has received a special gift\" (1 Peter 4:10). In Paul's picture of the body, the parts that seem weaker or less noticed are the ones the body can't do without (1 Corinthians 12:22).",
      },
    ],
  },

  // ── Essentials #21 · The Spirit's Indwelling · enoikēsis ─────────────
  "1:21": {
    pronunciation: "en-OY-kay-sis",
    meaning: "Dwelling within. God's Spirit living in His people.",
    wordNote:
      "Oikos is Greek for \"house.\" The Bible uses the verb, \"to dwell in,\" and the church later formed this noun from it.",
    verses: [
      { ref: "Romans 8:11", note: "The Spirit of Him who raised Jesus \"dwells in you.\" The related verb.", usesWord: false },
      { ref: "1 Corinthians 3:16", note: "\"You are a temple of God and… the Spirit of God dwells in you.\"", usesWord: false },
      { ref: "1 Corinthians 6:19", note: "\"Your body is a temple of the Holy Spirit who is in you.\"", usesWord: false },
      { ref: "Exodus 40:34", note: "God's glory fills the tabernacle, the tent where He lived among Israel.", usesWord: false },
    ],
    story: [
      "Israel's story is about where God lives. His glory filled the tabernacle, a portable tent, and later the temple in Jerusalem (Exodus 40:34; 1 Kings 8:10-11). Ezekiel saw that glory leave the temple before it was destroyed (Ezekiel 10:18).",
      "John says the Word \"dwelt among us\" (John 1:14). The verb means \"pitched His tent.\" Then Paul says the Spirit lives in believers. The place where God lives is now His people.",
    ],
    questions: [
      {
        q: "Is \"you are a temple\" about me, or about us?",
        a: "Both, in different places. In 1 Corinthians 3:16 the \"you\" is plural, the whole church together. In 1 Corinthians 6:19 Paul applies it to each person's body.",
      },
      {
        q: "David prayed, \"Do not take Your Holy Spirit from me.\" Can the Spirit leave?",
        a: "In the Old Testament, the Spirit often came on certain people for certain tasks, and Saul is one the Spirit left (1 Samuel 16:14). That's the fear behind David's prayer in Psalm 51:11. Jesus promised His followers something more: the Spirit would \"be with you forever\" (John 14:16).",
      },
      {
        q: "How do I know the Spirit lives in me?",
        a: "The New Testament describes the Spirit's quiet witness: \"The Spirit Himself testifies with our spirit that we are children of God\" (Romans 8:16). He moves people to call God \"Abba! Father!\" (Galatians 4:6), to confess that Jesus is Lord (1 Corinthians 12:3), and over time He grows His fruit in them (Galatians 5:22-23). It's often a settled trust more than a feeling.",
      },
    ],
  },

  // ── Essentials #23 · The Gospel · euangelion ─────────────────────────
  "1:23": {
    pronunciation: "yoo-ahn-GEL-ee-on",
    meaning: "Good news. The announcement of what God has done in Jesus.",
    wordNote:
      "In the Roman world the word was used for big public news, like a victory in battle. An inscription from 9 BC calls the emperor Augustus's birthday the beginning of \"good news\" for the world. The English word \"gospel\" comes from Old English for \"good news.\"",
    verses: [
      { ref: "Mark 1:1", note: "\"The beginning of the gospel of Jesus Christ, the Son of God.\"", usesWord: true },
      { ref: "Mark 1:14-15", note: "Jesus preaches \"the gospel of God… the kingdom of God is at hand.\"", usesWord: true },
      { ref: "Romans 1:16", note: "\"I am not ashamed of the gospel, for it is the power of God for salvation.\"", usesWord: true },
      { ref: "Isaiah 52:7", note: "\"How lovely… are the feet of him who brings good news.\"", usesWord: false },
    ],
    story: [
      "Isaiah pictures a runner coming over the mountains to Jerusalem with news that God reigns and His people are coming home (Isaiah 52:7). Paul quotes that verse about the people who carry the news of Jesus (Romans 10:15).",
      "When Mark opens his book with \"the gospel of Jesus Christ,\" readers in the Roman world would have heard a claim. The real good news wasn't about Caesar. Within about a century, Christians were calling the four books about Jesus \"Gospels.\"",
    ],
    questions: [
      {
        q: "Is the gospel just about how to get to heaven?",
        a: "It includes forgiveness and eternal life, but it's bigger. Jesus preached \"the gospel of the kingdom\" (Matthew 4:23), the news that God's rule had arrived in Him. Paul's short summary centers on what happened: Christ died, was buried, and was raised (1 Corinthians 15:3-4).",
      },
      {
        q: "Why are there four Gospels?",
        a: "Each one tells the same good news for different readers, with its own focus. Matthew often shows Jesus fulfilling Israel's Scriptures. Mark moves fast. Luke researched carefully for a man named Theophilus (Luke 1:1-4). John wrote so people would believe (John 20:31). Around AD 180, Irenaeus, a bishop in France, was already defending these four as the church's Gospels.",
      },
      {
        q: "Is the gospel only about Jesus' death and rising?",
        a: "Those are at the center (1 Corinthians 15:3-4), but the Gospels spend most of their pages on His life, teaching, and miracles. Mark begins \"the gospel\" with John the Baptist (Mark 1:1-4). When Peter preached to a Roman officer, he told of Jesus' whole ministry, \"doing good and healing,\" before His death and resurrection (Acts 10:36-43).",
      },
    ],
  },

  // ── Essentials #24 · Grace · charis ──────────────────────────────────
  "1:24": {
    pronunciation: "KHAR-iss",
    meaning: "Grace. God's free, undeserved kindness.",
    wordNote:
      "Charis was an everyday word for favor, kindness, a gift, and the thanks you give back. \"Eucharist,\" an old name for the Lord's Supper, comes from the same root and means \"thanksgiving.\"",
    verses: [
      { ref: "Ephesians 2:8-9", note: "\"By grace you have been saved through faith… it is the gift of God.\"", usesWord: true },
      { ref: "John 1:16", note: "\"Of His fullness we have all received, and grace upon grace.\"", usesWord: true },
      { ref: "2 Corinthians 12:9", note: "\"My grace is sufficient for you, for power is perfected in weakness.\"", usesWord: true },
      { ref: "Titus 2:11-12", note: "Grace has appeared, \"instructing us\" to live well.", usesWord: true },
    ],
    story: [
      "In the Greek and Roman world, gifts usually went to people who were worthy of them or could pay them back. Paul's surprise is who God gives to: \"while we were yet sinners, Christ died for us\" (Romans 5:8).",
      "In the early 400s, a British monk named Pelagius taught that people can choose to obey God fully by their own will. Augustine answered that we need God's grace from the very start, even to want God. Church councils in North Africa sided with Augustine in AD 418.",
    ],
    people: [
      { name: "Augustine", say: "AW-gus-teen", who: "A bishop of Hippo, in North Africa, around AD 400. His book Confessions tells how grace found him." },
      { name: "Pelagius", say: "peh-LAY-jee-us", who: "A monk from Britain who taught in Rome. He pushed hard for holy living but taught that people can obey God without grace changing them first." },
    ],
    questions: [
      {
        q: "If grace is free, does it matter how I live?",
        a: "Paul expected that question. His answer: \"May it never be!\" (Romans 6:1-2). Grace doesn't only forgive. It also trains people to live differently (Titus 2:11-12).",
      },
      {
        q: "What's the difference between grace and mercy?",
        a: "A common way to put it: mercy is not getting the punishment we deserve, and grace is getting the kindness we don't deserve. The Bible often puts them side by side. \"God, being rich in mercy, because of His great love… made us alive together with Christ (by grace you have been saved)\" (Ephesians 2:4-5).",
      },
      {
        q: "Is grace only for the beginning?",
        a: "No. Grace saves (Ephesians 2:8), but it also carries people the whole way. God told Paul in his weakness, \"My grace is sufficient for you\" (2 Corinthians 12:9). Peter's last words in his letters are \"grow in the grace and knowledge of our Lord\" (2 Peter 3:18). John says we receive \"grace upon grace\" (John 1:16), one gift after another.",
      },
    ],
  },

  // ── Essentials #25 · Faith · pistis ──────────────────────────────────
  "1:25": {
    pronunciation: "PISS-tiss",
    meaning: "Faith. Not just thinking something is true, but leaning your whole weight on it.",
    wordNote:
      "Pistis is the noun. The verb is pisteuō, \"to believe\" or \"to trust,\" the word in John 3:16. John often writes that people believe \"into\" Jesus, a way of saying more than agreeing that He exists. It means putting your trust in Him and holding on to Him. In Galatians 5:22, pistis is usually translated \"faithfulness.\"",
    verses: [
      { ref: "John 3:16", note: "\"Whoever believes in Him shall not perish.\" The verb form, pisteuō.", usesWord: false },
      { ref: "James 2:19", note: "\"The demons also believe, and shudder.\" Knowing who God is isn't the same as trusting Him.", usesWord: false },
      { ref: "Romans 4:3", note: "Paul quotes Genesis 15:6: \"Abraham believed God, and it was credited to him as righteousness.\"", usesWord: false },
      { ref: "Hebrews 11:1", note: "\"Faith is the assurance of things hoped for.\"", usesWord: true },
    ],
    story: [
      "Abraham is the Bible's model of faith. God promised him children as many as the stars when he had none, \"and he believed in the Lord\" (Genesis 15:5-6). He had nothing to hold on to but the promise, and he held on to it. Paul builds his teaching on faith on that one verse (Romans 4).",
      "Hebrews 11 walks through Israel's story person by person. By faith Noah built the ark, Abraham left home without knowing where he was going, and Moses led the people out of Egypt. In that chapter, faith keeps ending up doing something.",
    ],
    questions: [
      {
        q: "If even demons believe, what's different about faith?",
        a: "James makes the point sharply: the demons know exactly who God is, and they shudder (James 2:19). Knowing isn't the same as trusting. Faith in the Bible is grabbing hold of Jesus for rescue and help, the way someone drowning grabs a rope. Peter, sinking in the waves, didn't just believe Jesus was there. He cried, \"Lord, save me!\" and Jesus took hold of him (Matthew 14:30-31).",
      },
      {
        q: "Paul says we're made right by faith, but James says \"not by faith alone.\" Do they disagree?",
        a: "Christians agree on the heart of this: saving faith is real trust in Jesus, and real trust shows up in how a person lives. Both Paul and James point to Abraham (Romans 4:3; James 2:21-23). Christians differ on how to put it. Some say we're made right with God by faith alone, and good works are the fruit that follows. Others say faith and the life it produces work together in being made right with God. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "What if my faith feels small?",
        a: "Jesus said faith the size of a mustard seed is enough to move a mountain (Matthew 17:20). One father told Him, \"I do believe; help my unbelief,\" and Jesus helped him (Mark 9:24). Faith rests on who Jesus is, not on how strong it feels.",
      },
    ],
  },

  // ── Essentials #26 · Repentance · metanoia ───────────────────────────
  "1:26": {
    pronunciation: "meh-TAH-noy-ah",
    meaning: "Repentance. A change of mind that turns a whole life around.",
    wordNote:
      "Metanoia joins \"change\" and \"mind.\" Behind it stands the Hebrew prophets' word shuv, \"to turn\" or \"to return.\"",
    verses: [
      { ref: "Mark 1:15", note: "Jesus' first preaching in Mark: \"Repent and believe in the gospel.\"", usesWord: false },
      { ref: "Acts 20:21", note: "Paul preached \"repentance toward God and faith in our Lord Jesus Christ.\"", usesWord: true },
      { ref: "2 Corinthians 7:10", note: "\"The sorrow that is according to the will of God produces a repentance without regret.\"", usesWord: true },
      { ref: "Joel 2:13", note: "\"Rend your heart and not your garments, and return to the Lord.\"", usesWord: false },
    ],
    story: [
      "The Old Testament prophets kept calling Israel to turn back to God. John the Baptist picked that call up by the Jordan River (Matthew 3:1-2), and Jesus began His own preaching the same way (Mark 1:15).",
      "In 1517, Martin Luther posted 95 statements for debate in Wittenberg, Germany. The first one says that when Jesus said \"Repent,\" He meant the whole life of a believer to be one of repentance.",
    ],
    people: [
      { name: "Martin Luther", say: "LOO-ther", who: "A German monk and Bible teacher. His 95 Theses in 1517 started the debates that became the Reformation." },
    ],
    questions: [
      {
        q: "Is repentance just feeling bad?",
        a: "No. Paul separates sorrow that leads to change from sorrow that just weighs you down (2 Corinthians 7:10). Feeling bad can be part of it, but repentance is turning, toward God and away from what pulled you from Him.",
      },
      {
        q: "Is it once, or over and over?",
        a: "Both. There's a first turning to God (Acts 3:19). After that, Jesus taught His followers to keep asking for forgiveness (Matthew 6:12), and John writes to believers, \"If we confess our sins, He is faithful\" (1 John 1:9).",
      },
      {
        q: "Can I keep repenting of the same sin?",
        a: "Jesus told Peter to forgive a brother not seven times but \"seventy times seven\" (Matthew 18:21-22), and to forgive someone who comes back seven times in a day saying, \"I repent\" (Luke 17:4). If Jesus asks that of us, God's patience is not smaller. John writes to believers: \"If we confess our sins, He is faithful and righteous to forgive us\" (1 John 1:9). If a struggle keeps winning, it may help to bring someone you trust into it (James 5:16).",
      },
    ],
  },

  // ── Essentials #27 · Justification · dikaiōsis ───────────────────────
  "1:27": {
    pronunciation: "dee-KYE-oh-sis",
    meaning: "Being declared right with God: seen and treated as if you had never sinned.",
    wordNote:
      "It belongs to a family of courtroom words: dikaios, \"righteous,\" and dikaioō, \"to justify\" or \"to declare in the right.\" The noun itself appears only twice, in Romans 4:25 and 5:18.",
    verses: [
      { ref: "Romans 4:25", note: "He \"was raised because of our justification.\"", usesWord: true },
      { ref: "2 Corinthians 5:21", note: "He made Him who knew no sin to be sin on our behalf, \"so that we might become the righteousness of God in Him.\"", usesWord: false },
      { ref: "Romans 8:1", note: "\"There is now no condemnation for those who are in Christ Jesus.\"", usesWord: false },
      { ref: "Hebrews 4:16", note: "\"Let us draw near with confidence to the throne of grace.\"", usesWord: false },
    ],
    story: [
      "Jesus told a story about two men praying in the temple (Luke 18:9-14). One was a Pharisee who listed his good deeds. The other was a tax collector, a man people saw as a cheat working for Rome, who wouldn't even look up. All he could say was, \"God, be merciful to me, the sinner!\" Jesus said he was the one who went home justified.",
      "In Israel, only the high priest could enter the innermost room of the temple, once a year, and only after he had been washed and made clean (Leviticus 16). Hebrews says that in Jesus every believer can now come into God's presence \"with confidence\" (Hebrews 4:16; 10:19-22). Being justified isn't only a word spoken over someone. It means being welcomed in, invited close, and treated as clean, because of what Christ has done (2 Corinthians 5:21).",
      "Martin Luther struggled for years over how a person could be right with God. Reading Romans 1:17, \"the righteous man shall live by faith,\" changed everything for him. In 1999, the Catholic Church and the Lutheran World Federation signed a joint statement saying they now agree on much of what this teaching is about.",
    ],
    people: [
      { name: "Martin Luther", say: "LOO-ther", who: "A German monk and Bible teacher in the 1500s whose reading of Romans started the Reformation." },
    ],
    questions: [
      {
        q: "Does God declare us right, or make us right?",
        a: "Christians agree we're made right with God only because of Jesus, and that it's a gift of grace. They differ on how to describe it. Some believe God declares us right, counting Jesus' righteousness as ours, and then makes us holy over time. Others believe God's declaring and His making new happen together as one work. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Is it fair for God to declare guilty people right?",
        a: "Paul faces this directly. God didn't ignore sin. He dealt with it in Christ, so He could be \"just and the justifier of the one who has faith in Jesus\" (Romans 3:26). The verdict isn't pretending. It rests on what Jesus actually did.",
      },
      {
        q: "If I'm justified, why do I still feel guilty?",
        a: "Feelings don't always keep up with what's true. Paul writes, \"There is now no condemnation for those who are in Christ Jesus\" (Romans 8:1), and John adds, \"if our heart condemns us, God is greater than our heart\" (1 John 3:20). If guilt is heavy and won't lift, please talk with someone you trust, like a pastor or your group leader.",
      },
    ],
  },

  // ── Essentials #28 · Union with Christ · en Christō ──────────────────
  "1:28": {
    pronunciation: "en khree-STOH",
    meaning: "In Christ. Joined to Jesus, so that His life becomes ours.",
    wordNote:
      "En is the ordinary Greek word for \"in.\" Paul puts it with Christ, Him, or the Lord more often than almost any other phrase. One scholar in the 1890s counted 164 times.",
    verses: [
      { ref: "2 Corinthians 5:17", note: "\"If anyone is in Christ, he is a new creature.\"", usesWord: true },
      { ref: "Romans 6:4", note: "\"We have been buried with Him through baptism into death.\"", usesWord: false },
      { ref: "Ephesians 2:6", note: "God \"seated us with Him in the heavenly places in Christ Jesus.\"", usesWord: true },
      { ref: "John 15:4", note: "Jesus: \"Abide in Me, and I in you.\"", usesWord: false },
    ],
    story: [
      "Paul met Jesus on the road to Damascus. He was on his way to arrest Christians, and Jesus asked him, \"Why are you persecuting Me?\" (Acts 9:4). Jesus took what was done to His people as done to Himself. Paul spent the rest of his life writing about being \"in Christ.\"",
      "In Ephesians 1:3-14 alone, Paul says \"in Christ\" or \"in Him\" around ten times. John Calvin, a church leader in Geneva in the 1500s, wrote that as long as Christ stays outside of us, everything He did for us is useless to us.",
    ],
    people: [
      { name: "John Calvin", say: "KAL-vin", who: "A French pastor and Bible teacher who led the church in Geneva, Switzerland, in the 1500s." },
    ],
    questions: [
      {
        q: "If Christ lives in me, do I disappear?",
        a: "No. Paul says \"it is no longer I who live,\" and in the same breath, \"the life which I now live… I live by faith\" (Galatians 2:20). Paul is still Paul. His life now comes from Jesus.",
      },
      {
        q: "How does a person come to be \"in Christ\"?",
        a: "The New Testament connects it with the Spirit (Romans 8:9), with faith (Ephesians 3:17), and with baptism (Romans 6:3-4; Galatians 3:27).",
      },
      {
        q: "Is \"in Christ\" only Paul's idea?",
        a: "No. Jesus said, \"Abide in Me, and I in you\" (John 15:4), and prayed that His followers would be \"in Us,\" in Him and the Father (John 17:21). John writes, \"the one who keeps His commandments abides in Him, and He in him\" (1 John 3:24). Paul gives it the most words, but the idea runs through the New Testament.",
      },
    ],
  },

  // ── Essentials #29 · Adoption · huiothesia ───────────────────────────
  "1:29": {
    pronunciation: "hwee-oh-theh-SEE-ah",
    meaning: "Adoption. Being made a son or daughter, with a full place in the family.",
    wordNote:
      "Huiothesia joins \"son\" and \"to place\": placed as a son. Only Paul uses it, five times (Romans 8:15, 23; 9:4; Galatians 4:5; Ephesians 1:5).",
    verses: [
      { ref: "Romans 8:15", note: "\"A spirit of adoption as sons by which we cry out, 'Abba! Father!'\"", usesWord: true },
      { ref: "Galatians 4:5-7", note: "\"You are no longer a slave, but a son; and if a son, then an heir.\"", usesWord: true },
      { ref: "Ephesians 1:5", note: "God \"predestined us to adoption as sons through Jesus Christ.\"", usesWord: true },
      { ref: "Romans 8:23", note: "We wait eagerly for our adoption, \"the redemption of our body.\"", usesWord: true },
    ],
    story: [
      "In Rome, adoption was often about an heir. A man without a son could adopt one, sometimes a grown man, to carry his name and receive everything he owned. Julius Caesar adopted his great-nephew Octavian in his will, and Octavian went on to become the emperor Augustus.",
      "Paul's readers would have known that adoption changed a person's whole standing. The adopted son passed fully into his new father's family and took his name. Paul also says adoption has a part still to come, when our bodies are made new (Romans 8:23).",
    ],
    questions: [
      {
        q: "Why does Paul say \"sons\"? What about daughters?",
        a: "In Paul's world, sons were usually the ones who inherited, so \"sons\" was a way of saying \"full heirs.\" Paul includes everyone: \"There is neither male nor female; for you are all one in Christ Jesus\" (Galatians 3:28). He also quotes God's promise, \"you shall be sons and daughters to Me\" (2 Corinthians 6:18).",
      },
      {
        q: "If Jesus is the Son, how are we children too?",
        a: "Jesus is God's Son by nature, from all eternity. We become God's children by adoption, through being joined to Him (Galatians 4:4-5). That's why Jesus can call His followers His brothers (Hebrews 2:11).",
      },
      {
        q: "Does God love His adopted children less than Jesus?",
        a: "Jesus prayed that the world would know the Father \"loved them, even as You have loved Me\" (John 17:23). Adoption in Paul's picture isn't second place. It's a full place in the family, as heirs \"with Christ\" (Romans 8:17).",
      },
    ],
  },

  // ── Essentials #30 · The New Covenant · kainē diathēkē ───────────────
  "1:30": {
    pronunciation: "kye-NAY dee-ah-THAY-kay",
    meaning: "New covenant. A new, binding promise between God and His people.",
    wordNote:
      "Diathēkē means a covenant, a binding agreement. Latin translated it testamentum, which is why the two halves of the Bible are called the Old and New Testaments. \"New Testament\" really means \"new covenant.\"",
    verses: [
      { ref: "Jeremiah 31:31-33", note: "\"I will make a new covenant… I will put My law within them and on their heart I will write it.\"", usesWord: false },
      { ref: "1 Corinthians 11:25", note: "Paul passes on Jesus' words at the last supper: \"This cup is the new covenant in My blood.\"", usesWord: true },
      { ref: "2 Corinthians 3:6", note: "\"Servants of a new covenant, not of the letter but of the Spirit.\"", usesWord: true },
      { ref: "Hebrews 8:8-12", note: "Hebrews quotes Jeremiah's promise in full.", usesWord: true },
    ],
    story: [
      "In the ancient world, covenants were often sealed with blood. When God made His covenant with Israel at Mount Sinai, Moses sprinkled blood on the people and said, \"Behold the blood of the covenant\" (Exodus 24:8). Jesus' words over the cup echo that moment (Mark 14:24).",
      "Jeremiah promised the new covenant around the time Babylon destroyed Jerusalem. The old covenant had been written on stone, and the people had broken it again and again. God promised a covenant written on the heart, and He promised to remember their sins no more (Jeremiah 31:34).",
    ],
    questions: [
      {
        q: "If there's a new covenant, does the Old Testament still matter?",
        a: "Yes. Jesus said He came to fulfill the Law and the Prophets, not to abolish them (Matthew 5:17). The new covenant was promised in the Old Testament itself, and the first Christians' Bible was the Old Testament (2 Timothy 3:15-16).",
      },
      {
        q: "What is a covenant?",
        a: "A covenant is a binding commitment between two parties, often sealed with a sign or an oath. God made covenants with Noah (the rainbow, Genesis 9:13), with Abraham (Genesis 15; 17), with Israel at Sinai (Exodus 24), and with David (2 Samuel 7). In each one, God binds Himself by promise to His people.",
      },
      {
        q: "Does the new covenant mean God is done with Israel?",
        a: "Paul answers this in Romans 9–11: \"God has not rejected His people\" (Romans 11:2), and \"the gifts and the calling of God are irrevocable\" (Romans 11:29). Christians agree God keeps His promises to Israel. They differ on how those promises are fulfilled. Some see them fulfilled in the church, Jews and non-Jews together in Christ. Others believe God still has a distinct future for the Jewish people. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #31 · Salvation · sōtēria ─────────────────────────────
  "1:31": {
    pronunciation: "soh-tay-REE-ah",
    meaning: "Salvation. Rescue, and being made whole.",
    wordNote:
      "The verb sōzō, \"to save,\" is also used for healing. When Jesus tells a woman, \"your faith has made you well\" (Mark 5:34), the verb is sōzō. The name Jesus comes from the Hebrew Yeshua, \"the Lord saves\" (Matthew 1:21).",
    verses: [
      { ref: "Luke 19:9", note: "To Zacchaeus: \"Today salvation has come to this house.\"", usesWord: true },
      { ref: "Ephesians 2:8", note: "\"By grace you have been saved.\" Already done.", usesWord: false },
      { ref: "1 Corinthians 1:18", note: "\"To us who are being saved it is the power of God.\" Still going.", usesWord: false },
      { ref: "Romans 13:11", note: "\"Now salvation is nearer to us than when we believed.\" Still coming.", usesWord: true },
    ],
    story: [
      "Zacchaeus was a chief tax collector in Jericho and rich from it. He was short, so he climbed a tree to see Jesus. Jesus stopped, called him by name, and invited Himself to his house. Before Jesus left, Zacchaeus stood and promised to give half of what he owned to the poor and to pay back four times anyone he had cheated (Luke 19:1-10).",
      "In the Old Testament, the great picture of salvation is the Exodus, when God brought Israel out of slavery in Egypt. At the Red Sea, Moses said, \"Stand by and see the salvation of the Lord\" (Exodus 14:13).",
    ],
    questions: [
      {
        q: "Can a person lose their salvation?",
        a: "Christians agree that salvation is God's gift, that He keeps His people (John 10:28), and that the Bible also warns people to keep going (Hebrews 3:14). They differ on how those fit together. Some believe that everyone truly saved will be kept to the end. Others believe a person can walk away from Christ for good. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Saved from what?",
        a: "The New Testament gives a big answer: from sin and its guilt (Matthew 1:21), from death (1 Corinthians 15:54-57), from God's judgment (Romans 5:9), and from \"the domain of darkness\" (Colossians 1:13). It also talks about being saved for something: \"created in Christ Jesus for good works\" (Ephesians 2:10).",
      },
      {
        q: "Is salvation only for the soul?",
        a: "No. Paul says believers wait for \"the redemption of our body\" (Romans 8:23), and that creation itself \"will be set free from its slavery to corruption\" (Romans 8:21). The Bible's picture of the end is a new heaven and a new earth, with God living among His people (Revelation 21:1-3).",
      },
    ],
  },

  // ── Essentials #32 · The Kingdom of God · basileia tou Theou ─────────
  "1:32": {
    pronunciation: "bah-sih-LAY-ah too theh-OO",
    meaning: "The kingdom of God. God's rule, where what He wants is done.",
    wordNote:
      "Basileia means kingship or reign more than a territory. Matthew usually writes \"kingdom of heaven,\" likely a respectful Jewish way to avoid saying \"God\" too often. Matthew 19:23-24 uses both phrases for the same thing.",
    verses: [
      { ref: "Mark 1:15", note: "\"The time is fulfilled, and the kingdom of God is at hand.\"", usesWord: true },
      { ref: "Matthew 6:10", note: "\"Your kingdom come. Your will be done, on earth as it is in heaven.\"", usesWord: true },
      { ref: "Matthew 12:28", note: "\"If I cast out demons by the Spirit of God, then the kingdom of God has come upon you.\"", usesWord: true },
      { ref: "Daniel 7:14", note: "The \"Son of Man\" is given a kingdom that will never be destroyed.", usesWord: false },
    ],
    story: [
      "In Jesus' day, many Jews hoped God would send a king to throw Rome out and set Israel free. When Jesus announced the kingdom, people heard that hope. He did bring God's rule, but not the way they expected. He healed, forgave, ate with outsiders, and went to a cross.",
      "Jesus told many of His stories, called parables, about the kingdom. It's like a tiny mustard seed that grows into a large plant (Mark 4:30-32), or yeast worked through a whole batch of dough (Matthew 13:33). It starts small and hidden and keeps growing.",
    ],
    questions: [
      {
        q: "Is the kingdom here now, or still coming?",
        a: "Both. Jesus said it had already come in His work (Matthew 12:28), and He taught His followers to pray for it to come (Matthew 6:10). It has begun, and it will be complete when He returns.",
      },
      {
        q: "Does \"the kingdom of God is within you\" mean it's only inside us?",
        a: "Bibles translate Luke 17:21 two ways: \"within you\" and \"in your midst.\" Jesus was speaking to Pharisees who opposed Him, so many read it as \"among you,\" standing right in front of them in Jesus Himself.",
      },
      {
        q: "Is the kingdom the same as the church?",
        a: "Christians agree the two are closely connected. The church is the people who have welcomed the King and live under His rule (Colossians 1:13). But Jesus' parables picture the kingdom as bigger than any gathering, growing quietly through the whole world (Matthew 13:31-33). Many Christians describe the church as a sign and a foretaste of the kingdom rather than the whole of it.",
      },
    ],
  },

  // ── Essentials #33 · Inspiration of Scripture · theopneustos ─────────
  "1:33": {
    pronunciation: "theh-OP-nyoo-stoss",
    meaning: "God-breathed. Scripture comes from God.",
    wordNote:
      "Theopneustos joins \"God\" and \"breathed.\" It appears only once in the Bible, and no clear use of it before Paul is known.",
    verses: [
      { ref: "2 Timothy 3:16", note: "\"All Scripture is inspired by God.\"", usesWord: true },
      { ref: "2 Peter 1:21", note: "People \"moved by the Holy Spirit spoke from God.\"", usesWord: false },
      { ref: "Luke 1:1-4", note: "Luke says he carefully looked into everything before he wrote.", usesWord: false },
      { ref: "Genesis 2:7", note: "God breathes into Adam the breath of life.", usesWord: false },
    ],
    story: [
      "When Paul wrote this to Timothy, \"Scripture\" mostly meant what we call the Old Testament, the writings Timothy had known \"from childhood\" (2 Timothy 3:15). Peter already counts Paul's letters with \"the rest of the Scriptures\" (2 Peter 3:16).",
      "In 2 Peter 1:21, the word for \"moved\" is the one used for a ship carried along by the wind (Acts 27:15). In AD 367, Athanasius, bishop of Alexandria, wrote a letter listing the 27 books of our New Testament, the earliest known list that matches it exactly.",
    ],
    questions: [
      {
        q: "Did God dictate the Bible word for word?",
        a: "Christians generally say no. The writers' own voices come through. Luke did research (Luke 1:1-4), and Paul writes with his own feelings and memory (1 Corinthians 1:14-16). Christians believe God was at work through real people, so the words are both theirs and His.",
      },
      {
        q: "Does \"inspired\" mean the Bible has no errors?",
        a: "Christians agree the Bible is God's trustworthy Word. They differ on how to describe that. Some believe it's without error in everything it states, including history and science. Others believe it's fully reliable in everything it teaches about God and salvation, while using the ways of speaking common in its time. Both views are held by people who love and trust the Bible. It's a good one to talk through with your group.",
      },
      {
        q: "Who decided which books are in the Bible?",
        a: "The first Christians received the Old Testament from Israel. The New Testament books were used and trusted in the churches long before any list was made. Athanasius's list in AD 367 and councils in North Africa in AD 393 and 397 recognized the books churches already relied on. Some churches also include a few more Old Testament books, written in the centuries just before Jesus.",
      },
    ],
  },

  // ── Essentials #34 · Authority of Scripture · exousia ────────────────
  "1:34": {
    pronunciation: "ex-oo-SEE-ah",
    meaning: "Authority. The right to speak and be obeyed.",
    wordNote:
      "Exousia means authority, the right and power to act. The Gospels use it most for Jesus. He teaches \"as one having authority\" (Matthew 7:29), and after rising He says, \"All authority has been given to Me\" (Matthew 28:18).",
    verses: [
      { ref: "Matthew 28:18", note: "\"All authority has been given to Me in heaven and on earth.\"", usesWord: true },
      { ref: "Matthew 4:4", note: "Tempted in the wilderness, Jesus answers, \"It is written.\"", usesWord: false },
      { ref: "John 10:35", note: "\"The Scripture cannot be broken.\"", usesWord: false },
      { ref: "Acts 17:11", note: "The Bereans checked \"the Scriptures daily to see whether these things were so.\"", usesWord: false },
    ],
    story: [
      "Each time the devil tempted Jesus in the wilderness, Jesus answered by quoting Scripture, all three times from Deuteronomy (Matthew 4:1-11). He treated it as settling the matter.",
      "In Berea, people listened eagerly to Paul and then checked what he said against the Scriptures themselves (Acts 17:11). Luke counts that in their favor, even though the preacher was an apostle.",
    ],
    questions: [
      {
        q: "How does the Bible relate to church tradition?",
        a: "Christians agree the Bible has a unique authority and that the church has always read it together. They differ on how the two relate. Some believe Scripture alone is the final authority, with tradition as a helpful guide under it. Others believe Scripture and the church's teaching together carry God's authority. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "What about parts of the Bible that are hard to understand?",
        a: "Even Peter said some things in Paul's letters are \"hard to understand\" (2 Peter 3:16). When an Ethiopian official was reading Isaiah, he asked Philip, \"How could I, unless someone guides me?\" (Acts 8:31). The Bible was meant to be read together, with others who know it, and with patience.",
      },
      {
        q: "Does every command in the Bible apply today?",
        a: "Christians agree that Jesus is the key to reading the Old Testament's laws. Mark notes that Jesus' teaching made all foods clean (Mark 7:19), and the first church leaders decided non-Jewish believers didn't need to keep the law of Moses to belong (Acts 15:19-20). Christians differ on how to sort the rest, but they read every command in the light of Jesus. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #35 · Christ in Scripture · Logos ─────────────────────
  "1:35": {
    pronunciation: "LOG-oss",
    meaning: "Word. Jesus is God speaking Himself to the world.",
    wordNote:
      "Logos means word, message, or reason. Some Greek thinkers used it for the reason that holds the universe together. John's opening also echoes Genesis 1, where God creates by speaking.",
    verses: [
      { ref: "John 1:1", note: "\"In the beginning was the Word, and the Word was with God, and the Word was God.\"", usesWord: true },
      { ref: "John 5:39", note: "\"It is these that testify about Me.\"", usesWord: false },
      { ref: "Luke 24:27", note: "\"Beginning with Moses and with all the prophets, He explained… the things concerning Himself.\"", usesWord: false },
      { ref: "Hebrews 1:1-2", note: "God spoke through the prophets, and \"in these last days has spoken to us in His Son.\"", usesWord: false },
    ],
    story: [
      "On the afternoon Jesus rose, two of His followers were walking to a village called Emmaus, sad and confused. Jesus joined them, though they didn't recognize Him, and walked them through the Scriptures about Himself. Later they said, \"Were not our hearts burning within us?\" (Luke 24:13-32).",
      "John opens his Gospel the way Genesis opens: \"In the beginning.\" In Genesis, God speaks and creation happens. John says that Word has a name, and He became flesh (John 1:14).",
    ],
    questions: [
      {
        q: "Is Jesus really on every page of the Old Testament?",
        a: "Sometimes the New Testament makes the connection itself, as with Isaiah 53 (Acts 8:32-35). Other times it's a pattern the whole story builds toward, like a promised King from David's family. Jesus said the Scriptures testify about Him (John 5:39). Christians differ on how directly to find Him in each passage, but they agree the whole story leads to Him.",
      },
      {
        q: "Does the Old Testament mean anything on its own?",
        a: "Yes. It spoke to real people in their own time, and its stories, laws, and songs meant something to them. Paul says these things \"were written for our instruction\" too (Romans 15:4; 1 Corinthians 10:11). Christians read it both ways: for what it meant then, and for where the whole story leads.",
      },
      {
        q: "Where does the Old Testament point to Jesus most clearly?",
        a: "Jesus named all three parts of the Hebrew Bible: \"the Law of Moses and the Prophets and the Psalms\" (Luke 24:44). The New Testament quotes some passages again and again: Isaiah 53 on the suffering servant (Acts 8:32-35), Psalm 22, which Jesus prayed on the cross (Matthew 27:46), and Psalm 110 on the King at God's right hand (Acts 2:34-35).",
      },
    ],
  },

  // ── Essentials #37 · The Body of Christ · sōma Christou ──────────────
  "1:37": {
    pronunciation: "SOH-mah khree-STOO",
    meaning: "The body of Christ. The church, joined together with Jesus as its head.",
    wordNote:
      "Sōma is the ordinary word for a body. Roman writers sometimes compared a city or nation to a body whose parts need each other. Paul takes that picture for the church, and in Colossians and Ephesians he calls Christ its head.",
    verses: [
      { ref: "1 Corinthians 12:27", note: "\"You are Christ's body, and individually members of it.\"", usesWord: true },
      { ref: "Romans 12:4-5", note: "\"We, who are many, are one body in Christ.\"", usesWord: true },
      { ref: "Colossians 1:18", note: "\"He is also head of the body, the church.\"", usesWord: true },
      { ref: "Acts 9:4", note: "Jesus to Saul: \"Why are you persecuting Me?\"", usesWord: false },
    ],
    story: [
      "When Paul still went by Saul, he was hunting down Christians. Jesus stopped him on the road to Damascus and didn't ask why he was persecuting the church. He asked, \"Why are you persecuting Me?\" (Acts 9:4).",
      "In Corinth, believers were ranking each other by their gifts. Paul's picture pushes back: a foot can't quit the body for not being a hand, and the eye can't tell the hand, \"I have no need of you\" (1 Corinthians 12:15-21). The parts that seem weaker, he says, are necessary (12:22).",
    ],
    questions: [
      {
        q: "Can I follow Jesus without a church?",
        a: "The New Testament pictures following Jesus as belonging to His people. A body part on its own doesn't stay alive long. Hebrews urges believers not to give up meeting together (Hebrews 10:24-25). Church can look many ways, from a big gathering to a few people around a table, but the New Testament pictures following Jesus with others, not alone.",
      },
      {
        q: "If we're one body, why are there so many churches?",
        a: "Jesus prayed that His followers \"may all be one\" (John 17:21), and the divisions among Christians are real and painful. Still, Paul says there is \"one body and one Spirit… one Lord, one faith, one baptism\" (Ephesians 4:4-5). Christians across many churches share that one Lord and one faith, even while they disagree on other things.",
      },
      {
        q: "What does it mean that Christ is the head?",
        a: "The head leads the body, and the body lives from it. Paul says the whole body grows \"from Him,\" held together as each part does its work (Ephesians 4:15-16). The church doesn't run on its own. It depends on Jesus for its life and its direction (Colossians 1:18).",
      },
    ],
  },

  // ── Essentials #38 · Baptism · baptisma ──────────────────────────────
  "1:38": {
    pronunciation: "BAP-tiz-mah",
    meaning: "Baptism. Being washed in water and joined to Jesus' death and new life.",
    wordNote:
      "The verb baptizō means to dip, plunge, or wash. Mark 7:4 uses a related word for washing cups and pots.",
    verses: [
      { ref: "Matthew 28:19", note: "\"Baptizing them in the name of the Father and the Son and the Holy Spirit.\"", usesWord: false },
      { ref: "Romans 6:4", note: "\"Buried with Him through baptism into death… so we too might walk in newness of life.\"", usesWord: true },
      { ref: "Acts 2:38", note: "\"Repent, and each of you be baptized in the name of Jesus Christ.\"", usesWord: false },
      { ref: "Galatians 3:27", note: "\"All of you who were baptized into Christ have clothed yourselves with Christ.\"", usesWord: false },
    ],
    story: [
      "John the Baptist baptized people in the Jordan River as a sign of turning back to God. Jesus came to be baptized too, and as He came up out of the water, the Spirit came down like a dove and the Father said, \"This is My beloved Son\" (Matthew 3:13-17).",
      "One of the oldest Christian writings outside the Bible, the Didache, from around AD 100, gives instructions for baptism. It prefers running water, and if there isn't enough, it says to pour water on the head three times, in the name of the Father, Son, and Holy Spirit.",
    ],
    questions: [
      {
        q: "Should babies be baptized, or only people old enough to believe?",
        a: "Christians agree baptism matters, that Jesus commanded it, and that it's tied to faith and belonging to Him. They differ on who should receive it. Some baptize the children of believers, as God's promise is \"for you and your children\" (Acts 2:39) and whole households were baptized (Acts 16:33). Others baptize only those who can confess faith for themselves, as in most of the stories in Acts. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Does it matter if you're dunked or sprinkled?",
        a: "Many churches baptize by going all the way under, which fits the picture of burial and rising (Romans 6:4). Others pour or sprinkle. The Didache already allowed pouring around AD 100. Christians agree the water and the name of the Father, Son, and Spirit are what matter most.",
      },
      {
        q: "Does baptism save?",
        a: "Peter writes that \"baptism now saves you,\" and then explains: \"not the removal of dirt from the flesh, but an appeal to God for a good conscience, through the resurrection of Jesus Christ\" (1 Peter 3:21). Christians agree baptism is closely tied to being joined to Christ. They differ on how, the same question raised on the Regeneration card. Some believe God gives new life through baptism. Others see it as the outward sign of what the Spirit has done. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #39 · The Lord's Supper · koinōnia ────────────────────
  "1:39": {
    pronunciation: "koy-noh-NEE-ah",
    meaning: "Sharing. Taking part together in Christ and in each other.",
    wordNote:
      "Koinōnia means sharing, partnership, or fellowship. Acts 2:42 uses it for the first believers' life together, and Paul uses it for the cup and the bread (1 Corinthians 10:16).",
    verses: [
      { ref: "1 Corinthians 10:16", note: "\"Is not the cup of blessing… a sharing in the blood of Christ?\"", usesWord: true },
      { ref: "1 Corinthians 11:23-26", note: "Paul passes on Jesus' words: \"Do this in remembrance of Me.\"", usesWord: false },
      { ref: "Acts 2:42", note: "They devoted themselves \"to fellowship, to the breaking of bread and to prayer.\"", usesWord: true },
      { ref: "Luke 22:15", note: "\"I have earnestly desired to eat this Passover with you before I suffer.\"", usesWord: false },
    ],
    story: [
      "Jesus gave this meal to His followers at a Passover supper, the yearly meal remembering how God rescued Israel from Egypt. He took the bread and the cup of that old meal and gave them a new meaning: His body and His blood, given for them (Luke 22:19-20).",
      "The early church ate it as part of a real meal. In Corinth that went wrong. The richer believers ate and drank first, and the poor went home hungry. Paul said that wasn't the Lord's Supper at all (1 Corinthians 11:20-22). The table was meant to make one family.",
    ],
    questions: [
      {
        q: "Is Jesus really present in the bread and cup?",
        a: "Christians agree that Jesus meets His people at this table and that it's far more than an empty ritual (1 Corinthians 10:16). They differ on how He is present. Some believe the bread and wine truly become, or truly carry, His body and blood. Others believe He is present by His Spirit as His people eat in faith. Others see it mainly as a meal of remembrance and thanks. Each view has a long history. It's a good one to talk through with your group.",
      },
      {
        q: "Why does it have so many names?",
        a: "The Bible calls it \"the Lord's Supper\" (1 Corinthians 11:20) and \"the breaking of bread\" (Acts 2:42). \"Communion\" comes from the Latin for koinōnia, sharing. \"Eucharist\" comes from the Greek for \"giving thanks,\" because Jesus gave thanks before He broke the bread (Luke 22:19).",
      },
      {
        q: "Who can take it?",
        a: "Paul tells believers to examine themselves before they eat and drink (1 Corinthians 11:28), because the meal belongs to the Lord. Churches practice this in different ways. Some welcome all who trust in Jesus. Others ask that people be baptized, or belong to that church, first. Christians agree it's a meal for those who belong to Christ, taken seriously and with joy.",
      },
    ],
  },

  // ── Essentials #41 · Love · agapē ────────────────────────────────────
  "1:41": {
    pronunciation: "ah-GAH-pay",
    meaning: "Love. Self-giving love that seeks the other person's good.",
    wordNote:
      "Greek had several words for love, including philia (friendship) and erōs (desire). The noun agapē was rare in everyday Greek until the Greek Old Testament and then the New Testament put it at the center.",
    verses: [
      { ref: "John 13:34-35", note: "\"By this all men will know that you are My disciples, if you have love for one another.\"", usesWord: true },
      { ref: "1 John 4:8", note: "\"God is love.\"", usesWord: true },
      { ref: "1 Corinthians 13:4-7", note: "\"Love is patient, love is kind.\"", usesWord: true },
      { ref: "Matthew 5:44", note: "\"Love your enemies and pray for those who persecute you.\"", usesWord: false },
    ],
    story: [
      "Jesus gave the \"new commandment\" at His last supper, right after washing His disciples' feet, a job usually left to the lowest servant (John 13:1-15, 34). He showed them what He meant before He said it.",
      "Outsiders noticed. Around AD 200, Tertullian, a Christian writer in North Africa, reported people saying of Christians, \"See how they love one another.\" When plague hit Alexandria around AD 260, its bishop wrote that Christians stayed to nurse the sick, even when others fled.",
      "A century later, the emperor Julian, who wanted to bring back the old gods, complained that Christians cared not only for their own poor but for everyone else's too.",
    ],
    people: [
      { name: "Tertullian", say: "ter-TULL-ee-un", who: "A Christian writer from Carthage, in North Africa, around AD 200. He wrote to defend Christians to Roman officials." },
    ],
    questions: [
      {
        q: "Does it matter that Jesus and Peter used different words for love?",
        a: "In John 21:15-17, Jesus asks Peter twice if he loves Him using agapaō, and the third time using phileō. Peter answers with phileō each time. Some see a deep difference there. Others note John often switches between similar words just for variety, and the two verbs overlap a lot. Either way, Jesus asks three times, matching Peter's three denials, and gives him work to do each time.",
      },
      {
        q: "How can anyone love their enemies?",
        a: "Jesus doesn't ask for warm feelings first. He says to pray for them and do them good (Luke 6:27-28). His reason is God's own way: the Father causes the sun to rise on the evil and the good (Matthew 5:45). The New Testament treats this love as something the Spirit grows (Galatians 5:22).",
      },
      {
        q: "Does love mean I have to let someone keep hurting me?",
        a: "No. Love seeks the other person's good, and letting someone keep harming you isn't good for them or for you. Paul says love \"does not rejoice in unrighteousness\" (1 Corinthians 13:6). Forgiving and staying safe can go together. If you're being hurt, please tell someone you trust today, like a pastor, your group leader, or a counselor.",
      },
    ],
  },

  // ── Essentials #42 · Prayer · proseuchē ──────────────────────────────
  "1:42": {
    pronunciation: "pross-yoo-KHAY",
    meaning: "Prayer. Talking with God.",
    wordNote:
      "Proseuchē is the New Testament's most common word for prayer. It could also mean a place of prayer. In Philippi, Paul found Jews and non-Jews who worshiped Israel's God gathering at a spot by the river where prayer was usually held (Acts 16:13).",
    verses: [
      { ref: "Philippians 4:6", note: "\"In everything by prayer and supplication with thanksgiving let your requests be made known to God.\"", usesWord: true },
      { ref: "Matthew 6:9-13", note: "Jesus teaches \"Our Father,\" the Lord's Prayer.", usesWord: false },
      { ref: "Luke 5:16", note: "Jesus \"would often slip away to the wilderness and pray.\"", usesWord: false },
      { ref: "Acts 2:42", note: "The first believers devoted themselves \"to the breaking of bread and to prayer.\"", usesWord: true },
    ],
    story: [
      "Faithful Jews prayed at set times each day. Daniel prayed three times a day facing Jerusalem, even when it was against the law (Daniel 6:10). Peter and John were on their way to the temple \"at the ninth hour, the hour of prayer\" when they healed a man who couldn't walk (Acts 3:1).",
      "Jesus' disciples watched Him pray and then asked, \"Lord, teach us to pray\" (Luke 11:1). His answer was the Lord's Prayer. The Didache, written around AD 100, tells believers to pray it three times a day.",
    ],
    questions: [
      {
        q: "Why pray if God already knows what I need?",
        a: "Jesus says the Father knows what you need before you ask, and then tells His followers to pray anyway (Matthew 6:8-9). Prayer isn't giving God information. It's talking with Him, the way a child talks with a parent who already knows. James says, \"You do not have because you do not ask\" (James 4:2).",
      },
      {
        q: "What about prayers that don't get answered?",
        a: "The Bible is honest about this. Paul asked three times for his \"thorn in the flesh\" to be taken away, and God answered, \"My grace is sufficient for you\" (2 Corinthians 12:7-9). Jesus prayed in Gethsemane for the cup to pass from Him, \"yet not as I will, but as You will\" (Matthew 26:39). Sometimes the answer is no, or not yet, and it can hurt. That's a good thing to share with people who will pray with you.",
      },
      {
        q: "What does \"pray without ceasing\" mean?",
        a: "Paul doesn't mean saying words every minute (1 Thessalonians 5:17). He means a life that stays turned toward God: talking with Him through the day, in short prayers as well as long ones. Paul himself mentions praying \"night and day\" for the churches (1 Thessalonians 3:10).",
      },
    ],
  },

  // ── Essentials #43 · Perseverance · hypomonē ─────────────────────────
  "1:43": {
    pronunciation: "hoo-po-moh-NAY",
    meaning: "Endurance. Holding on and not giving up.",
    wordNote:
      "Hypomonē joins \"under\" and \"to remain.\" It means holding up and holding on under pressure.",
    verses: [
      { ref: "Hebrews 10:36", note: "\"You have need of endurance, so that… you may receive what was promised.\"", usesWord: true },
      { ref: "Hebrews 12:1-2", note: "\"Let us run with endurance the race that is set before us, fixing our eyes on Jesus.\"", usesWord: true },
      { ref: "James 5:11", note: "\"You have heard of the endurance of Job.\"", usesWord: true },
      { ref: "Philippians 1:6", note: "\"He who began a good work in you will perfect it.\"", usesWord: false },
    ],
    story: [
      "Hebrews was written to believers who had already paid a price. They had stood by those who were mistreated and \"accepted joyfully the seizure of your property\" (Hebrews 10:32-34). Now some were tempted to drift away. The letter's whole message is: keep going.",
      "Around AD 155, Polycarp, the old bishop of Smyrna, was arrested and told to curse Christ to save his life. He answered, \"Eighty-six years I have served Him, and He has done me no wrong. How can I blaspheme my King who saved me?\" He was put to death.",
    ],
    people: [
      { name: "Polycarp", say: "POL-ee-karp", who: "A bishop of Smyrna, in what is now Turkey. Early writers say he learned from the apostle John." },
    ],
    questions: [
      {
        q: "Will every true believer keep going to the end?",
        a: "This is the same question raised on the Salvation card. Christians agree God holds on to His people (Philippians 1:6) and that the Bible calls them to hold on (Hebrews 10:36). Some believe that everyone truly born again will be kept to the end. Others believe a person can finally walk away. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "What if I've already drifted?",
        a: "The Bible is full of people who came back. Peter denied Jesus three times, and Jesus met him on the shore and restored him (John 21:15-19). In Jesus' story of the lost son, the father runs to meet him while he's \"still a long way off\" (Luke 15:20). If you've drifted, reaching out to someone you trust is a good first step.",
      },
      {
        q: "Is endurance just gritting your teeth?",
        a: "Not in the Bible. Paul says suffering produces endurance, endurance produces character, and character produces hope (Romans 5:3-4). Endurance has a direction. Hebrews says Jesus endured the cross \"for the joy set before Him\" (Hebrews 12:2).",
      },
    ],
  },

  // ── Essentials #44 · Suffering · pathēma ─────────────────────────────
  "1:44": {
    pronunciation: "PAH-thay-mah",
    meaning: "Suffering. What a person goes through and endures.",
    wordNote:
      "Pathēma comes from paschō, \"to suffer,\" the same verb used for Jesus' suffering (Luke 24:26). The New Testament often speaks of \"the sufferings of Christ\" being shared by His people.",
    verses: [
      { ref: "Romans 8:18", note: "\"The sufferings of this present time are not worthy to be compared with the glory that is to be revealed.\"", usesWord: true },
      { ref: "2 Corinthians 1:5", note: "\"Just as the sufferings of Christ are ours in abundance, so also our comfort is abundant through Christ.\"", usesWord: true },
      { ref: "1 Peter 4:13", note: "\"To the degree that you share the sufferings of Christ, keep on rejoicing.\"", usesWord: true },
      { ref: "Psalm 34:18", note: "\"The Lord is near to the brokenhearted.\"", usesWord: false },
    ],
    story: [
      "Paul knew suffering firsthand. He lists being beaten with rods three times, stoned once, shipwrecked three times, and going hungry, cold, and without sleep (2 Corinthians 11:23-28). He wrote Philippians, a letter full of joy, while he was in chains (Philippians 1:13).",
      "The Bible gives whole books and songs to suffering. Job asks why for most of his book. About a third of the psalms are laments, honest cries of pain to God. Jesus prayed one from the cross: \"My God, My God, why have You forsaken Me?\" (Psalm 22:1; Matthew 27:46).",
    ],
    questions: [
      {
        q: "Is my suffering a punishment for something I did?",
        a: "Jesus' disciples asked this about a man born blind: who sinned, him or his parents? Jesus said neither (John 9:1-3). Sin can bring painful results, but the Bible refuses to say all suffering is someone's fault. Job's friends assumed it was, and God said they were wrong (Job 42:7).",
      },
      {
        q: "Is it okay to be angry or sad with God?",
        a: "The Bible makes room for it. Many psalms are complaints brought straight to God (Psalm 13:1: \"How long, O Lord? Will You forget me forever?\"). Jesus wept at His friend's grave (John 11:35). Bringing pain to God honestly is a kind of faith. If you're carrying something heavy, please share it with someone you trust.",
      },
      {
        q: "Does \"consider it all joy\" mean pretending to be happy?",
        a: "No. James doesn't say the trial itself is joyful. He says to see what it's producing: endurance and a faith that's mature (James 1:2-4). Paul says he was \"sorrowful yet always rejoicing\" (2 Corinthians 6:10). Both can be true at once.",
      },
    ],
  },

  // ── Essentials #45 · Witness · martyria ──────────────────────────────
  "1:45": {
    pronunciation: "mar-too-REE-ah",
    meaning: "Witness. Telling what you have seen and know to be true.",
    wordNote:
      "Martyria and martys (\"a witness\") were courtroom words for testimony. Because so many early Christians died for their testimony, martys slowly came to mean someone who dies for their faith. That's where the English word \"martyr\" comes from.",
    verses: [
      { ref: "Acts 1:8", note: "\"You shall be My witnesses… even to the remotest part of the earth.\"", usesWord: false },
      { ref: "Acts 4:20", note: "\"We cannot stop speaking about what we have seen and heard.\"", usesWord: false },
      { ref: "1 John 1:1-3", note: "\"What we have seen and heard we proclaim to you also.\"", usesWord: false },
      { ref: "Revelation 12:11", note: "They overcame \"because of the blood of the Lamb and because of the word of their testimony.\"", usesWord: true },
    ],
    story: [
      "Acts 1:8 works like a map of the whole book. The good news starts in Jerusalem (Acts 1–7), spreads through Judea and Samaria (Acts 8), and then heads out to the wider world, until Paul is preaching in Rome (Acts 28).",
      "Stephen is the first follower of Jesus Acts records being killed for his witness (Acts 7:54-60). Paul, who stood by and approved, later called him \"Stephen Your witness\" (Acts 22:20). In the 100s, the account of Polycarp's death was already using martys in the new sense, someone who dies for Christ.",
    ],
    questions: [
      {
        q: "Do I have to be good at explaining things to be a witness?",
        a: "No. A witness tells what they've seen. The man Jesus healed of blindness couldn't answer the leaders' questions, but he could say, \"One thing I do know, that though I was blind, now I see\" (John 9:25). The Samaritan woman simply told her town about Jesus, and many believed \"because of the word of the woman\" (John 4:39).",
      },
      {
        q: "Is witness about words or about how I live?",
        a: "Both. Peter tells believers to be ready to explain the hope they have, \"with gentleness and reverence\" (1 Peter 3:15). He tells wives their husbands may be won \"without a word\" by how they live (1 Peter 3:1-2). Jesus said people would see good works and glorify the Father (Matthew 5:16).",
      },
      {
        q: "What if people reject what I say?",
        a: "It happened to Jesus and to every apostle. Jesus told His followers they would be hated because of Him (John 15:18-20). In Athens, some sneered at Paul, others wanted to hear more, and a few believed (Acts 17:32-34). A witness's job is to tell the truth. What people do with it is between them and God.",
      },
    ],
  },

  // ── Essentials #46 · The Second Coming · parousia ────────────────────
  "1:46": {
    pronunciation: "par-oo-SEE-ah",
    meaning: "Coming, or arrival. Jesus' return.",
    wordNote:
      "Parousia means presence or arrival. It was used for the official visit of a king or emperor to a city, when the people went out to meet him and bring him in.",
    verses: [
      { ref: "1 Thessalonians 4:15-17", note: "\"The Lord Himself will descend from heaven with a shout.\"", usesWord: true },
      { ref: "Acts 1:11", note: "\"This Jesus… will come in just the same way as you have watched Him go into heaven.\"", usesWord: false },
      { ref: "Matthew 24:36", note: "\"Of that day and hour no one knows.\"", usesWord: false },
      { ref: "Revelation 22:20", note: "\"Yes, I am coming quickly.\" \"Amen. Come, Lord Jesus.\"", usesWord: false },
    ],
    story: [
      "Paul ends 1 Corinthians with an Aramaic prayer left untranslated: \"Maranatha,\" most likely \"Our Lord, come!\" (1 Corinthians 16:22). Aramaic was the language of the first believers in Jerusalem, so it's likely one of the church's very earliest prayers. The Bible's last prayer is the same: \"Come, Lord Jesus\" (Revelation 22:20).",
      "The Thessalonians were grieving believers who had died before Jesus returned. Paul wrote to comfort them: the dead in Christ will rise first, and \"we will always be with the Lord\" (1 Thessalonians 4:13-18).",
    ],
    questions: [
      {
        q: "When will Jesus come back?",
        a: "Jesus said no one knows the day or hour (Matthew 24:36). People have tried to set dates many times, and every date has passed. One well-known prediction, for 1844, left thousands in what they called the Great Disappointment. Jesus' instruction was to be ready, not to calculate (Matthew 24:42-44).",
      },
      {
        q: "Why do Christians describe the end times so differently?",
        a: "Christians agree on the heart of it: Jesus will return bodily and visibly, raise the dead, judge the world, and make all things new. Most of that is in the creeds. They differ on details, like the order of events, whether believers will be taken up before a time of great trouble, and what the thousand years in Revelation 20 means. Faithful people hold each view. It's a good one to talk through with your group.",
      },
      {
        q: "Why is He taking so long?",
        a: "Peter heard people asking the same thing in his day. His answer: \"With the Lord one day is like a thousand years,\" and God is patient, \"not wishing for any to perish but for all to come to repentance\" (2 Peter 3:8-9).",
      },
    ],
  },

  // ── Essentials #47 · Resurrection of the Dead · anastasis nekrōn ─────
  "1:47": {
    pronunciation: "ah-NAH-stah-sis neh-KRONE",
    meaning: "Resurrection of the dead. The dead raised bodily at the end.",
    wordNote:
      "Nekrōn means \"of the dead\" or \"of dead people.\" Anastasis is the same word used for Jesus' own rising, so the Bible ties our resurrection to His.",
    verses: [
      { ref: "1 Corinthians 15:42-44", note: "\"It is sown a perishable body, it is raised an imperishable body.\"", usesWord: true },
      { ref: "John 5:28-29", note: "\"All who are in the tombs will hear His voice, and will come forth.\"", usesWord: false },
      { ref: "Daniel 12:2", note: "\"Many of those who sleep in the dust of the ground will awake.\"", usesWord: false },
      { ref: "Ezekiel 37:1-14", note: "God brings a valley of dry bones back to life.", usesWord: false },
    ],
    story: [
      "Not everyone in Jesus' day believed in resurrection. The Sadducees, a group of powerful temple leaders, denied it, while the Pharisees believed it. Paul once used that split to divide the council trying him (Acts 23:6-8). In Athens, when Paul mentioned \"the resurrection of the dead,\" some listeners laughed (Acts 17:32).",
      "Many Greeks hoped the soul would escape the body after death. The Christian hope was different: bodies raised and made new. Paul compares it to a seed. What's planted is a bare seed, and what comes up is a plant, connected to it but far more glorious (1 Corinthians 15:35-38).",
    ],
    questions: [
      {
        q: "Where are believers who have died right now?",
        a: "The New Testament says they are with Christ. Jesus told the man on the cross next to Him, \"Today you shall be with Me in Paradise\" (Luke 23:43), and Paul said that to depart is \"to be with Christ\" (Philippians 1:23). They're waiting for the resurrection of their bodies. Christians differ on the details of that in-between time, but they agree the dead in Christ are safe with Him.",
      },
      {
        q: "What if a body is burned or lost?",
        a: "The God who formed Adam from dust (Genesis 2:7) isn't limited by what happens to a body. Christians across traditions agree no one is beyond God's power to raise. Churches have different customs about burial and cremation, but the hope is the same.",
      },
      {
        q: "Will we recognize each other?",
        a: "The Bible points that way. The risen Jesus was recognized, though not always at first (Luke 24:31; John 20:16). Peter, James, and John knew Moses and Elijah on the mountain (Matthew 17:3-4). Paul comforts grieving believers with being together again (1 Thessalonians 4:17-18).",
      },
    ],
  },

  // ── Essentials #48 · Final Judgment · krisis ─────────────────────────
  "1:48": {
    pronunciation: "KREE-sis",
    meaning: "Judgment. The final verdict, when everything is set right.",
    wordNote:
      "Krisis comes from krinō, \"to separate\" or \"to decide.\" The English word \"crisis\" comes from it, a moment when things are decided.",
    verses: [
      { ref: "Hebrews 9:27", note: "\"It is appointed for men to die once and after this comes judgment.\"", usesWord: true },
      { ref: "John 5:22", note: "\"The Father… has given all judgment to the Son.\"", usesWord: true },
      { ref: "Matthew 25:31-46", note: "The Son of Man separates the nations, \"as the shepherd separates the sheep from the goats.\"", usesWord: false },
      { ref: "Genesis 18:25", note: "\"Shall not the Judge of all the earth deal justly?\"", usesWord: false },
    ],
    story: [
      "In Jesus' story of the sheep and the goats, the people on both sides are surprised. The King says, \"to the extent that you did it to one of these brothers of Mine, even the least of them, you did it to Me\" (Matthew 25:40). Feeding the hungry, welcoming strangers, and visiting prisoners mattered more than anyone thought.",
      "For people who had been wronged, judgment was good news. In Revelation, those killed for their faith cry out, \"How long, O Lord?\" (Revelation 6:10). The Bible's promise is that every wrong will be seen and set right by a Judge who is completely fair.",
    ],
    questions: [
      {
        q: "If we're saved by grace, why are we judged by what we did?",
        a: "Paul holds both. We're saved by grace (Ephesians 2:8), and \"we must all appear before the judgment seat of Christ\" (2 Corinthians 5:10). Paul describes believers' work being tested like materials in a fire, where some is lost and \"he himself will be saved\" (1 Corinthians 3:12-15). Grace saves, and how we lived still matters.",
      },
      {
        q: "What is hell, and does it last forever?",
        a: "Christians agree judgment is real, God is completely just, and Jesus warned about it seriously (Matthew 10:28). They differ on what final punishment is. Some believe it's conscious separation from God that never ends. Others believe those who reject God are finally destroyed and cease to exist. Both views come from careful reading of Scripture. It's a good one to talk through with your group.",
      },
      {
        q: "What about people who never heard about Jesus?",
        a: "Christians agree that God is fair and that no one will be treated unjustly (Genesis 18:25). Paul says people without the Scriptures still have God's law written on their hearts (Romans 2:14-16). Christians differ on how God will judge those who never heard. Some believe hearing the good news is needed to be saved, pointing to Romans 10:14. Others leave room for God to save some who never heard. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #49 · New Heaven and New Earth · ouranos kainos, gē kainē
  "1:49": {
    pronunciation: "oo-rah-NOSS kye-NOSS, GAY kye-NAY",
    meaning: "A new heaven and a new earth. All creation made new.",
    wordNote:
      "Kainos means new. It's the same word Paul uses for a \"new creature\" in Christ (2 Corinthians 5:17).",
    verses: [
      { ref: "Revelation 21:1-4", note: "\"Then I saw a new heaven and a new earth.\"", usesWord: true },
      { ref: "Isaiah 65:17", note: "\"For behold, I create new heavens and a new earth.\"", usesWord: false },
      { ref: "Romans 8:21", note: "Creation \"will be set free from its slavery to corruption.\"", usesWord: false },
      { ref: "2 Peter 3:13", note: "\"We are looking for new heavens and a new earth, in which righteousness dwells.\"", usesWord: true },
    ],
    story: [
      "John saw this vision while exiled on the island of Patmos \"because of the word of God\" (Revelation 1:9). The Bible's story ends where it began, but bigger. Genesis starts in a garden with the tree of life. Revelation ends in a garden city with the tree of life again, its leaves \"for the healing of the nations\" (Genesis 2:9; Revelation 22:2).",
      "The center of the vision isn't streets of gold. It's a voice saying, \"the tabernacle of God is among men, and He will dwell among them\" (Revelation 21:3). What God did in the tabernacle and the temple, He will do everywhere.",
    ],
    questions: [
      {
        q: "Will this earth be destroyed or renewed?",
        a: "Christians agree God will make everything new and that sin, death, and evil will be gone for good. They differ on how. Some read 2 Peter 3:10, about fire and the earth being laid bare (some Bibles say \"burned up\"), as describing an end and a fresh creation. Others read it as a fire that purifies, so this same world is renewed and set free (Romans 8:21). It's a good one to talk through with your group.",
      },
      {
        q: "Will we spend forever in heaven, floating on clouds?",
        a: "That picture isn't in the Bible. In Revelation, the holy city comes down out of heaven to a new earth, and God makes His home with people (Revelation 21:2-3). Isaiah pictures people building houses and planting vineyards (Isaiah 65:21). The hope is a real, physical world, finally the way God meant it.",
      },
      {
        q: "What will we do there?",
        a: "The Bible gives hints, not a schedule. God's servants \"will serve Him\" and \"will see His face\" (Revelation 22:3-4). They \"will reign forever\" (Revelation 22:5), which echoes God's first job for humanity, caring for and ruling the earth (Genesis 1:28). Jesus pictures a great feast with people from east and west (Matthew 8:11).",
      },
    ],
  },

  // ── Essentials #50 · Eternal Life · zōē aiōnios ──────────────────────
  "1:50": {
    pronunciation: "zoh-AY eye-OH-nee-oss",
    meaning: "Eternal life. The life of God's coming age, starting now.",
    wordNote:
      "Aiōnios comes from aiōn, \"age.\" Jews in Jesus' day spoke of this present age and the age to come. \"Eternal life\" means more than endless time. It's the life of the age to come.",
    verses: [
      { ref: "John 17:3", note: "\"This is eternal life, that they may know You, the only true God, and Jesus Christ.\"", usesWord: true },
      { ref: "John 5:24", note: "Whoever believes \"has eternal life… but has passed out of death into life.\"", usesWord: true },
      { ref: "Mark 10:17", note: "A rich man asks, \"What shall I do to inherit eternal life?\"", usesWord: true },
      { ref: "1 John 5:13", note: "\"I have written… so that you may know that you have eternal life.\"", usesWord: true },
    ],
    story: [
      "A rich man ran up to Jesus, knelt, and asked how to inherit eternal life. He said he had kept the commandments since he was young. Mark says Jesus looked at him and loved him, then told him to sell what he had and follow Him. The man went away sad (Mark 10:17-22).",
      "John's Gospel often talks about eternal life in the present tense. The one who believes \"has\" it now (John 3:36; 5:24). In John 17:3, Jesus defines it not by how long it lasts but by who it's with: knowing the Father and the Son.",
    ],
    questions: [
      {
        q: "Does eternal life start now, or after I die?",
        a: "Both. John says believers have it now (John 5:24), and it will be complete in the resurrection (John 6:40). Death interrupts the body, but it doesn't end this life. Jesus said, \"everyone who lives and believes in Me will never die\" (John 11:26).",
      },
      {
        q: "Can I know I have eternal life?",
        a: "John wrote his first letter for exactly that reason: \"so that you may know that you have eternal life\" (1 John 5:13). It rests on Jesus, not on how strong we feel. \"He who has the Son has the life\" (1 John 5:12).",
      },
      {
        q: "Won't forever get boring?",
        a: "The Bible pictures it as the opposite of boring: seeing God face to face (Revelation 22:4), serving Him (Revelation 22:3), a feast (Matthew 8:11), and a world without death or tears (Revelation 21:4). Eternal life is knowing God (John 17:3), and Christians have long said there's no end to knowing Him.",
      },
    ],
  },
};

export function getCreedGoDeeper(card: Pick<CreedCard, "id" | "deckId">): CreedGoDeeper | null {
  return ENTRIES[`${card.deckId ?? 1}:${card.id}`] ?? null;
}
