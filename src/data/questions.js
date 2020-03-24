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
