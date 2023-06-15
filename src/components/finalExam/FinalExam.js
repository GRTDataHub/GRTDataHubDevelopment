import React, { useState, useEffect } from 'react';
import '../../App.css';
import FinalExamForm from './FinalExamForm';
import { FinalExamData } from './FinalExamData';


const FinalExam = () => {
const DEFAULT_TOPIC = '';
const DEFAULT_DIFFICULTY = '';

const [name, setName] = useState('');
const [topic, setTopic] = useState(DEFAULT_TOPIC);
const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
const [score, setScore] = useState(0);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
const [showFinalExamForm, setShowFinalExamForm] = useState(true);
const [timer, setTimer] = useState(0);
const [isTimerRunning, setIsTimerRunning] = useState(false);
const [selectedOption, setSelectedOption] = useState(null);
const [role, setRole] = useState('');

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};

const handleName = (event) => {
const newName = event.target.value;
setName(newName);
};

const handleTopicChange = (event) => {
  const newTopic = event.target.value;
  setTopic(newTopic);
  setSelectedOption(null);
  setDifficulty(DEFAULT_DIFFICULTY);
  setCurrentQuestionIndex(null);
  setScore(0);
};

const handleDifficultyChange = (event) => {
  const newDifficulty = event.target.value;
  setDifficulty(newDifficulty);
  setSelectedOption(null);
  setCurrentQuestionIndex(null);
  setScore(0);
};


const handleRoleChange = (event) => {
  const newRole = event.target.value;
  setRole(newRole);
};


useEffect(() => {
if (isTimerRunning) {
const interval = setInterval(() => {
setTimer((prevTimer) => prevTimer + 1);
}, 1000);
return () => clearInterval(interval);
}
}, [isTimerRunning]);

const handleStartClick = () => {
setIsTimerRunning(true);
setCurrentQuestionIndex(0);
setScore(0);
setShowFinalExamForm(false);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const selectedAnswer = event.target.elements["answer"].value;
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.answer;

  if (isCorrect) {
    setScore((prevScore) => prevScore + 1);
  }

  const nextQuestionIndex = currentQuestionIndex + 1;
  if (nextQuestionIndex >= filteredQuestions.length) {
    setIsTimerRunning(false);
    setCurrentQuestionIndex(null);
  } else {
    setCurrentQuestionIndex(nextQuestionIndex);
  }
  setSelectedOption(null);
};


const handlePlayAgainClick = () => {
setName("");
setTopic(DEFAULT_TOPIC);
setDifficulty(DEFAULT_DIFFICULTY);
setShowFinalExamForm(true);
setCurrentQuestionIndex(null);
setScore(0);
setTimer(0);
};

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours} Hour${hours > 2 ? 's' : ''}, ${minutes} Minute${minutes > 1 ? 's' : ''}, and ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
  } else if (hours === 1) {
    return `${hours} Hour, ${minutes} Minute${minutes > 1 ? 's' : ''}, and ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    return `${minutes} Minute${minutes > 1 ? 's' : ''} and ${remainingSeconds < 10 ? '' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
  } else if (remainingSeconds > 0) {
    return `${remainingSeconds < 10 ? '' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
  } else {
    return '0 Seconds';
  }
};

const finalExamData = FinalExamData();

const filteredQuestions = finalExamData.questions.filter(
  (question) =>
    question.topic === topic && question.difficulty === difficulty
);

return (
<div className="quiz-container">
  {showFinalExamForm && (
    <FinalExamForm
      topic={topic}
      difficulty={finalExamData.difficulty}
      topicOptions={finalExamData.topicOptions}
      handleName={handleName}
      handleRoleChange={handleRoleChange}
      handleTopicChange={handleTopicChange}
      handleDifficultyChange={handleDifficultyChange}
      handleStartClick={handleStartClick}
    />
  )}

  {!showFinalExamForm && currentQuestionIndex !== null && (
    <div className="quiz-question-container">
      <div className="quiz-header">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-bar-inner" style={{ width: `${(currentQuestionIndex + 1) / filteredQuestions.length * 100}%` }} />
        </div>
        <br></br>
        <p className="quiz-status">Question {currentQuestionIndex + 1} of {filteredQuestions.length}</p>
        <br></br>
        <h2 className="quiz-question">{filteredQuestions[currentQuestionIndex].question}</h2>
      </div>

      <form className="quiz-answer-form" onSubmit={handleSubmit}>
      {filteredQuestions[currentQuestionIndex].options.map((option, index) => (
        <div key={index} className="quiz-option">
          <input
            type="radio"
            className="form-check-input"
            id={`option-${index}`}
            name="answer"
            value={option}
            required
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label
            className={`form-check-label ${selectedOption === option ? "selected" : ""}`}
            htmlFor={`option-${index}`}
          >
            {option}
          </label>
        </div>
      ))}
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
    </div>
  )}

  {!showFinalExamForm && currentQuestionIndex === null && (
    <div className="quiz-results-container">
      <h2 className="quiz-results-header">Results</h2>
      <p className="quiz-results-text">
        Congratulations {name}!
      </p>
      <p className="quiz-results-text">You scored {score} / {filteredQuestions.length} correct answers within {formatTime(timer)} in the {topic} quiz.</p>
      <p className="quiz-results-text">
        You wish to pursue the {role} role within the Graph Advocates.   
      </p>
      <button type="button" className="btn btn-primary mt-3" onClick={handlePlayAgainClick}>
        Play Again
      </button>
    </div>
  )}
</div>


);
};

export default FinalExam;






