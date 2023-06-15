import React, { useState } from 'react';
import '../../App.css';
import FlashcardsForm from './FlashcardsForm';
import FlashcardsData from './FlashcardsData';

function FlipCard({ question, answer, flipped, onClick, showAnswer }) {
  return (
    <div className="flip-card" onClick={onClick}>
      <div className={`flip-card-inner${flipped ? ' flipped' : ''}`}>
        <div className="flip-card-front">
          <p>{question}</p>
        </div>
        <div className="flip-card-back">
          <p>{showAnswer ? answer : ''}</p>
        </div>
      </div>
    </div>
  );
}

function FlashCards() {
  const [topic, setTopic] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [showFlashcardsForm, setShowFlashcardsForm] = useState(true);

  const handleTopicChange = (selectedOption) => {
    setTopic(selectedOption.value);
  };

  const handleDifficultyChange = (selectedOption) => {
    setDifficulty(selectedOption.value);
  };

  const flashcardsData = FlashcardsData();

  const filteredQuestions = flashcardsData.questions.filter(
    (question) =>
      question.topic === topic && question.difficulty === difficulty
  );

  const handleStartClick = () => {
    setShowCards(true);
    setShowFlashcardsForm(false);
  };

  const handlePlayAgainClick = () => {
    setTopic(null);
    setDifficulty(null);
    setCurrentCardIndex(0);
    setShowFlashcardsForm(true);
    setShowCards(false);
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(true);
    setFlipped(!flipped);
  };

  const handleNextClick = () => {
    if (currentCardIndex < filteredQuestions.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
      setFlipped(false);
    }
  };

  const handlePrevClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
      setFlipped(false);
    }
  };

  return (
    <div className="flashcards-wrapper privacy-policy">
      <h1>Flash Cards</h1>
      {showFlashcardsForm && (
        <FlashcardsForm
          topicOptions={flashcardsData.topicOptions}
          handleTopicChange={handleTopicChange}
          difficultyOptions={flashcardsData.difficultyOptions}
          handleDifficultyChange={handleDifficultyChange}
          handleStartClick={handleStartClick}
        />
      )}
      {showCards && (
        <div className="flashcards-container">
          <div className="flashcards-controls">
            <p>Click on the question to reveal the answer.</p>
            <button onClick={handlePrevClick} disabled={currentCardIndex === 0}>
              Prev
            </button>
            <button onClick={handleNextClick} disabled={currentCardIndex === filteredQuestions.length - 1}>
              Next
            </button>
            <button onClick={handlePlayAgainClick}>Play Again</button>
          </div>
          <div className="flip-card-container">
            <FlipCard
              question={filteredQuestions[currentCardIndex].question}
              answer={filteredQuestions[currentCardIndex].answer}
              flipped={flipped}
        onClick={handleCardClick}
        showAnswer={showAnswer}
      />
    </div>
  </div>
)}
</div>
);
}

export default FlashCards;