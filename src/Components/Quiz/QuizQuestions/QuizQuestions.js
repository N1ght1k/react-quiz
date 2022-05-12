import React from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizQuestionForm from "../QuizQuestionForm/QuizQuestionForm";

const QuizQuestions = () => {
  const quiz = useSelector((state) => state.activeQuiz.quiz);
  const questions = quiz.questions;

  return (
    <>
      {questions.map((question, index) => {
        return (
          <QuizQuestionForm
            key={index}
            title={question.title}
            type={question.questionType}
            required={question.required}
            text={question.text}
            answers={question.answers}
            number={question.questionNumber}
            other={question.other}
            otherText={question.otherText}
          />
        );
      })}
    </>
  );
};

export default QuizQuestions;
