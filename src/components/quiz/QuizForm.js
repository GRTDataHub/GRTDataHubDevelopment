import React, { useState, useEffect } from "react";
import "../../App.css";

function QuizForm({
  topic,
  difficulty,
  topicOptions,
  handleTopicChange,
  handleDifficultyChange,
  handleStartClick,
}) {
  const DEFAULT_TOPIC = "";
  const DEFAULT_DIFFICULTY = "";
  const [formComplete, setFormComplete] = useState(false);
  const [difficultySelected, setDifficultySelected] = useState(false);
  const [topicSelected, setTopicSelected] = useState(false);

  const handleStartClickButton = (e) => {
    e.preventDefault();
    if (topic !== DEFAULT_TOPIC && difficulty !== DEFAULT_DIFFICULTY) {
      handleStartClick();
    }
  };

  useEffect(() => {
    if (topic !== DEFAULT_TOPIC && difficulty !== DEFAULT_DIFFICULTY) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [topic, difficulty]);

  const handleSelectDifficulty = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficultySelected(selectedDifficulty !== DEFAULT_DIFFICULTY);
    handleDifficultyChange(e);
  };

  const handleSelectTopic = (e) => {
    const selectedTopic = e.target.value;
    setTopicSelected(selectedTopic !== DEFAULT_TOPIC);
    handleTopicChange(e);
  };

  return (
    <form className="quiz-form">
      <h2 className="text-center quiz-title">Welcome to the Quiz helper page!</h2>
      <h5 className="text-center quiz-subtitle">Here, you can challenge yourself with quizzes on various Advocate-related topics to test your existing knowledge. If you come across a question you're unsure of, don't worry! We provide guidance to the right resources where you can find the answer and enhance your understanding for future quizzes.<br></br><br></br>At the top of the quiz, you'll find a helpful toggle switch. When enabled, it shows you when you get a question wrong, and a pop-up appears with the correct answer and additional content on how to find it. This feature is designed to assist your learning process and can be used whenever you need it.<br></br><br></br>At the bottom of the quiz, you'll find another toggle switch. It allows you to hide your time and score, replicating the experience of a final exam. Feel free to use it if you want to challenge yourself without distractions.<br></br><br></br>Let's begin the quiz and test your knowledge! Good luck!"</h5>
      <br></br><br></br>
      <div>
        {!topicSelected && (
          <div className="form-group">
            <label htmlFor="topic" className="quiz-form-label">
              Please select a Topic to be quizzed on.
            </label>
          </div>
        )}
        <div className="form-group">
          <select
            className="form-control quiz-form-input"
            id="topic"
            value={topic}
            onChange={handleSelectTopic}
            required
          >
            <option value={DEFAULT_TOPIC}>Select a topic</option>
            {topicOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <br />
        {topicSelected && !["easy", "medium", "hard"].includes(difficulty) && (
          <div className="form-group">
            {!difficultySelected && (
              <label htmlFor="difficulty" className="quiz-form-label">
                Please select a level of Difficulty.
              </label>
            )}
            <select
              className="form-control quiz-form-input"
              id="difficulty"
              value={difficulty}
              onChange={handleSelectDifficulty}
              required
            >
              <option value={DEFAULT_DIFFICULTY}>Select a difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        )}
        <br />
        <br />
        {topicSelected && difficultySelected && (
          <div className="text-center Quiz-button QB-about-page-subtitle">
            <a
              className="quiz-link"
              disabled={!formComplete}
              onClick={handleStartClickButton}
            >
              <span></span>
              <span></span>
              Start Quiz
            </a>
          </div>
        )}
      </div>
    </form>
  );
}

export default QuizForm;
