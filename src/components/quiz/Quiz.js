import React, { useState } from 'react';
import '../../App.css';

const Quiz = () => {
  const DEFAULT_TOPIC = '';
  const DEFAULT_DIFFICULTY = '';
  
  const [name, setName] = useState('');
  const [topic, setTopic] = useState(DEFAULT_TOPIC);
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [showQuizForm, setShowQuizForm] = useState(true);

  const handleName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleTopicChange = (event) => {
    const newTopic = event.target.value;
    setTopic(newTopic);
    setDifficulty(DEFAULT_DIFFICULTY);
    setCurrentQuestionIndex(null);
    setScore(0);
  };

  const handleDifficultyChange = (event) => {
    const newDifficulty = event.target.value;
    setDifficulty(newDifficulty);
    setCurrentQuestionIndex(null);
    setScore(0);
  };

  const handleStartClick = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowQuizForm(false);
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedAnswer = event.target.elements["answer"].value;
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex >= filteredQuestions.length) {
        setCurrentQuestionIndex(null);
      } else {
        setCurrentQuestionIndex(nextQuestionIndex);
      }
    } else {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex >= filteredQuestions.length) {
        setCurrentQuestionIndex(null);
      } else {
        setCurrentQuestionIndex(nextQuestionIndex);
      }
    }
  };
  


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

const filteredQuestions = questions.filter(
(question) =>
question.topic === topic && question.difficulty === difficulty
);

return (
<div className="privacy-policy">
{showQuizForm && (
<form className="quiz-form">
<h2>Are you Advocate Ready?</h2>
<div className="form-group">
<label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleName} required />
<select
           id="topic"
           value={topic}
           onChange={handleTopicChange}
         >
<option value={DEFAULT_TOPIC}>Select a topic</option>
{topicOptions.map((option) => (
<option key={option.value} value={option.value}>
{option.label}
</option>
))}
</select>
</div>
<div className="form-group">
<label htmlFor="difficulty">Difficulty</label>
<select
           id="difficulty"
           value={difficulty}
           onChange={handleDifficultyChange}
         >
<option value={DEFAULT_DIFFICULTY}>Select a difficulty</option>
<option value="easy">Easy</option>
<option value="medium">Medium</option>
<option value="hard">Hard</option>
</select>
</div>
<button
type="button"
disabled={topic === DEFAULT_TOPIC || difficulty === DEFAULT_DIFFICULTY}
onClick={handleStartClick}
>
Start
</button>
</form>
)}
  {!showQuizForm && currentQuestionIndex !== null && (
    <div className="quiz-question-container">
      <h2>{filteredQuestions[currentQuestionIndex].question}</h2>
      <form className="quiz-answer-form" onSubmit={handleSubmit}>
        {filteredQuestions[currentQuestionIndex].options.map(
          (option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={option}
                required
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          )
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  )}

  {!showQuizForm && currentQuestionIndex === null && (
    <div className="quiz-results-container">
      <h2>Results</h2>
      <p>
        Well done {name}! You scored {score} out of {filteredQuestions.length} correct
        answers.
      </p>
      <button type="button" onClick={() => setShowQuizForm(true)}>
        Play Again
      </button>
    </div>
  )}
</div>
);
};

export default Quiz;






