import React from "react";
import { useSelector } from "react-redux";

const QuizHeader = () => {
  const quizHeader = useSelector((state) => state.activeQuiz.quiz.header);

  return (
    <div>
      <h3 className="text-center">{quizHeader.name}</h3>
      <p className="text-center fs-4">{quizHeader.description}</p>
    </div>
  );
};

export default QuizHeader;
