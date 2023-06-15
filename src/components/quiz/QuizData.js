const QuizData = () => {
  const topicOptions = [
    { value: 'math', label: 'Math' },
    { value: 'history', label: 'History' },
    { value: 'science', label: 'Science' },
  ];

  const questions = [
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 2+2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
      wrongAnswerPopup: 'Oops! The correct answer is 4.',
    },
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 4+2?',
      options: ['3', '4', '5', '6'],
      answer: '6',
      wrongAnswerPopup: 'Oops! The correct answer is 6.',
    },
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 6-3?',
      options: ['3', '4', '5', '6'],
      answer: '3',
      wrongAnswerPopup: 'Oops! The correct answer is 3.',
    },
    {
      topic: 'history',
      difficulty: 'medium',
      question: 'Who was the first president of the United States?',
      options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John F. Kennedy'],
      answer: 'George Washington',
      wrongAnswerPopup: 'Oops! The correct answer is George Washington.',
    },
    {
      topic: 'science',
      difficulty: 'hard',
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Brain', 'Skin', 'Liver'],
      answer: 'Skin',
      wrongAnswerPopup: 'Oops! The correct answer is Skin.',
    },
  ];

  return {
    topicOptions,
    questions,
  };
};

export { QuizData };
