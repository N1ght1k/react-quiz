import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  changeActiveForm,
  changeQuestions,
  resetDesigner,
} from "../../../redux/actions/createQuiz";
import { FaTimes } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

const QuestionListBar = () => {
  const quiz = useSelector((state) => state.create);
  const activeForm = quiz.activeForm;
  const questions = [...quiz.questions];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();

  const newQuestionTemplate = {
    questionNumber: questions.length + 1,
    questionType: "single",
    required: true,
    other: false,
    title: "Напишите свой вопрос здесь...",
    text: "Выберите один ответ",
    answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
    otherText: "Другой...",
  };

  const newQuizTemplate = {
    header: {
      name: "Название анкеты",
      description: "Вводный текст анкеты",
    },
    questions: [
      {
        number: 1,
        type: "single",
        required: true,
        other: false,
        title: "Напишите свой вопрос здесь...",
        text: "Выберите один ответ",
        answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
        otherText: "Другой...",
      },
    ],
    activeForm: 0,
  };

  function addNewQuestion() {
    questions.push(newQuestionTemplate);
    dispatch(addQuestion(questions));
    dispatch(changeActiveForm(questions.length));
  }

  function delQuestion(number) {
    let obj = questions.find((el) => el.questionNumber === number);
    let objIndex = questions.indexOf(obj);
    console.log(objIndex);
    questions.splice(objIndex, 1);
    questions.forEach(
      (question, index) => (question.questionNumber = index + 1)
    );
    console.log(questions);
    if (activeForm === number) {
      dispatch(changeActiveForm(number - 1));
    }
    dispatch(changeQuestions(questions));
  }

  const sendQuiz = async () => {
    if (quiz.edit) {
      const response = await axios
        .patch(`http://localhost:8080/api/quizes/${id.id}`, quiz)
        .catch((err) => {
          console.log("Err", err);
        });
      console.log(response);
      if (response.data === "success") {
        dispatch(resetDesigner());
        navigate("/");
      }
    } else {
      const response = await axios
        .post("http://localhost:8080/api/quizes", quiz)
        .catch((err) => {
          console.log("Err", err);
        });
      console.log(response);
      if (response.data === "success") {
        dispatch(resetDesigner());
        navigate("/");
      }
    }
  };

  return (
    <div className="d-flex flex-column">
      <button
        type="button"
        className="w-100 btn btn-warning btn-sm mb-2"
        onClick={() => dispatch(changeActiveForm(0))}
      >
        Заголовок
      </button>
      {questions.map((question, index) => {
        return (
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className={
                question.questionNumber === activeForm
                  ? "mb-2 flex-grow-1 btn btn-outline-info btn-sm bg-primary text-white"
                  : "mb-2 flex-grow-1 btn btn-outline-info btn-sm"
              }
              onClick={() =>
                dispatch(changeActiveForm(question.questionNumber))
              }
              key={index}
            >
              {question.questionNumber}
            </button>
            {question.questionNumber !== 1 ? (
              <div
                className="mb-2 ms-2"
                onClick={() => delQuestion(question.questionNumber)}
              >
                <FaTimes />
              </div>
            ) : null}
          </div>
        );
      })}
      <button
        type="button"
        className="w-100 btn btn-info btn-sm mb-2"
        onClick={() => addNewQuestion()}
      >
        Добавить вопрос
      </button>
      <button
        type="button"
        className="w-100 btn btn-success btn-sm"
        onClick={() => sendQuiz()}
      >
        Сохранить анкету
      </button>
    </div>
  );
};

export default QuestionListBar;
