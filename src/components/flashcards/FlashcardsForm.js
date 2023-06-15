import React, { useState } from "react";
import Select from 'react-select';

function FlashcardsForm({ topicOptions, topic, difficulty, handleTopicChange, handleDifficultyChange, handleStartClick }) {
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="privacy-policy">
      {showForm ? (
        <div>
          <label htmlFor="topic-select">Topic:</label>
          <Select
  id="topic-select"
  options={topicOptions}
  onChange={handleTopicChange}
  value={topicOptions.find(option => option.value === topic)}
/>
          <label htmlFor="difficulty-select">Difficulty:</label>
<Select
  id="difficulty-select"
  options={[
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ]}
  onChange={handleDifficultyChange}
  value={difficulty}
/>

          <button onClick={handleStartClick}>Start</button>
        </div>
      ) : (
        <button onClick={toggleForm}>Show Form</button>
      )}
    </div>
  );
}

export default FlashcardsForm;


