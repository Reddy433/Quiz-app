// import React, { useState } from "react";
// import "./QuizGame.css"; // Import the CSS file

// const questions = {
//   easy: [
//     {
//       type: "multiple-choice",
//       question: "Which of the following is a JavaScript framework?",
//       options: ["React", "CSS", "HTML", "Python"],
//       correctAnswer: "React",
//     },
//     {
//       type: "true-false",
//       question: "JavaScript is a compiled language.",
//       correctAnswer: "false",
//     },
//     {
//       type: "text-input",
//       question: "What does DOM stand for?",
//       correctAnswer: "Document Object Model",
//     },
//   ],
//   medium: [
//     {
//       type: "multiple-choice",
//       question: "Which company developed JavaScript?",
//       options: ["Microsoft", "Netscape", "Google", "Oracle"],
//       correctAnswer: "Netscape",
//     },
//     {
//       type: "true-false",
//       question: "JavaScript supports automatic memory management.",
//       correctAnswer: "true",
//     },
//     {
//       type: "text-input",
//       question: "What keyword is used to define a constant in JavaScript?",
//       correctAnswer: "const",
//     },
//   ],
//   hard: [
//     {
//       type: "multiple-choice",
//       question:
//         "Which method is used to add an element to the end of an array in JavaScript?",
//       options: ["push()", "pop()", "shift()", "unshift()"],
//       correctAnswer: "push()",
//     },
//     {
//       type: "true-false",
//       question: "JavaScript is single-threaded.",
//       correctAnswer: "true",
//     },
//     {
//       type: "text-input",
//       question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
//       correctAnswer: "false",
//     },
//   ],
// };

// const levels = ["easy", "medium", "hard"];
// const scores = { easy: 10, medium: 20, hard: 30 };

// const QuizGame = () => {
//   const [level, setLevel] = useState("easy");
//   const [questionIndex, setQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [userAnswer, setUserAnswer] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [gameOver, setGameOver] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);

//   const handleAnswer = (answer) => {
//     setUserAnswer(answer);
//     if (answer === questions[level][questionIndex].correctAnswer) {
//       setScore(score + scores[level]);
//       setCorrectAnswers(correctAnswers + 1);
//       setFeedback("Correct!");
//     } else {
//       setFeedback("Incorrect!");
//     }
//   };

//   const handleNextQuestion = () => {
//     if (questionIndex < questions[level].length - 1) {
//       setQuestionIndex(questionIndex + 1);
//       setUserAnswer("");
//       setFeedback("");
//     } else {
//       if (level === "hard") {
//         setGameOver(true);
//       } else {
//         if (correctAnswers >= questions[level].length / 2) {
//           setLevel(levels[levels.indexOf(level) + 1]);
//           setQuestionIndex(0);
//           setCorrectAnswers(0);
//         } else {
//           setGameOver(true);
//         }
//       }
//     }
//   };

//   const handleStartGame = () => {
//     setGameStarted(true);
//   };

//   const handleRestart = () => {
//     setLevel("easy");
//     setQuestionIndex(0);
//     setScore(0);
//     setCorrectAnswers(0);
//     setUserAnswer("");
//     setFeedback("");
//     setGameOver(false);
//     setGameStarted(false); // Reset gameStarted to show the start screen again
//   };

//   const getPerformanceMessage = () => {
//     if (level === "hard" && correctAnswers >= questions[level].length / 2) {
//       return "Congratulations! You've completed all levels!";
//     } else {
//       return `You failed at the ${level} level. Try again!`;
//     }
//   };

//   if (gameOver) {
//     return (
//       <div className="game-container">
//         <h1 className="game-title">Game Over!</h1>
//         <p className="game-message">{getPerformanceMessage()}</p>
//         <p className="game-score">Your final score is: {score}</p>
//         <button className="btn" onClick={handleRestart}>
//           Restart
//         </button>
//       </div>
//     );
//   }

//   if (!gameStarted) {
//     return (
//       <div className="game-container">
//         <h1 className="game-title">Quiz Game</h1>
//         <button className="btn" onClick={handleStartGame}>
//           Start Quiz
//         </button>
//       </div>
//     );
//   }

//   const question = questions[level][questionIndex];

//   return (
//     <div className="game-container">
//       <h1 className="game-title">Quiz Game</h1>
//       <h2 className="game-level">Level: {level}</h2>
//       <p className="game-question">
//         Question {questionIndex + 1} of {questions[level].length}
//       </p>
//       <p className="game-question-text">{question.question}</p>
//       {question.type === "multiple-choice" && (
//         <div className="game-options">
//           {question.options.map((option, index) => (
//             <label key={index} className="game-option">
//               <input
//                 type="radio"
//                 name="option"
//                 value={option}
//                 checked={userAnswer === option}
//                 onChange={() => handleAnswer(option)}
//                 className="game-option-input"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//       {question.type === "true-false" && (
//         <div className="game-options">
//           <label className="game-option">
//             <input
//               type="radio"
//               name="true-false"
//               value="true"
//               checked={userAnswer === "true"}
//               onChange={() => handleAnswer("true")}
//               className="game-option-input"
//             />
//             True
//           </label>
//           <label className="game-option">
//             <input
//               type="radio"
//               name="true-false"
//               value="false"
//               checked={userAnswer === "false"}
//               onChange={() => handleAnswer("false")}
//               className="game-option-input"
//             />
//             False
//           </label>
//         </div>
//       )}
//       {question.type === "text-input" && (
//         <input
//           type="text"
//           value={userAnswer}
//           onChange={(e) => setUserAnswer(e.target.value)}
//           className="game-input"
//           placeholder="Type your answer"
//         />
//       )}
//       <button className="btn" onClick={handleNextQuestion}>
//         Next Question
//       </button>
//       <p className="game-score">Score: {score}</p>
//       <p className="game-feedback">{feedback}</p>
//     </div>
//   );
// };

// export default QuizGame;
import React from "react";
import QuizGame from "./components/QuizGame"; // Import the QuizGame component
import "./App.css"; // Import global styles if any

const App = () => {
  return (
    <div className="App">
      <QuizGame />
    </div>
  );
};

export default App;
