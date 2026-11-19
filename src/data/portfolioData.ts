export interface StudentInfo {
  name: string
  nickname: string
  studentId: string
  course: string
  yearAndSection: string
  subject: string
  academicYear: string
  instructor: string
  email: string
  github: string
  photo: string
  intro: string
  expectations: string
  learningExperience: string
}

export interface AnalysisItem {
  id: string
  indexNumber: string
  title: string
  subtitle?: string
  author: string
  tradition: string
  yearPublished: string
  lens: string
  lensColor: string
  summary: string
  paragraphs: string[]
  imageCover: string
  imageAlt: string
  imageCaption: string
  themes: string[]
  tags: string[]
  accentColor: string
}

export interface FavoriteMasterpiece {
  title: string
  author: string
  year: string
  genre: string
  lens: string
  tagline: string
  overview: string
  personalReasons: string
  keyThemes: { title: string; description: string }[]
  keyCharacters: { name: string; role: string; significance: string }[]
  coreLessons: string[]
  personalRealization: string
  favoriteQuote: string
  image: string
}

export interface LearningPillar {
  number: string
  title: string
  subtitle: string
  description: string
  keyTakeaways: string[]
  iconName: string
}

export interface ReflectionQuestion {
  id: string
  number: string
  question: string
  shortAnswer: string
  detailedReflection: string
  tags: string[]
}

export interface GreatBooksPortfolio {
  student: StudentInfo
  stats: { label: string; value: string; detail: string }[]
  analyses: AnalysisItem[]
  favorite: FavoriteMasterpiece
  learningPillars: LearningPillar[]
  reflections: ReflectionQuestion[]
}

