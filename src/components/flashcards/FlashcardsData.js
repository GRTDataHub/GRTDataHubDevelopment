const FlashcardsData = () => {

  const topicOptions = [
    { value: 'math', label: 'Math' },
    { value: 'history', label: 'History' },
    { value: 'science', label: 'Science' },
  ];
  
  const difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];
  
  const questions = [
    {      
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 2+2?',
      answer: '4',
    },
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 4+2?',
      answer: '6',
    },
    {
      topic: 'math',
      difficulty: 'easy',
      question: 'What is 6-3?',
      answer: '3',
    },
    {
      topic: 'history',
      difficulty: 'medium',
      question: 'Who was the first president of the United States?',
      answer: 'George Washington',
    },
    {
      topic: 'science',
      difficulty: 'hard',
      question: 'What is the largest organ in the human body?',
      answer: 'Skin',
    },
  ];

  return {
    topicOptions,
    difficultyOptions,
    questions,
  };
};

export default FlashcardsData;
