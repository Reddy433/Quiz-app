import React from "react";
import "../QuizGame.css";

const QuestionScreen = ({
  level,
  questionIndex,
  question,
  userAnswer,
  handleAnswer,
  handleNextQuestion,
  score,
  feedback,
}) => {
  return (
    <div className="game-container">
      <h1 className="game-title">Quiz Game</h1>
      <h2 className="game-level">Level: {level}</h2>
      <p className="game-question">
        Question {questionIndex + 1} of {question.length}
      </p>
      <p className="game-question-text">{question.question}</p>
      {question.type === "multiple-choice" && (
        <div className="game-options">
          {question.options.map((option, index) => (
            <label key={index} className="game-option">
              <input
                type="radio"
                name="option"
                value={option}
                checked={userAnswer === option}
                onChange={() => handleAnswer(option)}
                className="game-option-input"
              />
              {option}
            </label>
          ))}
        </div>
      )}
      {question.type === "true-false" && (
        <div className="game-options">
          <label className="game-option">
            <input
              type="radio"
              name="true-false"
              value="true"
              checked={userAnswer === "true"}
              onChange={() => handleAnswer("true")}
              className="game-option-input"
            />
            True
          </label>
          <label className="game-option">
            <input
              type="radio"
              name="true-false"
              value="false"
              checked={userAnswer === "false"}
              onChange={() => handleAnswer("false")}
              className="game-option-input"
            />
            False
          </label>
        </div>
      )}
      {question.type === "text-input" && (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => handleAnswer(e.target.value)}
          className="game-input"
          placeholder="Type your answer"
        />
      )}
      <button className="btn" onClick={handleNextQuestion}>
        Next Question
      </button>
      <p className="game-score">Score: {score}</p>
      <p className="game-feedback">{feedback}</p>
    </div>
  );
};

export default QuestionScreen;