export const portfolioData: GreatBooksPortfolio = {
  student: {
    name: "Roejon Kayne Paul P. Hernandez",
    nickname: "Roejon",
    studentId: "GB-2026-8891",
    course: "Bachelor of Science in Information Technology",
    yearAndSection: "4th Year — Section Code 1454",
    subject: "Great Books (LIT 101 / HUM 102)",
    academicYear: "Academic Year 2025–2026",
    instructor: "Prof. Humanities & Literary Studies Dept.",
    email: "roejon.hernandez@university.edu.ph",
    github: "https://github.com/roejon",
    photo: "/assets/ME.jpg",
    intro: "I am a digital-age learner, creative developer, and avid explorer of classical and modern literature. Navigating through the Great Books curriculum opened my eyes to how the foundational questions of antiquity—identity, justice, power, existential alienation, and truth—continue to shape contemporary ethics, digital systems, and the universal human condition.",
    expectations: "Entering the Great Books course, I initially expected an archaic, detached academic survey of old manuscripts. I anticipated struggling through dense syntax and disconnected mythologies that bore little relevance to modern digital life.",
    learningExperience: "My actual experience was profoundly transformative. Great Books challenged me to read critically rather than passively. Through rigorous literary lenses, I discovered that every ancient tragedy, Victorian satire, and dystopian nightmare serves as an urgent mirror to our modern consciousness, cultivating emotional resonance and critical analytical clarity."
  },
  stats: [
    { label: "MASTERPIECES ANALYZED", value: "07+", detail: "Ancient Near Eastern to Medieval French" },
    { label: "CRITICAL LENSES APPLIED", value: "07", detail: "Theological, Didactic, Cultural, Sociological, Psychoanalytic, Archetypal, Historical" },
    { label: "GUIDED REFLECTIONS", value: "05", detail: "Comprehensive Self-Examinations" },
    { label: "ORIGINAL SCHOLARSHIP", value: "100%", detail: "Analytical Rigor & Creative Synthesis" }
  ],
  analyses: [
    {
      id: "whirlwind",
      indexNumber: "#01",
      title: "Voice out of the Whirlwind",
      subtitle: "From The Book of Job",
      author: "Anonymous",
      tradition: "Ancient Near Eastern",
      yearPublished: "c. 6th–4th Century BCE",
      lens: "Theological & Existential",
      lensColor: "#FF3B00",
      summary: "Divine revelation from the tempest dismantles human notions of retributive justice.",
      paragraphs: [
        "The \"Voice out of the Whirlwind\" serves as the dramatic climax of the Book of Job, abruptly shifting the narrative from human debate to divine revelation. Through an overwhelming display of rhetorical questions about the cosmos, the text dismantles anthropocentric views of justice.",
        "Instead of directly answering Job’s questions about his suffering, the narrative emphasizes the incomprehensible scale of the universe. It suggests that human logic is insufficient to grasp the complexities of divine will, pushing the reader to accept faith and humility in the face of the unknown."
      ],
      imageCover: "/assets/analyses/voice.jpg",
      imageAlt: "Dramatic cosmic whirlwind symbolizing the Voice out of the Whirlwind in the Book of Job",
      imageCaption: "The Cosmos / Whirlwind — The Book of Job",
      themes: ["Divine Revelation", "Cosmic Scale", "Humility & Faith", "Limits of Human Justice"],
      tags: ["Theological", "Existential", "Book of Job", "Ancient Near Eastern"],
      accentColor: "#FF3B00"
    },
    {
      id: "panchatantra",
      indexNumber: "#02",
      title: "The Panchatantra",
      author: "Vishnu Sharma",
      tradition: "Classical Sanskrit",
      yearPublished: "c. 3rd Century BCE – 3rd Century CE",
      lens: "Didactic & Moral",
      lensColor: "#0A0A0A",
      summary: "Interwoven animal fables teaching practical statecraft, friendship, and survival.",
      paragraphs: [
        "Originally composed as a manual to teach practical wisdom to three ignorant princes, The Panchatantra uses interwoven animal fables to deliver its lessons. The text operates as a \"mirror for princes,\" reflecting the harsh realities of politics, friendship, and survival.",
        "By utilizing animals that embody specific human traits, Sharma strips away the complexities of human society to reveal raw behavioral truths. The analysis reveals that the text prioritizes niti (wise conduct and practical survival) over idealistic morality, demonstrating how intellect and strategy can overcome brute strength."
      ],
      imageCover: "/assets/analyses/the-panchatantra.jpg",
      imageAlt: "Traditional Indian animal fable motif illustrating The Panchatantra",
      imageCaption: "Traditional Indian Animal Motif — The Panchatantra",
      themes: ["Niti (Wise Conduct)", "Practical Statecraft", "Friendship & Survival", "Intellect Over Brute Strength"],
      tags: ["Didactic", "Moral", "Animal Fables", "Classical Sanskrit"],
      accentColor: "#0A0A0A"
    },
    {
      id: "ramayana",
      indexNumber: "#03",
      title: "The Ramayana",
      author: "Valmiki",
      tradition: "Ancient Indian Epic",
      yearPublished: "c. 5th–1st Century BCE",
      lens: "Cultural & Archetypal",
      lensColor: "#FF3B00",
      summary: "An enduring epic of Dharma, devotion, exile, and the cosmic struggle against chaos.",
      paragraphs: [
        "The Ramayana is foundational to the cultural and ethical fabric of South and Southeast Asia. Analyzing it through a cultural lens highlights the concept of Dharma—duty, righteousness, and moral order.",
        "Rama serves as the archetype of the ideal king and son, willing to accept exile to honor his father's word. Sita embodies the archetype of devotion and resilience. The conflict between Rama and Ravana transcends a simple battle, representing the eternal struggle between cosmic order (Dharma) and chaos (Adharma). The epic profoundly shaped regional values regarding loyalty, sacrifice, and leadership."
      ],
      imageCover: "/assets/analyses/ramayana.jpg",
      imageAlt: "Illustration of Rama with bow from Valmiki's The Ramayana",
      imageCaption: "Rama with Bow — The Ramayana",
      themes: ["Dharma vs Adharma", "Duty & Sacrifice", "Devotion & Resilience", "Ideal Leadership"],
      tags: ["Cultural", "Archetypal", "Ancient Indian Epic", "South Asian Heritage"],
      accentColor: "#FF3B00"
    },
    {
      id: "mahabharata",
      indexNumber: "#04",
      title: "The Mahabharata",
      author: "Vyasa",
      tradition: "Ancient Indian Epic",
      yearPublished: "c. 4th Century BCE – 4th Century CE",
      lens: "Sociological & Ethical",
      lensColor: "#0A0A0A",
      summary: "A vast dynastic tragedy probing caste, familial loyalty, and the moral cost of war.",
      paragraphs: [
        "Unlike the clear-cut morality of the Ramayana, the Mahabharata presents a universe steeped in moral ambiguity. Through a sociological lens, the epic explores the devastating consequences of dynastic conflict and the complexities of human relationships within a rigid caste system.",
        "The text intricately examines the conflict between personal desire and societal duty. The characters, particularly in the Bhagavad Gita segment, grapple with the ethics of war and familial loyalty. It underscores the tragic reality that in the pursuit of righteous victory, both the victors and the defeated suffer immense loss."
      ],
      imageCover: "/assets/analyses/the-mahabharata-5.jpg",
      imageAlt: "Kurukshetra war chariot scene from Vyasa's The Mahabharata",
      imageCaption: "Kurukshetra War Chariot — The Mahabharata",
      themes: ["Moral Ambiguity", "Dynastic Conflict & Caste", "Personal Desire vs Societal Duty", "The Ethics of War"],
      tags: ["Sociological", "Ethical", "Bhagavad Gita", "Ancient Indian Epic"],
      accentColor: "#0A0A0A"
    },
    {
      id: "iliad",
      indexNumber: "#05",
      title: "The Iliad",
      author: "Homer",
      tradition: "Classical Greek",
      yearPublished: "c. 8th Century BCE",
      lens: "Psychoanalytic & Heroic",
      lensColor: "#FF3B00",
      summary: "A study of Achilles' rage, heroic pride, and shared mortality before the walls of Troy.",
      paragraphs: [
        "The Iliad is fundamentally a study of rage (mênis) and its destructive consequences. A psychoanalytic reading of Achilles reveals a hero driven by a fragile ego and an insatiable need for kleos (immortal glory).",
        "Achilles' withdrawal from the battle due to a perceived slight by Agamemnon illustrates how unchecked pride can unravel an entire society. The epic deconstructs the heroic code, showing the immense psychological toll of war. It is only when Achilles weeps with Priam at the end that he transcends his rage, acknowledging shared human mortality."
      ],
      imageCover: "/assets/analyses/the-iliad.jpg",
      imageAlt: "Classical depiction of Achilles and Trojan warfare from Homer's The Iliad",
      imageCaption: "Achilles & the Trojan War — The Iliad",
      themes: ["Mênis (Destructive Rage)", "Fragile Ego & Kleos", "Deconstruction of Heroic Pride", "Shared Human Mortality"],
      tags: ["Psychoanalytic", "Heroic", "Classical Greek", "Trojan War"],
      accentColor: "#FF3B00"
    },
    {
      id: "odyssey",
      indexNumber: "#06",
      title: "The Odyssey",
      author: "Homer",
      tradition: "Classical Greek",
      yearPublished: "c. 8th Century BCE",
      lens: "Archetypal (The Hero's Journey)",
      lensColor: "#0A0A0A",
      summary: "Odysseus's ten-year voyage home: cunning, endurance, hospitality, and psychological return.",
      paragraphs: [
        "The Odyssey is the quintessential narrative of the Hero’s Journey, mapping not just a physical return from Troy, but a psychological integration. Odysseus represents the archetype of the trickster and the enduring survivor (polytropos—the man of many turns).",
        "His encounters with monsters, witches, and the underworld symbolize the trials required to shed the identity of a warrior and reclaim the role of a king and father. The epic emphasizes nostos (homecoming) and xenia (hospitality), contrasting the civilized world of Ithaca with the chaotic, primal forces of the sea."
      ],
      imageCover: "/assets/analyses/the-odyssey.jpg",
      imageAlt: "Greek vessel navigating open waters in Homer's The Odyssey",
      imageCaption: "Voyage Across the Sea — The Odyssey",
      themes: ["The Hero's Journey", "Polytropos (Cunning & Survival)", "Nostos (Homecoming)", "Xenia (Hospitality)"],
      tags: ["Archetypal", "Hero's Journey", "Classical Greek", "Epic"],
      accentColor: "#0A0A0A"
    },
    {
      id: "song-of-roland",
      indexNumber: "#07",
      title: "The Song of Roland",
      author: "Unknown",
      tradition: "Medieval French (Chanson de Geste)",
      yearPublished: "c. 11th Century CE",
      lens: "Historical & Cultural",
      lensColor: "#FF3B00",
      summary: "Feudal loyalty, chivalric pride, and the sounding of the Olifant at Roncevaux Pass.",
      paragraphs: [
        "As a chanson de geste (song of heroic deeds), The Song of Roland served as medieval propaganda, reinforcing the feudal values of 11th-century France. Viewed through a historical lens, the text glorifies the ideals of chivalry, absolute loyalty to one's liege lord (Charlemagne), and the militant defense of Christendom.",
        "Roland’s refusal to sound his horn (the Olifant) out of pride perfectly captures the fatal flaw inherent in the chivalric code. The epic heavily romanticizes martyrdom, establishing a rigid binary between the \"righteous\" Franks and their enemies, which historically served to unite the French during the Crusades."
      ],
      imageCover: "/assets/analyses/song-of-roland.jpg",
      imageAlt: "Medieval scene depicting Roland and the Battle of Roncevaux Pass",
      imageCaption: "The Olifant & Roncevaux Pass — The Song of Roland",
      themes: ["Feudal Loyalty", "Chivalric Pride & the Olifant", "Medieval Propaganda", "Martyrdom & Binary Worldview"],
      tags: ["Historical", "Cultural", "Chanson de Geste", "Medieval French"],
      accentColor: "#FF3B00"
    }
  ],
  favorite: {
    title: "The Metamorphosis",
    author: "Franz Kafka",
    year: "1915",
    genre: "Absurdist Fiction / Modernist Novella",
    lens: "Marxist Theory & Existentialism",
    tagline: "WHEN PRODUCTIVITY DEFINES EXISTENCE, TRANSFORMATION IS THE ONLY ESCAPE.",
    overview: "Franz Kafka's masterpiece chronicles the heartbreaking deterioration of Gregor Samsa, a conscientious traveling salesman who awakes one morning transformed into a grotesque vermin. Rather than exploring the biological impossibility of the change, Kafka focuses on the immediate domestic and economic fallout: Gregor cannot catch his train, cannot pay his family's debts, and is rapidly discarded by the very people he spent his life sacrificing for.",
    personalReasons: "As a student constantly balancing academic pressure, professional ambitions, and the relentless speed of digital modern life, Gregor's predicament struck a profoundly raw, personal nerve. Kafka articulated a silent, universal modern dread: the fear that our worth to our institutions, peers, and even families is contingent entirely upon our functional productivity. The quiet tragedy of Gregor lying alone in the dark dust of his room listening to his sister's violin is one of the most painfully poignant moments in all of world literature.",
    keyThemes: [
      {
        title: "The Dehumanization of Routine",
        description: "Gregor was already turned into an insect long before his physical transformation—his daily corporate drudgery had hollowed out his passions and friendships."
      },
      {
        title: "Conditional Familial Affection",
        description: "The painful revelation that love can become transactional when the provider becomes an economic liability."
      },
      {
        title: "The Alienated Body",
        description: "The experience of one's own physical form betraying conscious desires, mirroring chronic illness, fatigue, and burnout."
      }
    ],
    keyCharacters: [
      {
        name: "Gregor Samsa",
        role: "Protagonist / Sacrificial Provider",
        significance: "Embodies the selfless modern worker whose internal humanity outlasts his physical utility."
      },
      {
        name: "Grete Samsa",
        role: "Gregor's Younger Sister",
        significance: "Traces the psychological transition from sympathetic caregiver to ruthless pragmatist who pronounces his eviction."
      },
      {
        name: "Mr. Samsa",
        role: "The Patriarch",
        significance: "Represents authoritarian, violent institutional authority, weaponizing apples to punish his helpless son."
      }
    ],
    coreLessons: [
      "Human value is inherent and unconditional, never to be conflated with commercial productivity.",
      "True empathy demands that we stand by individuals when they are vulnerable, broken, and unproductive.",
      "A life dictated solely by external obligations is a form of spiritual sleepwalking."
    ],
    personalRealization: "Reading 'The Metamorphosis' permanently restructured my relationship with productivity and ambition. It taught me to honor my creative, emotional, and relational self above arbitrary metric evaluations, grounding my future in purposeful humanity rather than mechanical exhaustion.",
    favoriteQuote: "“I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.”",
    image: "/assets/hernandez.jpg"
  },
  learningPillars: [
    {
      number: "01",
      title: "Historical & Cultural Masterpieces",
      subtitle: "Navigating Diverse Eras & Civilizations",
      description: "Tracing the evolution of human thought across millennia—from fifth-century Athenian theater to post-colonial Nigeria and the interwar Lost Generation. Literary works do not exist in historical vacuums; they are living testaments to the geopolitical crises, religious shifts, and societal anxieties of their epochs.",
      keyTakeaways: [
        "Connecting classical tragedy to foundational Athenian democracy and civic responsibility.",
        "Recognizing how post-colonial texts dismantle Eurocentric historical supremacy.",
        "Analyzing literature as an indispensable historical document of ideological struggles."
      ],
      iconName: "Globe2"
    },
    {
      number: "02",
      title: "Literary Lenses Mastery",
      subtitle: "Critical Analytical Frameworks",
      description: "Moving beyond passive plot ingestion into rigorous intellectual interrogation. By systematically employing lenses such as Marxism, Feminist Theory, Psychoanalysis, Formalism, and Deconstruction, text reveals its buried ideological tensions, subtexts, and power structures.",
      keyTakeaways: [
        "Unmasking class struggle and economic alienation via Marxist critique.",
        "Dismantling patriarchal domesticity through Feminist structural interrogation.",
        "Deconstructing linguistic double-meanings and unstable narratives."
      ],
      iconName: "SearchCode"
    },
    {
      number: "03",
      title: "The Mirror to Human Experience",
      subtitle: "Universal Grief, Morality & Longing",
      description: "Discovering that beneath the distinct costumes and idioms of disparate centuries lies the immutable core of human vulnerability. Oedipus's grief, Elizabeth Bennet's longing for dignity, and Hamlet's existential dread reflect our own contemporary moral dilemmas.",
      keyTakeaways: [
        "Empathy cultivation across centuries, cultures, and socioeconomic barriers.",
        "Confronting moral ambiguity rather than seeking comforting, simplistic resolutions.",
        "Validating existential vulnerability as a universal condition of human consciousness."
      ],
      iconName: "HeartHandshake"
    },
    {
      number: "04",
      title: "Core Skill Development",
      subtitle: "Critical Thinking & Cognitive Synthesis",
      description: "Sharpening the essential cognitive abilities demanded of the 21st-century scholar: close-reading textual discipline, argumentative articulation, pattern recognition, and synthesizing disparate philosophical frameworks into coherent ethical positions.",
      keyTakeaways: [
        "Close textual analysis: deriving macro-thematic insights from micro-linguistic details.",
        "Articulating nuanced, evidence-backed arguments under intellectual scrutiny.",
        "Synthesizing multidisciplinary knowledge between technology, ethics, and literature."
      ],
      iconName: "BrainCircuit"
    }
  ],
  reflections: [
    {
      id: "q1",
      number: "01",
      question: "How has your understanding and appreciation of literature evolved throughout the Great Books course?",
      shortAnswer: "From viewing literature as passive recreational escapism to recognizing it as an indispensable laboratory for ethical, political, and philosophical inquiry.",
      detailedReflection: "Before this course, my engagement with reading was primarily linear and surface-oriented: I focused on plot momentum, relatable characters, and entertaining prose. The Great Books curriculum radically disrupted this naivety. I now approach literature as a multi-layered architectural construct. Every lexical choice, structural omission, and symbolic motif is loaded with cultural, political, and psychological implications. Studying works like 'Hamlet' and 'Oedipus Rex' taught me that literature does not offer comfortable answers; rather, it formulates the urgent, difficult questions that civilization too frequently avoids asking.",
      tags: ["Intellectual Growth", "Close Reading", "Perspective Shift"]
    },
    {
      id: "q2",
      number: "02",
      question: "What specific challenges did you encounter when engaging with complex classical texts, and what strategies did you employ to overcome them?",
      shortAnswer: "Overcoming archaic linguistic syntax, dense historical contexts, and psychological resistance to unresolved, tragic ambiguities.",
      detailedReflection: "The greatest hurdle was confronting archaic syntactical structures and unfamiliar historical idioms, particularly in Shakespeare's verse and classical Greek choral odes. Initially, this linguistic friction tempted me to rush toward simplified summaries. To conquer this, I developed a three-stage reading methodology: first, an unhurried read-aloud to absorb the rhythm and emotional cadence; second, contextual annotation utilizing scholarly glossaries to decipher historical references; and third, applying a specific literary lens to locate the core ideological battleground of the scene. This disciplined workflow transformed what felt like an intimidating wall of text into an exhilarating intellectual mystery.",
      tags: ["Academic Discipline", "Methodology", "Overcoming Obstacles"]
    },
    {
      id: "q3",
      number: "03",
      question: "Which literary lens resonated most deeply with your analytical perspective, and why did it exert such an impact?",
      shortAnswer: "Marxist Literary Theory, because it unmasks the hidden economic forces and labor commodification that govern human relationships.",
      detailedReflection: "Marxist Literary Criticism resonated most powerfully with my worldview. In an increasingly algorithmic, hyper-capitalist digital economy, it is astonishingly easy to view human beings as data points, productivity metrics, and commodified labor. Analyzing 'The Metamorphosis' through this framework was an epiphany: Gregor Samsa's tragedy is not that he turned into a bug, but that his entire identity and family value were tied to his wage. The Marxist lens strips away romanticized, bourgeois veneers to reveal how material conditions dictate human psychology, ethics, and social status, giving me a permanent analytical tool for critiquing contemporary societal hierarchies.",
      tags: ["Marxist Lens", "Social Critique", "Materialist Analysis"]
    },
    {
      id: "q4",
      number: "04",
      question: "What transformative realizations have you gained regarding life, society, culture, and human nature?",
      shortAnswer: "That civilization's technological progress does not automatically guarantee moral maturity; human beings remain perpetually vulnerable to pride, greed, and the hunger for power.",
      detailedReflection: "Immersing myself in the Great Books dismantled the myth of continuous moral progress. Despite living with smartphones, artificial intelligence, and space exploration, contemporary human beings grapple with the exact same primal vulnerabilities depicted in 2,500-year-old texts: the blinded arrogance of Oedipus in leadership, the linguistic deception and propaganda of Ingsoc in '1984', and the destructive clan tribalism of 'Things Fall Apart'. Culture and literature are our collective memory bank. When a society forgets its literary canon, it is condemned to repeat the hubris and atrocities of previous epochs with modern, mechanized efficiency.",
      tags: ["Human Condition", "Civilizational Truths", "Moral Vigilance"]
    },
    {
      id: "q5",
      number: "05",
      question: "How will you synthesize the lessons, ethics, and critical values acquired in Great Books into your personal, academic, and future professional pursuits?",
      shortAnswer: "By embedding humanistic empathy, ethical discernment, and rigorous critical thinking into technical systems, software design, and digital leadership.",
      detailedReflection: "As an aspiring technologist and creative developer, the lessons of Great Books will serve as my ethical compass. Technology is never neutral; like language in '1984' or capital in 'The Metamorphosis', technical architectures can either liberate human autonomy or enforce systemic surveillance and alienation. Great Books has instilled in me a sacred responsibility: to design digital systems with deep human empathy, to question institutional dogmas, to listen to marginalized perspectives as Achebe championed, and to remember that behind every line of code, screen, or transaction lies a living human being deserving of unconditional dignity.",
      tags: ["Future Career", "Ethical Technology", "Human-Centered Design"]
    }
  ]
}
