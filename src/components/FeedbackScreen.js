import React from "react";
import "../QuizGame.css";

const FeedbackScreen = ({ score, feedback, handleNextQuestion }) => {
  return (
    <div className="game-container">
      <p className="game-feedback">{feedback}</p>
      <p className="game-score">Score: {score}</p>
      <button className="btn" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default FeedbackScreen;
