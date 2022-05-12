import React from "react";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer/MultipleChoiceAnswer";
import SingleChoiceAnswer from "./SingleChoiceAnswer/SingleChoiceAnswer";

const QuizQuestionForm = (props) => {
  if (props.type === "single") {
    return (
      <div className="mt-4">
        <h5>{`${props.number}. ${props.title}${
          props.required ? "*" : null
        }`}</h5>
        <p className="mb-2 fw-light fs-6">{props.text}</p>
        <SingleChoiceAnswer
          number={props.number}
          answers={props.answers}
          other={props.other}
          otherText={props.otherText}
        />
      </div>
    );
  } else if (props.type === "multiple") {
    return (
      <div className="mt-4">
        <h5>{`${props.number}. ${props.title}${
          props.required ? "*" : null
        }`}</h5>
        <p className="mb-2 fw-light fs-6">{props.text}</p>
        <MultipleChoiceAnswer
          number={props.number}
          answers={props.answers}
          other={props.other}
          otherText={props.otherText}
        />
      </div>
    );
  }
};

export default QuizQuestionForm;
