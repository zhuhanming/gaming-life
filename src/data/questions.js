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
