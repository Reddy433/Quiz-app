import React from "react";
import "../QuizGame.css";

const StartScreen = ({ handleStartGame }) => {
  return (
    <div className="game-container">
      <h1 className="game-title">Quiz Game</h1>
      <button className="btn" onClick={handleStartGame}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
