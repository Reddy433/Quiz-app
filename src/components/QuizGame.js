import React, { useState } from "react";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import EndScreen from "./EndScreen";
import "../QuizGame.css";


const questions = {
  easy: [
    {
      type: "multiple-choice",
      question: "Which of the following is a JavaScript framework?",
      options: ["React", "CSS", "HTML", "Python"],
      correctAnswer: "React",
    },
    {
      type: "true-false",
      question: "JavaScript is a compiled language.",
      correctAnswer: "false",
    },
    {
      type: "text-input",
      question: "What does DOM stand for?",
      correctAnswer: "Document Object Model",
    },
  ],
  medium: [
    {
      type: "multiple-choice",
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Netscape", "Google", "Oracle"],
      correctAnswer: "Netscape",
    },
    {
      type: "true-false",
      question: "JavaScript supports automatic memory management.",
      correctAnswer: "true",
    },
    {
      type: "text-input",
      question: "What keyword is used to define a constant in JavaScript?",
      correctAnswer: "const",
    },
  ],
  hard: [
    {
      type: "multiple-choice",
      question:
        "Which method is used to add an element to the end of an array in JavaScript?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      type: "true-false",
      question: "JavaScript is single-threaded.",
      correctAnswer: "true",
    },
    {
      type: "text-input",
      question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
      correctAnswer: "false",
    },
  ],
};

const levels = ["easy", "medium", "hard"];
const scores = { easy: 10, medium: 20, hard: 30 };

const QuizGame = () => {
  const [level, setLevel] = useState("easy");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    if (answer === questions[level][questionIndex].correctAnswer) {
      setScore(score + scores[level]);
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions[level].length - 1) {
      setQuestionIndex(questionIndex + 1);
      setUserAnswer("");
      setFeedback("");
    } else {
      if (level === "hard") {
        setGameOver(true);
      } else {
        if (correctAnswers >= questions[level].length / 2) {
          setLevel(levels[levels.indexOf(level) + 1]);
          setQuestionIndex(0);
          setCorrectAnswers(0);
        } else {
          setGameOver(true);
        }
      }
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleRestart = () => {
    setLevel("easy");
    setQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setUserAnswer("");
    setFeedback("");
    setGameOver(false);
    setGameStarted(false); // Reset gameStarted to show the start screen again
  };

  if (gameOver) {
    let message =
      level === "hard" && correctAnswers >= questions[level].length / 2
        ? "Congratulations! You've completed all levels!"
        : `You failed at the ${level} level. Try again!`;

    return (
      <EndScreen
        score={score}
        message={message}
        handleRestart={handleRestart}
      />
    );
  }

  if (!gameStarted) {
    return <StartScreen handleStartGame={handleStartGame} />;
  }

  const question = questions[level][questionIndex];

  return (
    <QuestionScreen
      level={level}
      questionIndex={questionIndex}
      question={question}
      userAnswer={userAnswer}
      handleAnswer={handleAnswer}
      handleNextQuestion={handleNextQuestion}
      score={score}
      feedback={feedback}
    />
  );
};

export default QuizGame;
