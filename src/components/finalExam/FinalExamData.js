const FinalExamData = () => {

  const topicOptions = [    { value: 'math', label: 'Math' },    { value: 'history', label: 'History' },    { value: 'science', label: 'Science' },  ];
    
  const questions = [    {      topic: 'math',      difficulty: 'easy',      question: 'What is 2+2?',      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 4+2?',
      options: ['3', '4', '5', '6'],
      answer: '6',
    },
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 6-3?',
      options: ['3', '4', '5', '6'],
      answer: '3',
    },
    {
      topic: 'history',
      difficulty: 'medium',
      question: 'Who was the first president of the United States?',
      options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John F. Kennedy'],
      answer: 'George Washington',
    },
    {
      topic: 'science',
      difficulty: 'hard',
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Brain', 'Skin', 'Liver'],
      answer: 'Skin',
    },
  ];

  return {
    topicOptions,
    questions,
  };
};

export {FinalExamData};
