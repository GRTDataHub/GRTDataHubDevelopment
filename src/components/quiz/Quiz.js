import React, { useState, useEffect } from 'react';
import '../../App.css';
import QuizForm from './QuizForm';
import { QuizData } from './QuizData';
import Switch from 'react-switch';

const Quiz = () => {
  const DEFAULT_TOPIC = '';
  const DEFAULT_DIFFICULTY = '';

  const [showWrongAnswerPopup, setShowWrongAnswerPopup] = useState(false);
  const [topic, setTopic] = useState(DEFAULT_TOPIC);
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuizForm, setShowQuizForm] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScoreTimer, setShowScoreTimer] = useState(true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
    setShowQuizForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedAnswer = event.target.elements["answer"].value;
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
      if (showWrongAnswerPopup && selectedOption !== currentQuestion.answer) {
        setShowWrongAnswerPopup(true);
        return;
      }
    }

    setSelectedOption(null);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex >= filteredQuestions.length) {
      setIsTimerRunning(false);
      setCurrentQuestionIndex(null);
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const handleClosePopup = () => {
    setShowWrongAnswerPopup(false);
  };

  const handlePlayAgainClick = () => {
    setTopic(DEFAULT_TOPIC);
    setDifficulty(DEFAULT_DIFFICULTY);
    setShowQuizForm(true);
    setCurrentQuestionIndex(null);
    setScore(0);
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours} Hour${hours > 1 ? 's' : ''}, ${minutes} Minute${minutes > 1 ? 's' : ''}, and ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} Minute${minutes > 1 ? 's' : ''} and ${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
    } else if (remainingSeconds > 0) {
      return `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;
    } else {
      return '0 Seconds';
    }
  };

  const quizData = QuizData();

  const filteredQuestions = quizData.questions.filter(
    (question) =>
      question.topic === topic && question.difficulty === difficulty
  );

  const handleToggleSwitch = () => {
    setShowScoreTimer(!showScoreTimer);
  };

  const handleTogglePopupSwitch = () => {
    setShowWrongAnswerPopup(!showWrongAnswerPopup);
  };

  return (
    <div className="quiz-container">
      {showQuizForm && (
        <QuizForm
          topic={topic}
          difficulty={quizData.difficulty}
          topicOptions={quizData.topicOptions}
          handleTopicChange={handleTopicChange}
          handleDifficultyChange={handleDifficultyChange}
          handleStartClick={handleStartClick}
        />
      )}

      {!showQuizForm && currentQuestionIndex !== null && (
        <div className="quiz-question-container">
            <p className="quiz-status">Question {currentQuestionIndex + 1} of {filteredQuestions.length}</p>
            <div className="slider-container">
              <label htmlFor="popup-switch" className={`slider-label ${showWrongAnswerPopup ? 'on' : 'off'}`} onClick={handleTogglePopupSwitch}>
                <span className="quiz-status">{showWrongAnswerPopup ? 'Show wrong answer pop up' : 'Hide wrong answer pop up'}</span>
              </label>
              <div className="toggle-switch-container">
                <Switch
                  checked={showWrongAnswerPopup}
                  onChange={handleTogglePopupSwitch}
                  onColor="#2196f3"
                  offColor="#ccc"
                  onHandleColor="#fff"
                  offHandleColor="#fff"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={24}
                  width={40}
                  className="toggle-switch"
                />
              </div>
            <br></br>
            <h2 className="quiz-question">{filteredQuestions[currentQuestionIndex].question}</h2>
          </div>

          {showWrongAnswerPopup && selectedOption !== null && selectedOption !== filteredQuestions[currentQuestionIndex].answer && (
            <div className={`wrong-answer-popup ${showWrongAnswerPopup ? 'show' : ''}`}>
              <p className="wrong-answer-message">
                {filteredQuestions[currentQuestionIndex].wrongAnswerPopup}
              </p>
              <button className="popup-button" onClick={handleClosePopup}>
                Continue
              </button>
            </div>
          )}

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

          <div className="quiz-footer">
            <Switch
              checked={showScoreTimer}
              onChange={handleToggleSwitch}
              onColor="#2196f3"
              offColor="#ccc"
              onHandleColor="#fff"
              offHandleColor="#fff"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              height={24}
              width={40}
              className="toggle-switch"
            />

            {showScoreTimer && (
              <>
                <div className="quiz-timer">
                  <span className="quiz-timer-label">Timer: </span> {formatTime(timer)}
                </div>
                <div className="quiz-score">
                  <span className="quiz-score-label">Score: </span> {score} / {filteredQuestions.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {!showQuizForm && currentQuestionIndex === null && (
        <div className="quiz-results-container">
          <h2 className="quiz-results-header">Results</h2>
          <p className="quiz-results-text">
            You scored {score} / {filteredQuestions.length} correct answers within {formatTime(timer)} in the {topic} quiz.
          </p>
          <button type="button" className="btn btn-primary mt-3" onClick={handlePlayAgainClick}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
