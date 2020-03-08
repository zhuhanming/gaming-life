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
  }
};

const getQuestionAtId = id => {
  if (!Object.prototype.hasOwnProperty.call(questions, id)) {
    throw new Error("Can't find question!");
  }
  return questions[id];
};

export default questions;

export { getQuestionAtId };
