import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuestions,
  addAnswer,
  changeType,
  changeTitle,
  changeText,
  changeAnswer,
  changeRequire,
  changeOtherText,
  addOther,
  delAnswer,
  delOther,
} from "../../../redux/actions/createQuiz";
import { FaTimes } from "react-icons/fa";

const QuestionForm = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.create);
  const questions = [...quiz.questions];
  const activeForm = quiz.activeForm;
  const question = questions[activeForm - 1];
  const answers = question.answers;
  const title = question.title;
  const text = question.text;
  const type = question.questionType;
  const other = question.other;
  const otherText = question.otherText;
  const required = question.required;

  function changeQuestion(event, field, index) {
    const value = event.target.value;
    if (field === "title")
      dispatch(changeTitle({ index: activeForm - 1, title: value }));
    // questions[activeForm - 1].title = value;
    if (field === "text")
      dispatch(changeText({ index: activeForm - 1, text: value }));
    // questions[activeForm - 1].text = value;
    if (field === "answer")
      dispatch(
        changeAnswer({
          indexQuestion: activeForm - 1,
          indexAnswer: index,
          answer: value,
        })
      );
    // questions[activeForm - 1].answers[index] = value;
    // if (field === "type") questions[activeForm - 1].type = value;
    if (field === "type")
      dispatch(changeType({ index: activeForm - 1, type: value }));
    if (field === "required")
      dispatch(changeRequire({ index: activeForm - 1, required: !required }));
    // questions[activeForm - 1].required = !required;
    if (field === "otherText")
      dispatch(changeOtherText({ index: activeForm - 1, otherText: value }));
    // questions[activeForm - 1].otherText = value;
    // dispatch(changeQuestions(questions));
  }

  function addAnswerHandler() {
    // const index = answers.length;
    // answers.push(`Ответ ${index + 1}`);
    // dispatch(addAnswer(questions));
    dispatch(
      addAnswer({
        index: activeForm - 1,
        answer: `Ответ ${answers.length + 1}`,
      })
    );
  }

  function addOtherHandler() {
    // questions[activeForm - 1].other = true;
    // dispatch(changeQuestions(questions));
    dispatch(
      addOther({
        index: activeForm - 1,
        other: true,
      })
    );
  }

  function delAnswerHandler(index) {
    // questions[activeForm - 1].answers.splice(index, 1);
    // dispatch(changeQuestions(questions));
    dispatch(
      delAnswer({
        indexQuestion: activeForm - 1,
        indexAnswer: index,
      })
    );
  }

  function delOtherHandler() {
    // questions[activeForm - 1].other = false;
    // dispatch(changeQuestions(questions));
    dispatch(
      delOther({
        index: activeForm - 1,
        other: false,
      })
    );
  }

  return (
    <form className="m-auto mb-5 p-5 border border-primary rounded">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="quiz-type"
          value="single"
          id="single"
          onChange={(e) => changeQuestion(e, "type")}
          checked={type === "single" ? true : false}
        />
        <label className="form-check-label" htmlFor="single">
          Одиночный выбор
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="quiz-type"
          value="multiple"
          id="multiple"
          onChange={(e) => changeQuestion(e, "type")}
          checked={type === "multiple" ? true : false}
        />
        <label className="form-check-label" htmlFor="multiple">
          Множественный выбор
        </label>
      </div>
      <div className="mt-3 mb-1 d-grid">
        <input
          type="text"
          className="form-control-lg border border-light border-1"
          name="title"
          key={`title_${activeForm - 1}`}
          value={title}
          onChange={(e) => changeQuestion(e, "title")}
        />
      </div>
      <div className="mb-3 d-grid">
        <input
          type="text"
          className="form-control-sm border border-light border-1"
          key={`text_${activeForm - 1}`}
          value={text}
          name="text"
          onChange={(e) => changeQuestion(e, "text")}
        />
      </div>
      <div className="mb-3 d-flex flex-column">
        {answers.map((answer, index) => {
          return (
            <div
              className="mb-2 d-flex justify-content-between align-items-center"
              key={`${activeForm - 1}_${index}`}
            >
              <input
                type="text"
                className="form-control border border-light border-1"
                value={answer}
                name={`question_ + ${index + 1}`}
                key={`answer_${activeForm - 1}_${index}`}
                onChange={(e) => changeQuestion(e, "answer", index)}
              />
              {index !== 0 ? (
                <div
                  className="mb-2 ms-2"
                  onClick={() => delAnswerHandler(index)}
                >
                  <FaTimes />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {other ? (
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control"
            value={otherText}
            onChange={(e) => changeQuestion(e, "otherText")}
          />
          <input type="text" className="form-control" disabled />
          <div className="mb-2 ms-2" onClick={() => delOtherHandler()}>
            <FaTimes />
          </div>
        </div>
      ) : null}
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3">
        <button
          className="btn btn-outline-primary rounded-pill"
          type="button"
          onClick={() => addAnswerHandler()}
        >
          Добавить ответ
        </button>
        {other ? null : (
          <button
            className="btn btn-outline-primary rounded-pill"
            type="button"
            onClick={() => addOtherHandler()}
          >
            Добавить ответ - "Другой"
          </button>
        )}
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="required-checkbox"
          onChange={(e) => changeQuestion(e, "required")}
          checked={required}
        />
        <label className="form-check-label" htmlFor="required-checkbox">
          Обязательный
        </label>
      </div>
    </form>
  );
};

export default QuestionForm;
