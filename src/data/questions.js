const questions = {
  2: {
    question: 'What module is this game related to?',
    correctAnswer: 'Gaming Life',
    wrongAnswers: [
      'Internationalisation of Higher Education',
      'Picturing and Seeing Development',
      'Technology and the Fate of Knowledge'
    ]
  },
  3: {
    question: 'What is the name of the teacher of the Gaming Life module?',
    correctAnswer: 'Dr Jeremy Fernando',
    wrongAnswers: ['Dr Eric Kerr', 'Dr Margaret Tan', 'Mr Shamraz Anver']
  },
  4: {
    question: 'In Lesson One, what game was buying art compared to?',
    correctAnswer: 'Class Game',
    wrongAnswers: ['Drawing Game', 'College Game', 'Game within Games']
  },
  5: {
    question: 'What were early games designed to do?',
    correctAnswer: 'Simulate war with no real consequences',
    wrongAnswers: [
      'Entertain the peasants',
      "Test one's IQ",
      "Symbolise a society's culturedness"
    ]
  },
  6: {
    question: 'What is the root word of Amateur, and what does it mean?',
    correctAnswer: 'Amore; Love',
    wrongAnswers: ['Ang mo; Foreign', 'Amatu; New', 'Amora; Unprofessional']
  },
  7: {
    question: 'What is one concept that we discussed in Lesson One?',
    correctAnswer: 'How a game is not divorced from other games and contexts',
    wrongAnswers: [
      'The Maginalia style of play',
      'How interpretation can be power',
      'The legend of Socrates, a Brazillian soccer player'
    ]
  },
  8: {
    question:
      '____ often pushes technology forward. What is it that we discussed in class?',
    correctAnswer: 'Marginalised activities',
    wrongAnswers: ['Seminariums', 'Variantology', 'Traditions']
  },
  9: {
    question:
      "In addition to constraints, what else is needed for us to 'game'?",
    correctAnswer: 'Feedback',
    wrongAnswers: ['Knowledge', 'Rules', 'Competition']
  },
  10: {
    question: 'How does Brian Upton define play?',
    correctAnswer: 'Free movement within a system of constraints',
    wrongAnswers: [
      'Free movement between games',
      'Interaction with games and rules',
      'Disobeying the constraints of a system'
    ]
  },
  11: {
    question: 'How did Brian Upton design his games?',
    correctAnswer: 'Structure rules around the desired experience',
    wrongAnswers: [
      'Create rules that are confusing',
      'Design rules that are easy to test',
      'Come up with rules that are hard to break'
    ]
  },
  12: {
    question: 'What is hermeneutics?',
    correctAnswer: 'Finding the correct interpretation of texts',
    wrongAnswers: [
      'Thievery and trickery',
      'Identifying the key elements of a story',
      'Analysis of games and rule design'
    ]
  },
  13: {
    question: 'What is hermeneutics named after?',
    correctAnswer: 'Hermes',
    wrongAnswers: ['Herpes', 'Hermaphrodite', 'Pharmaceutics']
  },
  14: {
    question:
      'What was so special about Socrates, the Brazillian soccer player?',
    correctAnswer: 'He played soccer out of his love for the sport',
    wrongAnswers: [
      'He was obsessive with winning',
      'He shares a name with a famous philosopher',
      'He played the sport professionally for decades'
    ]
  },
  15: {
    question: 'What is Marginalia?',
    correctAnswer: 'Marks made in the margins of texts',
    wrongAnswers: [
      'Practice of drinking Magnolia milk daily',
      'Marginalising certain individuals in society',
      'Obsession with margin sizes in texts'
    ]
  },
  16: {
    question: "When was the concept of 'leisure time' created?",
    correctAnswer: 'The Industrial Revolution',
    wrongAnswers: ['The French Revolution', 'Industry 4.0', 'World War II']
  },
  17: {
    question: 'Why was interpretation often related to power?',
    correctAnswer: 'The law came from interpreting messages from God',
    wrongAnswers: [
      'The powerful were educated and could interpret well',
      'Interpretation was a right reserved for the powerful',
      'How to interpret this question?'
    ]
  },
  18: {
    question: 'What games are related to power plays?',
    correctAnswer: 'Inclusion/Exclusion Games',
    wrongAnswers: ['First-Person Shooter Games', 'Board Games', 'Video Games']
  },
  19: {
    question:
      'What is the sustainable architecture that inspired a Star Wars planet?',
    correctAnswer: 'Arcosanti',
    wrongAnswers: ['Ecologic Minutiae', 'Soleri Bridge', 'The Goldwater Bell']
  },
  20: {
    question: 'Who is the architect whose designs inspired a Star Wars planet?',
    correctAnswer: 'Paolo Soleri',
    wrongAnswers: ['Justus Dahinden', 'Bruno Zevi', 'Dennis Sharp']
  },
  21: {
    question: 'What is Siegfried Zielinski best known for?',
    correctAnswer: 'Variantology',
    wrongAnswers: ['Theology', 'Musicology', 'Philology']
  },
  22: {
    question:
      'What book by Julian Gough was recommended by Dr Jeremy Fernando?',
    correctAnswer: 'Connect',
    wrongAnswers: [
      'Free Sex Chocolate',
      'Minecraft End Game Poem',
      'Jude in London'
    ]
  },
  23: {
    question: 'Who is widely credited for pioneering cyberpunk?',
    correctAnswer: 'William Gibson',
    wrongAnswers: ['Bruce Sterling', 'Rudy Rucker', 'Katsuhiro Otomo']
  },
  24: {
    question: 'What is the meaning of barbarian',
    correctAnswer: 'One who does not speak',
    wrongAnswers: [
      'One who does not listen',
      'One who does not run',
      'One who does not respect'
    ]
  },
  25: {
    question: 'Sociology came about because of...',
    correctAnswer: 'Urbanisation',
    wrongAnswers: ['Colonisation', 'Anthropology', 'Art History']
  },
  26: {
    question: 'What is so scary about implicit constraints?',
    correctAnswer: "You don't feel them",
    wrongAnswers: [
      "You don't get affected by them",
      "You don't know them",
      "You don't hear about them"
    ]
  },
  27: {
    question: 'How do sports make you feel the rules?',
    correctAnswer: 'With constant disruptions',
    wrongAnswers: ['With the rulebook', 'With replays', 'With the players']
  },
  28: {
    question: 'If something can be analysed, it can be...',
    correctAnswer: 'broken down into parts',
    wrongAnswers: [
      'seen and observed',
      'tested and experimented with',
      'measured as some quantity'
    ]
  },
  29: {
    question: 'Brian Upton clearly mentions that games are...',
    correctAnswer: 'Artificial',
    wrongAnswers: ['Fun', 'Natural', 'Recognisable']
  },
  30: {
    question: 'What is so special about marriage?',
    correctAnswer: 'Automatic Inheritance',
    wrongAnswers: [
      'Manual Inheritance',
      'Automatic Polymorphism',
      'Automatic Contract'
    ]
  },
  31: {
    question: 'Why is Carnival or Mardi Gras interesting?',
    correctAnswer: 'Momentary suspension of roles',
    wrongAnswers: [
      'You get to wear a mask',
      'Free food and drinks',
      'Party with the king'
    ]
  },
  32: {
    question: 'Why does Carnival or Mardi Gras work?',
    correctAnswer: 'Unspoken social rules',
    wrongAnswers: [
      'Nobody knows who you are',
      'The masks work pretty well',
      'Nobody remembers anything after the party'
    ]
  },
  33: {
    question:
      'What is the name of a private all-male dining club for Oxford students?',
    correctAnswer: 'Bullingdon Club',
    wrongAnswers: [
      'Marylebone Cricket Club',
      'The Riot Club',
      'Conservative Party'
    ]
  },
  34: {
    question: 'Why is social interaction like a game?',
    correctAnswer: 'Social rules act much like constraints',
    wrongAnswers: [
      'You can game social interaction',
      'Both are fun',
      'You get feedback'
    ]
  },
  35: {
    question: 'What does THE History of Games suggest?',
    correctAnswer: 'There is a single origin',
    wrongAnswers: [
      'There are many histories of games',
      'The essay is a historical text',
      'EB Taylor likes history'
    ]
  },
  36: {
    question: "What is the origin of the word 'origin'?",
    correctAnswer: 'Arkhe; Authority',
    wrongAnswers: ['Asulon; Sanctuary', 'Aster; Star', 'Axios; Worthy']
  },
  37: {
    question: "What does 'power' in French also mean?",
    correctAnswer: 'Possibilities',
    wrongAnswers: ['Permissions', 'Perhaps', 'Principles']
  },
  38: {
    question: 'Where was The World of Wrestling originally published?',
    correctAnswer: 'French Popular Magazines',
    wrongAnswers: ['Mythologies', 'Myth Today', 'American Popular Magazines']
  },
  39: {
    question: 'What is the movie in this list that was mentioned in class?',
    correctAnswer: 'Little Women',
    wrongAnswers: ['Large Women', 'Little Men', 'Large Men']
  },
  40: {
    question: "What is England's original language?",
    correctAnswer: 'Celtic',
    wrongAnswers: ['English', 'Latin', 'Irish']
  },
  41: {
    question: 'Where did Roald Dahl make his break?',
    correctAnswer: 'Playboy',
    wrongAnswers: ['Someone Like You', 'The Landlady', 'Skin']
  },
  42: {
    question: 'What is interesting about Playboy?',
    correctAnswer: 'Literature in Playboy were of high quality',
    wrongAnswers: [
      'The images in Playboy were photoshopped',
      'Playboy featured nudity',
      'The writing in Playboy was poor'
    ]
  },
  43: {
    question:
      'How could pieces like The World of Wrestling enter popular magazines?',
    correctAnswer: 'Philosophy is for the common people in France',
    wrongAnswers: [
      'The publishers liked the work',
      'It was a fluke',
      'Barthes was invited to write it'
    ]
  },
  44: {
    question: 'Roland Barthes was NOT intrigued by...',
    correctAnswer: 'The history of games',
    wrongAnswers: [
      'Confusion between nature and history',
      'Ideological nature of cultural practices',
      'How some practices are made to seem normal'
    ]
  },
  45: {
    question: "The 'logy' in 'ideology' also stands for",
    correctAnswer: 'Word',
    wrongAnswers: ['Sentence', 'God', 'Idea']
  },
  46: {
    question: 'Staging works due to the',
    correctAnswer: 'Suspension of disbelief',
    wrongAnswers: [
      'Excellent staging of wrestling',
      'Presence of staging being obvious',
      'Active participation of audience members'
    ]
  },
  47: {
    question: "Why is it slightly inaccurate to say 'ideologies'?",
    correctAnswer: 'An idea is the one and only truth',
    wrongAnswers: [
      'That is a spelling mistake',
      'There is no inaccuracy',
      'Only a single ideology exists in this world'
    ]
  },
  48: {
    question: 'What does a spectacle require?',
    correctAnswer: 'Spectators',
    wrongAnswers: ['Eyes', 'Lenses', 'Bodies']
  },
  49: {
    question:
      'How can a sign be expressed in terms of signifier and signified?',
    correctAnswer: 'Sign = Signifier / Signified',
    wrongAnswers: [
      'Sign = Signifier + Signified',
      'Sign = Signifier - Signified',
      'Sign = Signifier * Signified'
    ]
  },
  50: {
    question: "The word 'stereotype' originated from",
    correctAnswer: 'Printing presses',
    wrongAnswers: [
      'The band Stereopony',
      'Categorisation of stereos',
      'Psychology'
    ]
  },
  51: {
    question: 'What does a spectacle require?',
    correctAnswer: 'Staging',
    wrongAnswers: ['Eyes', 'Lenses', 'Bodies']
  },
  52: {
    question: "The word 'cliche' originated from",
    correctAnswer: 'The sound printing presses made',
    wrongAnswers: [
      "The word 'click'",
      "The word 'clutch'",
      'The sound birds made'
    ]
  },
  53: {
    question: 'What does Barthes associate Christian virtue with?',
    correctAnswer: 'Excess and grandiloquence',
    wrongAnswers: [
      'Frugality and simplicity',
      'Wrestling and violence',
      'High-class art'
    ]
  },
  54: {
    question: 'What was the type of wrestling referred to by Barthes?',
    correctAnswer: 'Catch-as-catch-can',
    wrongAnswers: ['Folkstyle', 'Freestyle', 'Greco-Roman']
  },
  55: {
    question: 'What makes horror movies so scary?',
    correctAnswer: 'The music',
    wrongAnswers: ['The lighting', 'The actors', 'The relatability']
  },
  56: {
    question: 'What does wrestling play to?',
    correctAnswer: "The spectators' justice",
    wrongAnswers: [
      'Sign systems',
      'Suspension of disbelief',
      "The spectators' desire of justice"
    ]
  },
  57: {
    question: 'What does wrestling play to?',
    correctAnswer: "The spectators' justice",
    wrongAnswers: [
      'Sign systems',
      'Suspension of disbelief',
      "The spectators' desire for violence"
    ]
  },
  58: {
    question: 'What can the hero never do?',
    correctAnswer: 'Seen to be excessive',
    wrongAnswers: [
      'Fight back against the enemy',
      'Break the law',
      'Ask for help'
    ]
  },
  59: {
    question: 'What can the hero never do?',
    correctAnswer: 'Seen to be excessive',
    wrongAnswers: [
      'Fight back against the enemy',
      'Break the law',
      'Ask for help'
    ]
  },
  60: {
    question: "The word 'event' in French has an implied meaning that it",
    correctAnswer: 'comes as a surprise',
    wrongAnswers: [
      'is expected',
      'is surprising in hindsight',
      'happens at a physical location'
    ]
  },
  61: {
    question: 'The play by Samuel Beckett mentioned in class is',
    correctAnswer: 'Waiting for Godot',
    wrongAnswers: ['Breath', 'Happy Days', 'Endgame']
  },
  62: {
    question: "The play 'Waiting for Godot' was brought up as",
    correctAnswer: "we discussed about 'not now'",
    wrongAnswers: [
      "we discussed about 'now'",
      "we discussed about 'idiotes'",
      "we discussed about 'polis'"
    ]
  },
  63: {
    question:
      'Who is the artist who followed a stranger to Venice and photographed him?',
    correctAnswer: 'Sophie Calle',
    wrongAnswers: ['Paul Auster', 'Fabio Balducci', 'Jessica Lott']
  },
  64: {
    question:
      'Which of these works by Sophie Calle was not mentioned in class?',
    correctAnswer: 'My All',
    wrongAnswers: [
      'The Address Book',
      'Suite Venitienne',
      'Take Care of Yourself'
    ]
  },
  65: {
    question:
      "In Metamorphosis by Kafka, what is a more accurate translation than 'cockroach'?",
    correctAnswer: 'vermin',
    wrongAnswers: ['bug', 'parasite', 'trash']
  },
  66: {
    question: 'Why is there a need to have prohibitions?',
    correctAnswer: 'You will have no enjoyment',
    wrongAnswers: [
      'You will enjoy yourself too much',
      'You will live too peacefully',
      'You will have no peace'
    ]
  },
  67: {
    question: 'What does the eco in economy stand for?',
    correctAnswer: 'Oikos; House',
    wrongAnswers: ['Eco; Environment', 'Eco; House', 'Oikos; Environment']
  },
  68: {
    question: 'What does the nomy in economy stand for?',
    correctAnswer: 'Nomos; Law',
    wrongAnswers: ['Nomos; Numbers', 'Numus; Numbers', 'Numus; Law']
  },
  69: {
    question: 'What is the premise of a social contract?',
    correctAnswer: 'You need to give up rights',
    wrongAnswers: [
      'You gain rights just by agreeing to it',
      'You get to take away rights of others',
      'You need to be alone'
    ]
  },
  70: {
    question: 'What is the opposite of Polis?',
    correctAnswer: 'Idiotes',
    wrongAnswers: ['Army', 'Country', 'Asty']
  },
  71: {
    question: 'What is not a question asked at Greek gates?',
    correctAnswer: 'What is the name of your mother?',
    wrongAnswers: [
      'What is your name?',
      'Where are you from?',
      'What are you going to do?'
    ]
  },
  72: {
    question: "What is one meaning of 'limine' that was discussed?",
    correctAnswer: 'Where you meet strangers',
    wrongAnswers: [
      'Where you meet family members',
      'Where you meet friends',
      'Where you meet leaders'
    ]
  },
  73: {
    question: 'What does bureaucracy mean?',
    correctAnswer: 'Power of the office',
    wrongAnswers: ['Power of the crowd', 'Power of god', 'Power of self']
  },
  74: {
    question: 'What does democracy mean mean?',
    correctAnswer: 'Power of the crowd',
    wrongAnswers: ['Power of the office', 'Power of god', 'Power of self']
  },
  75: {
    question: 'What is not an effect of bureaucracy discussed?',
    correctAnswer: 'Weakens employee morale and commitment',
    wrongAnswers: [
      'Dispersal of power across offices',
      'No way to establish connections',
      'No clear or single enemy'
    ]
  },
  76: {
    question: 'For law to be universal, it has to',
    correctAnswer: 'function as an idea',
    wrongAnswers: [
      'have a manifestation',
      'have many versions',
      'be contextualised'
    ]
  },
  77: {
    question: 'What does the hap in happiness mean?',
    correctAnswer: 'Chance',
    wrongAnswers: ['Final', 'Positive', 'Emotion']
  },
  78: {
    question: 'What does contentment mean?',
    correctAnswer: 'Recognising good',
    wrongAnswers: ['Recognising evil', 'Feeling good', 'Feeling evil']
  },
  79: {
    question: "What does 'daimon' in endaimon stand for?",
    correctAnswer: 'Recognition',
    wrongAnswers: ['Feeling', 'Evil', 'Good']
  },
  80: {
    question: 'Foucault was very focused on bodies and...',
    correctAnswer: 'how power affects bodies',
    wrongAnswers: [
      'how beautiful bodies are defined',
      'how bodies shape societies',
      'contentment'
    ]
  },
  81: {
    question: 'What is a powerful surveillance device discussed?',
    correctAnswer: 'Public opinion',
    wrongAnswers: ['Security cameras', 'Motion sensors', 'Whiteboard magnets']
  },
  82: {
    question: 'If there is no train, then there are no',
    correctAnswer: 'train accidents',
    wrongAnswers: ['shadows of trains', 'railways', 'train cargo']
  },
  83: {
    question: 'What is often the start of resistance?',
    correctAnswer: 'Desire',
    wrongAnswers: ['Oppression', 'Bodies', 'Power']
  },
  84: {
    question: 'What is the meaning of panopto?',
    correctAnswer: 'All-seeing',
    wrongAnswers: ['All-knowing', 'All-being', 'All-powerful']
  },
  85: {
    question: 'What does evidence mean?',
    correctAnswer: 'To make visible',
    wrongAnswers: ['Proof', 'To make invisible', 'Highly obvious']
  },
  86: {
    question: 'How does torture work?',
    correctAnswer: 'Turn your body against yourself',
    wrongAnswers: [
      'Destroy your body and mind',
      'Destroy your mind',
      'Turn your mind against yourself'
    ]
  },
  87: {
    question:
      'Which work of Deleuze and Guattari did not change post-structuralism?',
    correctAnswer: 'What is Philosophy?',
    wrongAnswers: ['A Thousand Plateaus', 'Anti-Oedipus']
  },
  88: {
    question: 'Legal death...',
    correctAnswer: 'puts you in the State of Nature',
    wrongAnswers: [
      'means you are really dead',
      'is when you are accidentally ruled as dead',
      'is the same as capital punishment'
    ]
  },
  89: {
    question: 'Foucault looked at snipping the snares of power...',
    correctAnswer: 'without simply replacing those who were in power',
    wrongAnswers: [
      'and replacing those who were in power',
      'and killing those who were in power',
      'without killing those who were in power'
    ]
  },
  90: {
    question: 'What is scary about corporations today?',
    correctAnswer: 'They have the same legal rights as a human being',
    wrongAnswers: [
      'They have a soul',
      'They have power over human beings',
      'They are prioritised over human beings'
    ]
  },
  91: {
    question: 'How did we describe Capitalism in class?',
    correctAnswer: 'It is schizophrenic',
    wrongAnswers: [
      'It only works in a single context',
      'It only works in specific contexts',
      'It has a fixed essence'
    ]
  },
  92: {
    question: 'What is Paul Virilio known for?',
    correctAnswer: 'Writing on how speed changed warfare',
    wrongAnswers: [
      'Writing on how power changed warfare',
      'Writing on how warfare changed speed',
      'Writing on how warfare changed power'
    ]
  },
  93: {
    question: 'Using the bunker analogy, sovereignty is like...',
    correctAnswer: 'a single bunker',
    wrongAnswers: [
      'a system of bunkers',
      'a backup bunker',
      'a collapsed bunker'
    ]
  },
  94: {
    question:
      'What does our education system end up doing with modular credits?',
    correctAnswer: 'Equating the value of all activities',
    wrongAnswers: [
      'Motivating students to work for rewards',
      'Setting expectations on amount of effort needed',
      'Evaluate students based on credits'
    ]
  },
  95: {
    question: 'What can a watchword do?',
    correctAnswer: 'Keep you in and out of an enclosure',
    wrongAnswers: [
      'Watch you',
      'Act as a password of class',
      'Act as a private password'
    ]
  },
  96: {
    question: 'What is a good reply suggested by Dr Jeremy Fernando?',
    correctAnswer: 'I would prefer not to',
    wrongAnswers: ['I would prefer to', 'I prefer not to', 'I prefer to']
  },
  97: {
    question: 'What is the religion Manichaeism about?',
    correctAnswer: 'Struggle between good and evil',
    wrongAnswers: [
      'Their God Manichae',
      'Belief in the Greek Gods',
      'Unity between good and evil'
    ]
  },
  98: {
    question: 'What does irony require?',
    correctAnswer: 'Distance',
    wrongAnswers: ['A good sense of humor', 'Iron', 'Contrast']
  },
  99: {
    question: 'If there is no clear product, then the product is likely',
    correctAnswer: 'You',
    wrongAnswers: ['Free', 'Excellent', 'Service-based']
  },
  100: {
    question: 'What was Jean Baudrillard interested in?',
    correctAnswer: 'Messing with structures',
    wrongAnswers: ['Enforcing structures', 'Power and bodies', 'Sign systems']
  },
  101: {
    question: 'Graphi meant',
    correctAnswer: 'Staining',
    wrongAnswers: ['Art', 'Graffiti', 'Scratch out']
  },
  102: {
    question: 'Scribble meant',
    correctAnswer: 'Scratch out',
    wrongAnswers: ['Art', 'Writing', 'Staining']
  },
  103: {
    question: 'The French May 68 incident started due to',
    correctAnswer: 'an argument about the dorms',
    wrongAnswers: [
      'an argument about the classrooms',
      'an argument about the toilets',
      'an argument about the dining halls'
    ]
  },
  104: {
    question: 'What is one thing that the President or King can do?',
    correctAnswer: 'Pardon',
    wrongAnswers: [
      'Change the laws',
      'Give capital punishment',
      'Stop the spread of coronavirus'
    ]
  },
  105: {
    question: 'Immanuel Kant believed that if you break the law, you deserve',
    correctAnswer: 'to die',
    wrongAnswers: ['to live', 'a second chance', 'education']
  },
  106: {
    question: 'The word conspire stems from',
    correctAnswer: 'Breathing together',
    wrongAnswers: ['Living together', 'Studying together', 'Partying together']
  },
  107: {
    question: 'What does the word Manifesto mean?',
    correctAnswer: 'To make real',
    wrongAnswers: ['Final words', 'Mission statement', 'Public declaration']
  },
  108: {
    question: 'What is it that brings an idea to the world?',
    correctAnswer: 'Media',
    wrongAnswers: ['Actions', 'People', 'Painting']
  },
  109: {
    question: "What contention did Donna have with the word 'tool'?",
    correctAnswer: 'Implies that it is being used',
    wrongAnswers: [
      'Implies that it is useless',
      'Implies that it is usable',
      'Implies that it is useful'
    ]
  },
  110: {
    question:
      'What did Dr Jeremy Fernando use to demonstrate the reduction of objects?',
    correctAnswer: 'Pen',
    wrongAnswers: ['Paper', 'Pencil', 'Eraser']
  },
  111: {
    question: 'How can a state silently censor a newspaper?',
    correctAnswer: 'Stop their supply of pulp',
    wrongAnswers: [
      'Stop their supply of ink',
      'Pass laws censoring them',
      'Arrest the publishers'
    ]
  },
  112: {
    question: 'If you were a boss last time, you would',
    correctAnswer: 'Have a phone',
    wrongAnswers: ['Have no phone', 'Have a home number', 'Have no home number']
  },
  113: {
    question: 'If you are a boss now, you would',
    correctAnswer: 'Have no phone',
    wrongAnswers: ['Have a phone', 'Have a home number', 'Have no home number']
  },
  114: {
    question:
      'What did Donna Haraway feel was a problem with Western Philosophy?',
    correctAnswer: 'Reduction of objects',
    wrongAnswers: [
      'Reduction of people',
      'Reduction of animals',
      'Reduction of subjects'
    ]
  },
  115: {
    question: 'What is not a way to know that a wrestler is a bad person?',
    correctAnswer: 'Smell',
    wrongAnswers: ['Bodies', 'Gestures', 'Consistency']
  },
  116: {
    question: 'What makes a watchword work?',
    correctAnswer: 'Very few people should know it',
    wrongAnswers: [
      'Everyone should know it',
      'The elite should know it',
      'The peasants should know it'
    ]
  },
  117: {
    question: 'Why is the Scales of Justice strange?',
    correctAnswer: 'It is balanced even with a feather on it',
    wrongAnswers: [
      'It is not balanced',
      'It is held by Lady Justice',
      'It is made out of iron'
    ]
  },
  118: {
    question: 'Which work of Sophie Calle was about a letter from her ex?',
    correctAnswer: 'Take Care of Yourself',
    wrongAnswers: ['The Address Book', 'Suite Venitienne', 'My All']
  },
  119: {
    question: 'Which work of Sophie Calle was about her calling random people?',
    correctAnswer: 'The Address Book',
    wrongAnswers: ['Take Care of Yourself', 'Suite Venitienne', 'My All']
  },
  120: {
    question: 'Which of the following is a character in Waiting for Godot?',
    correctAnswer: 'Estragon',
    wrongAnswers: ['Putin', 'Eragon', 'Samuel']
  },
  121: {
    question: 'Who watches over the ancient Greek gates?',
    correctAnswer: 'Zeus',
    wrongAnswers: ['Apollo', 'Hera', 'Hermes']
  },
  122: {
    question: 'Foucalt believed that...',
    correctAnswer: 'thought cannot be separated from body',
    wrongAnswers: [
      'thought is separate from body',
      'thought can exist without body',
      'body can exist without thought'
    ]
  },
  123: {
    question: 'What do jokes require?',
    correctAnswer: 'Stereotypes',
    wrongAnswers: ['Humour', 'Speaking skills', 'Context']
  },
  124: {
    question: 'Nothingless is',
    correctAnswer: 'Prelanguage',
    wrongAnswers: ['Negation of a thing', 'No thing', 'Lack of thingness']
  },
  125: {
    question: 'NUS is staying relevant in the control society with its',
    correctAnswer: 'Centre for Future-Ready Graduates',
    wrongAnswers: [
      'University Cultural Centre',
      'Student Services Centre',
      'University Health Centre'
    ]
  },
  126: {
    question: 'How did people overcome battering rams?',
    correctAnswer: 'They realised horses like to charge into empty space',
    wrongAnswers: [
      'They realised horses could be easily shot down',
      'They realised horses could be easily chased down and killed',
      'They realised horses could be lured with food'
    ]
  },
  127: {
    question: 'Did Hanming enjoy this module?',
    correctAnswer: 'Yes',
    wrongAnswers: []
  }
};

const getQuestionAtId = id => {
  if (!Object.prototype.hasOwnProperty.call(questions, id)) {
    throw new Error("Can't find a question!");
  }
  return questions[id];
};

export default questions;

export { getQuestionAtId };
