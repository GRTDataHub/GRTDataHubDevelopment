import React, { useState, useEffect } from "react";
import "../../App.css";

function FinalExamForm({
  topic,
  difficulty,
  topicOptions,
  handleName,
  handleRoleChange,
  handleTopicChange,
  handleDifficultyChange,
  handleStartClick,
}) {
  const DEFAULT_TOPIC = "";
  const DEFAULT_DIFFICULTY = "";
  const [formComplete, setFormComplete] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [difficultySelected, setDifficultySelected] = useState(false);
  const [roleSelected, setRoleSelected] = useState(false);
  const [topicSelected, setTopicSelected] = useState(false);

  const handleStartClickButton = (e) => {
    e.preventDefault();
    if (topic !== DEFAULT_TOPIC && difficulty !== DEFAULT_DIFFICULTY && name !== "" && role !== "") {
      handleStartClick();
    }
  };

  useEffect(() => {
    if (topic !== DEFAULT_TOPIC && difficulty !== DEFAULT_DIFFICULTY && name !== "" && role !== "") {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [name, role, topic, difficulty]);

  const handleSelectDifficulty = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficultySelected(selectedDifficulty !== DEFAULT_DIFFICULTY);
    handleDifficultyChange(e);
  };

  const handleSelectRole = (e) => {
    const selectedRole = e.target.value;
    setRoleSelected(selectedRole !== "");
    setRole(selectedRole);
    handleRoleChange(e);
  };

  const handleSelectTopic = (e) => {
    const selectedTopic = e.target.value;
    setTopicSelected(selectedTopic !== DEFAULT_TOPIC);
    handleTopicChange(e);
  };

  return (
    <form className="quiz-form">
      <h2 className="text-center quiz-title">Are you Advocate ready?</h2>
      <h5 className="text-center quiz-title">The time has come to choose the role you wish to apply for. Take the exam and receive a final exam score, which will be available in a downloadable certificate. Good luck!</h5>
      <br></br><br></br>
      {!roleSelected && (
        <div className="form-group text-center">
          <label htmlFor="role" className="quiz-form-label">
            Please select the role that you wish to pursue.
          </label>
        </div>
      )}
      <div className="form-group text-center">
        <select
          className="form-control quiz-form-input"
          id="role"
          value={role}
          onChange={handleSelectRole}
          required
        >
          <option value="">Select a role</option>
          <option value="Event Evangelist">Event Evangelist</option>
          <option value="Content Creator">Content Creator</option>
          <option value="Text Translator">Text Translator</option>
          <option value="Community Care">Community Care</option>
          <option value="Technical Teacher">Technical Teacher</option>
          <option value="Web3 Welcomer">Web3 Welcomer</option>
        </select>
      </div>
      <br></br>
      {roleSelected && (
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
          <br></br>
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
        </div>
      )}
      <br></br>

      {difficultySelected && (
        <div className="form-group">
          <input
            type="text"
            className="form-control quiz-form-input"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleName(e);
            }}
            required
            placeholder="Please enter your name for the certificate"
          />
        </div>
      )}

      <br />
      <br />

      {formComplete && (
        <div className="text-center Quiz-button QB-about-page-subtitle">
          <a
            className="quiz-link"
            disabled={
              !(topic !== DEFAULT_TOPIC && difficulty !== DEFAULT_DIFFICULTY && name !== "" && role !== "")
            }
            onClick={handleStartClickButton}
          >
            <span></span>
            <span></span>
            Start Quiz
          </a>
        </div>
      )}
    </form>
  );
}

export default FinalExamForm;
