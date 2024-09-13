import React, { useState } from "react";
import Question from "./QuestionScreen";

function QuestionList({ level, questions, onAnswer }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (isCorrect) => {
    onAnswer(isCorrect);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      {currentIndex < questions.length ? (
        <Question question={questions[currentIndex]} onAnswer={handleAnswer} />
      ) : (
        <div>No more questions</div>
      )}
    </div>
  );
}

export default QuestionList;
