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
  author: string
  yearPublished: string
  lens: string
  lensColor: string
  summary: string
  fullAnalysis: {
    thesis: string
    introduction: string
    criticalApplication: string
    textualEvidence: string
    conclusion: string
  }
  keyQuote: string
  themes: string[]
  tags: string[]
  imageCover: string
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
    { label: "MASTERPIECES ANALYZED", value: "07+", detail: "Across 4 Literary Eras" },
    { label: "CRITICAL LENSES APPLIED", value: "07", detail: "Marxist, Psychoanalytic, Feminist, etc." },
    { label: "GUIDED REFLECTIONS", value: "05", detail: "Comprehensive Self-Examinations" },
    { label: "ORIGINAL SCHOLARSHIP", value: "100%", detail: "Analytical Rigor & Creative Synthesis" }
  ],
  analyses: [
    {
      id: "metamorphosis",
      indexNumber: "#01",
      title: "The Metamorphosis",
      author: "Franz Kafka",
      yearPublished: "1915",
      lens: "Marxist Literary Theory",
      lensColor: "#FF3B00",
      summary: "A searing allegory of labor exploitation, commodity fetishism, and the tragic alienation of the modern worker within industrial capitalism.",
      fullAnalysis: {
        thesis: "Kafka's 'The Metamorphosis' uses Gregor Samsa's grotesque entomological transmutation as a literalization of capitalist estrangement, illustrating how an individual's value in a market-driven society is contingent entirely upon economic productivity.",
        introduction: "When traveling salesman Gregor Samsa wakes up transformed into a monstrous verminous insect ('ungeziefer'), his immediate terror is not physical deformity, but missing the 5:00 AM train for work. Through a Marxist theoretical framework, Kafka strips away bourgeois pretenses to reveal the brutal commodification of human life.",
        criticalApplication: "Applying Karl Marx's theory of alienation (Entfremdung), Gregor suffers in four distinct dimensions: alienation from the product of his labor, from the act of production, from his human species-essence, and from fellow human beings. His frantic manager arrives at his home within hours of his absence, demonstrating that management regards employees not as humans, but as interchangeable mechanical units.",
        textualEvidence: "Gregor's family displays affection only while he provides for their debts. The moment he becomes economically defunct, his sister Grete—formerly his closest advocate—concludes, 'We must try to get rid of it... If this were Gregor, he would have realized long ago that human beings cannot live with such a beast.' His father hurls apples at him, one of which rots in his flesh, symbolizing the violent hostility of the patriarchal-capitalist order against non-productive members.",
        conclusion: "Kafka delivers an uncompromising diagnosis of modern labor: when humanity is reduced to economic utility, physical death is merely the postscript to a soul that was already liquidated by the demands of capital."
      },
      keyQuote: "“Was he an animal, that music had such an effect upon him? He felt as if the way were opening before him to the unknown nourishment he craved.”",
      themes: ["Alienation of Labor", "Commodity Value vs Human Dignity", "Familial Guilt", "Bodily Autonomy"],
      tags: ["Marxism", "Existentialism", "Modernism", "German Literature"],
      imageCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      accentColor: "#FF3B00"
    },
    {
      id: "oedipus-rex",
      indexNumber: "#02",
      title: "Oedipus Rex",
      author: "Sophocles",
      yearPublished: "c. 429 BCE",
      lens: "Psychoanalytic & Archetypal Theory",
      lensColor: "#0A0A0A",
      summary: "The archetypal tragedy of blindness, self-discovery, repressed trauma, and the futile struggle of the human ego against deterministic destiny.",
      fullAnalysis: {
        thesis: "Through a Psychoanalytic lens, Sophocles' 'Oedipus Rex' dramatizes the violent collision between conscious conscious ego (Oedipus as rational detective) and the deeply repressed unconscious truths (the patricidal and incestuous fulfillment of fate).",
        introduction: "Oedipus Rex stands as the foundational psychological archetype of Western dramatic literature. Sigismund Freud famously derived the 'Oedipus Complex' from this play, yet the work's psychological resonance extends far beyond repressed sexual instinct to encompass the trauma of epistemological awakening.",
        criticalApplication: "Oedipus's hubris is fundamentally intellectual: he believes his conscious intellect, which solved the Sphinx's riddle, can outmaneuver the primordial unconscious prophesied by Apollo. In psychoanalytic terms, the plague consuming Thebes symbolizes the toxic symptom of a repressed historical crime that must be brought into conscious awareness before collective healing can occur.",
        textualEvidence: "The dynamic between Oedipus and the blind prophet Tiresias establishes the central motif of sight versus insight. Tiresias taunts: 'You have your eyesight, and you do not see how miserably you are living.' When the horrific truth collapses into consciousness, Oedipus does not commit suicide like Jocasta; instead, he violently pierces his own eyes with her golden brooches, trading physiological sight for psychic insight.",
        conclusion: "Sophocles reveals that true tragic nobility lies not in escaping fate or human fallibility, but in having the courage to confront the shadow self, take unconditional responsibility, and endure the agonizing burden of self-knowledge."
      },
      keyQuote: "“Fear? What has a man to do with fear? Chance rules our lives, and the future is all unknown. Best live as we may, from day to day.”",
      themes: ["Fate vs Free Will", "Sight and Blindness", "The Shadow Archetype", "The Cost of Truth"],
      tags: ["Psychoanalysis", "Greek Tragedy", "Archetypal", "Classical Drama"],
      imageCover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      accentColor: "#0A0A0A"
    },
    {
      id: "pride-and-prejudice",
      indexNumber: "#03",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      yearPublished: "1813",
      lens: "Feminist Literary Criticism",
      lensColor: "#FF3B00",
      summary: "A razor-sharp dissection of patriarchal marital economics, female intellectual autonomy, and institutional disenfranchisement in Regency England.",
      fullAnalysis: {
        thesis: "Austen weaponizes domestic satire and free indirect discourse to critique the socioeconomic helplessness of women under 19th-century entailment laws, establishing Elizabeth Bennet's intellectual defiance as a radical claim to female sovereignty.",
        introduction: "Often reduced in popular culture to a cozy romantic melodrama, 'Pride and Prejudice' is fundamentally an urgent economic survival narrative. In a world where the Longbourn estate is entailed away to the pompous Mr. Collins, marriage for the Bennet sisters is an existential necessity rather than mere sentimental recreation.",
        criticalApplication: "Feminist criticism illuminates the contrasting survival strategies enacted by Austen's female characters. Charlotte Lucas embodies pragmatic surrender to systemic patriarchal realities: she accepts Mr. Collins without illusion, stating that marriage is 'the only provision for well-educated women of small fortune.' In sharp contrast, Elizabeth's refusal of both Collins and Darcy's initial insolent proposal asserts that a woman's intellectual and emotional self-respect outweighs financial security.",
        textualEvidence: "When Lady Catherine de Bourgh attempts to intimidate Elizabeth from marrying Darcy based on social rank, Elizabeth boldly counters: 'He is a gentleman; I am a gentleman's daughter; so far we are equal.' Here, Elizabeth dismantling aristocratic paternalism not with revolutionary violence, but with sheer rhetorical and ethical parity.",
        conclusion: "Austen concludes that authentic union is only possible between intellectual equals who have stripped away both patriarchal condescension and defensive prejudice, reimagining love as a collaborative partnership of mutual respect."
      },
      keyQuote: "“There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.”",
      themes: ["Patriarchal Entailment", "Female Intellectual Autonomy", "Social Class Rigidities", "Self-Delusion"],
      tags: ["Feminism", "Regency", "British Literature", "Social Satire"],
      imageCover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      accentColor: "#FF3B00"
    },
    {
      id: "great-gatsby",
      indexNumber: "#04",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: "1925",
      lens: "Historical-Biographical Criticism",
      lensColor: "#0A0A0A",
      summary: "An indictment of the hollow consumerism, moral decay, and mythological mirage of the American Dream in the post-WWI Jazz Age.",
      fullAnalysis: {
        thesis: "Reading Fitzgerald through a Historical-Biographical lens demonstrates how Jay Gatsby's fabricated identity and tragic demise mirror the author's own anxieties of social illegitimacy, post-war trauma, and the predatory cynicism of Old Money America.",
        introduction: "Set in the feverish summer of 1922, 'The Great Gatsby' captures the moral disorientation following the slaughter of World War I. Prohibition, rapid industrial expansion, and Wall Street speculation birthed an ostentatious nouveaux-riches class whose social climbing concealed profound spiritual barrenness.",
        criticalApplication: "Fitzgerald transposes his personal insecurity regarding his Midwestern background and courtship of Zelda Sayre into Gatsby's hopeless romantic crusade for Daisy Buchanan. The geography of Long Island acts as an ideological map: West Egg represents vulgar, unvetted ambition, while East Egg represents hereditary, callous aristocracy that crushes interlopers with impunity.",
        textualEvidence: "Nick Carraway's final judgment of Tom and Daisy Buchanan encapsulates the historical moral rot of the ruling elite: 'They were careless people, Tom and Daisy—they smashed up things and creatures and then retreated back into their money or their vast carelessness.' Gatsby's vigil outside Daisy's house, staring at the green light across the bay, crystallizes the illusion that wealth can rewind time and purchase genuine affection.",
        conclusion: "The novel stands as a devastating elegy for an empire that confused financial accumulation with spiritual redemption, leaving its dreamers murdered in swimming pools while the careless heirs retreat into pristine mansions."
      },
      keyQuote: "“So we beat on, boats against the current, borne back ceaselessly into the past.”",
      themes: ["The Death of the American Dream", "Old Money vs New Wealth", "Time and Nostalgia", "Class Protectionism"],
      tags: ["Historical-Biographical", "Jazz Age", "American Literature", "Lost Generation"],
      imageCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      accentColor: "#0A0A0A"
    },
    {
      id: "things-fall-apart",
      indexNumber: "#05",
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      yearPublished: "1958",
      lens: "Post-Colonial & Cultural Criticism",
      lensColor: "#FF3B00",
      summary: "A profound reclamation of African humanity and complex social order against European colonial paternalism and cultural erasure.",
      fullAnalysis: {
        thesis: "Achebe employs Post-Colonial literary resistance to dismantle Eurocentric 'Heart of Darkness' tropes, portraying Umuofia as a sophisticated, spiritually cohesive, yet internally conflicted society dismantled by British imperialist hegemony.",
        introduction: "Written as an intentional counter-narrative to colonialist depictions of Africa as a savage, pre-linguistic void, 'Things Fall Apart' chronicles the tragic trajectory of Okonkwo and the Igbo people at the turn of the 20th century.",
        criticalApplication: "A Post-Colonial lens emphasizes Achebe's revolutionary linguistic choice: writing in English, but infusing the language with Igbo proverbs ('proverbs are the palm-oil with which words are eaten'). Achebe does not idealize pre-colonial Igbo society—he unflinchingly details the discarding of twins and the execution of Ikemefuna—thereby granting his subjects the ultimate dignity of complex, flawed humanity.",
        textualEvidence: "The tragic climax pivots on the colonial commissioner's cold, bureaucratic gaze. Following Okonkwo's suicide in defense of a shattered way of life, the British District Commissioner decides the event might warrant 'almost a whole chapter' or 'a reasonable paragraph' in his book, 'The Pacification of the Primitive Tribes of the Lower Niger.' Achebe brilliantly subverts this footnote into an enduring global epic.",
        conclusion: "Achebe demonstrates that colonial subjugation succeeds not merely through military superior firepower, but through linguistic violence and cultural alienation that ruptures a community's sacred self-understanding."
      },
      keyQuote: "“The white man is very clever. He came quietly and peaceably with his religion. We were amused at his foolishness... Now he has won our brothers, and our clan can no longer act like one.”",
      themes: ["Colonial Rupture", "Cultural Complexity", "Destructive Hyper-Masculinity", "Linguistic Resistance"],
      tags: ["Post-Colonial", "African Literature", "Cultural Identity", "Igbo Heritage"],
      imageCover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      accentColor: "#FF3B00"
    },
    {
      id: "hamlet",
      indexNumber: "#06",
      title: "Hamlet",
      author: "William Shakespeare",
      yearPublished: "c. 1601",
      lens: "Formalism & Structural Criticism",
      lensColor: "#0A0A0A",
      summary: "The definitive masterwork of existential interiority, structural delay, linguistic duplicity, and the paralysis of conscious reflection.",
      fullAnalysis: {
        thesis: "Through a Formalist critical lens, Shakespeare's 'Hamlet' weaponizes theatrical self-reflexivity, linguistic punning, and recurrent motifs of biological decay ('something is rotten in the state of Denmark') to construct an unprecedented architectural study of human consciousness.",
        introduction: "While conventional revenge tragedies of the Elizabethan era emphasize swift blood vengeance, Hamlet subverts expectations through radical structural suspension. The play's dramatic tension arises not from what occurs, but from the cognitive friction between thought and action.",
        criticalApplication: "Formalism directs our attention to the text's organic harmony and linguistic textures. Hamlet's seven soliloquies are not mere plot exposition; they are formal explorations of epistemological doubt. Shakespeare constructs recurring patterns of disease, rot, and espionage ('The Mousetrap' play-within-a-play mirrors Claudius's crime) to reinforce how political tyranny infects the entire linguistic and psychological fabric of Elsinore.",
        textualEvidence: "Hamlet's dialogue is saturated with double entendres and syntactic ambiguity ('A little more than kin, and less than kind'). In his confrontation with Ophelia and his meditation over Yorick's skull, Hamlet formalizes the visceral reduction of imperial kingship to common dust: 'Alexander died, Alexander was buried, Alexander returneth to dust... of that loam might they stop a beer-barrel?'",
        conclusion: "Shakespeare's formal mastery proves that revenge is an annihilating vacuum; by the time the sword strikes Claudius, Hamlet has already dismantled the moral sanity of the court, leaving only silence in its wake."
      },
      keyQuote: "“There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.”",
      themes: ["Thought vs Action", "The Architecture of Grief", "Political Corruption", "The Theatricality of Life"],
      tags: ["Formalism", "Shakespeare", "Renaissance Drama", "Existential Doubt"],
      imageCover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80",
      accentColor: "#0A0A0A"
    },
    {
      id: "1984",
      indexNumber: "#07",
      title: "1984",
      author: "George Orwell",
      yearPublished: "1949",
      lens: "Deconstruction & Structural Power",
      lensColor: "#FF3B00",
      summary: "A terrifying anatomy of psychological totalitarianism, semantic erosion through Newspeak, and the destruction of objective truth.",
      fullAnalysis: {
        thesis: "Applying Deconstruction to Orwell's '1984' reveals how Ingsoc maintains absolute dominion not primarily through physical surveillance, but by destabilizing binary language systems, demonstrating that reality is an arbitrary construct policed by state power.",
        introduction: "Published in the shadow of World War II and the dawn of the Cold War, Orwell's harrowing dystopia envisions Oceania: a society where the Party exerts total surveillance over speech, behavior, and subconscious desire.",
        criticalApplication: "Jacques Derrida's deconstructive principle that meaning is inherently slippery and historically constructed becomes Ingsoc's ultimate weapon. Through 'Newspeak', the Party actively eliminates antonyms and nuances to make heretical thoughts linguistically impossible ('free' exists only in the sense of 'the dog is free from lice'). The paradoxes of Party slogans—'WAR IS PEACE', 'FREEDOM IS SLAVERY', 'IGNORANCE IS STRENGTH'—are deliberate deconstructive fissures that force the human mind to hold two contradictory beliefs simultaneously (Doublethink).",
        textualEvidence: "In the sterile horrors of the Ministry of Love, inquisitor O'Brien deconstructs Winston Smith's stubborn belief in empirical reality: 'You believe that reality is something objective, external, existing in its own right... But I tell you, Winston, that reality is not external. Reality exists in the human mind, and nowhere else.' When Winston finally accepts that '2 + 2 = 5', the Party has achieved total semiotic colonization.",
        conclusion: "Orwell warns that democracy dies the moment citizens surrender their linguistic autonomy; when language loses its grounding in verifiable truth, tyranny becomes the sole author of human perception."
      },
      keyQuote: "“Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.”",
      themes: ["Linguistic Erasure", "Totalitarian Surveillance", "The Malleability of Memory", "The Death of the Self"],
      tags: ["Deconstruction", "Dystopian", "Political Philosophy", "20th Century Fiction"],
      imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
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
