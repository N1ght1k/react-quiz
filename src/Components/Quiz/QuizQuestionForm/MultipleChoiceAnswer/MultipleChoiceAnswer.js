import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeAnswer } from "../../../../redux/actions/activeQuiz";

const MultipleChoiceAnswer = (props) => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.activeQuiz.quiz);
  const answer = useSelector((state) => state.activeQuiz.quizAnswer);
  const answers = answer.answers;
  const answerObj = answers.find((el) => el.questionNumber === props.number);

  function changeValue(event, field) {
    if (field === "answer") {
      if (answerObj) {
        let index = answers.indexOf(answerObj);
        if (answerObj.answer.length === 0) {
          answers[index].answer.push(event.target.value);
          dispatch(changeAnswer(answers));
        } else {
          if (answers[index].answer.includes(event.target.value)) {
            const newIndex = answers[index].answer.indexOf(event.target.value);
            answers[index].answer.splice(newIndex, 1);
            dispatch(changeAnswer(answers));
          } else {
            answers[index].answer.push(event.target.value);
            dispatch(changeAnswer(answers));
          }
        }
      } else {
        const data = {
          questionNumber: props.number,
          answer: [event.target.value],
          otherText: "",
        };
        answers.push(data);
        dispatch(changeAnswer(answers));
      }
    }

    if (field === "otherText") {
      if (answerObj) {
        let index = answers.indexOf(answerObj);
        answers[index].otherText = event.target.value;
        dispatch(changeAnswer(answers));
      }
    }
  }

  return (
    <>
      {props.answers.map((answer, index) => {
        return (
          <div className="form-check">
            <input
              key={`input_${props.number}_${index + 1}`}
              type="checkbox"
              className="form-check-input"
              name={`question_${props.number}`}
              value={answer}
              id={`answer_${props.number}_${index + 1}`}
              checked={answerObj.answer.includes(answer) ? true : false}
              onChange={(e) => changeValue(e, "answer")}
            />
            <label
              key={`label_${props.number}_${index + 1}`}
              className="form-check-label"
              htmlFor={`answer_${props.number}_${index + 1}`}
            >
              {answer}
            </label>
          </div>
        );
      })}
      {props.other ? (
        <>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name={`question_${props.number}`}
              value={props.otherText}
              id={`answer_${props.number}_other`}
              checked={
                answerObj.answer.includes(props.otherText) ? true : false
              }
              onChange={(e) => changeValue(e, "answer")}
            />
            <label
              className="form-check-label"
              htmlFor={`answer_${props.number}_other`}
            >
              {props.otherText}
            </label>
          </div>
          <textarea
            className="form-control mt-2"
            rows="2"
            name="description"
            disabled={answerObj.answer.includes(props.otherText) ? false : true}
            onChange={(e) => changeValue(e, "otherText")}
            // placeholder={props.otherText}
          ></textarea>
        </>
      ) : null}
    </>
  );
};

export default MultipleChoiceAnswer;
