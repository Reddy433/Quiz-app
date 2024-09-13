import React from "react";
import "../QuizGame.css";

const EndScreen = ({ score, message, handleRestart }) => {
  return (
    <div className="game-container">
      <h1 className="game-title">Game Over!</h1>
      <p className="game-score">Your final score is: {score}</p>
      <p className="game-message">{message}</p>
      <button className="btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default EndScreen;
