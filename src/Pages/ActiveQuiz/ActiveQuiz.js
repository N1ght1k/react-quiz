import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuizHeader from "../../Components/Quiz/QuizHeader/QuizHeader";
import QuizQuestions from "../../Components/Quiz/QuizQuestions/QuizQuestions";
import {
  setActiveQuiz,
  setDefaultAnswer,
  setAlert,
  changeEmptyAnswers,
} from "../../redux/actions/activeQuiz";
import AnswerService from "../../services/AnswerService";
import QuizService from "../../services/QuizService";

const ActiveQuiz = () => {
  const id = useParams();
  const activeQuiz = useSelector((state) => state.activeQuiz);
  const quiz = activeQuiz.quiz;
  const answer = activeQuiz.quizAnswer;
  const answers = answer.answers;
  const alert = activeQuiz.alert;
  const emptyAnswers = activeQuiz.emptyAnswers;
  const alertRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function checkAnswer(e) {
    e.preventDefault();
    emptyAnswers.length = 0;
    let requiredNumbers = [];
    quiz.questions.forEach((question) => {
      if (question.required) {
        requiredNumbers.push(question.questionNumber);
      }
    });
    answers.forEach((answer) => {
      if (requiredNumbers.includes(answer.questionNumber)) {
        if (answer.answer.length === 0) {
          emptyAnswers.push(answer.questionNumber);
        }
      }
    });
    dispatch(changeEmptyAnswers(emptyAnswers));
    if (emptyAnswers.length !== 0) {
      dispatch(setAlert(true));
      alertRef.current.scrollIntoView();
    } else {
      dispatch(setAlert(false));
      sendQuiz();
    }
  }

  function sendQuiz() {
    AnswerService.postAnswer(answer)
      .then((res) => {
        if (res === "success") {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // const response = await axios
    //   .post("http://localhost:8080/api/answers", answer)
    //   .catch((err) => {
    //     console.log("Err", err);
    //   });
    // console.log(response);
    // if (response.data === "success") {
    //   navigate("/");
    // }
  }

  function getQuiz() {
    QuizService.getQuiz(id.id)
      .then((res) => {
        setDefaultAnswers(res);
        dispatch(setActiveQuiz(res));
      })
      .catch((err) => {
        console.log(err);
      });
    // const response = await axios
    //   .get(`http://localhost:8080/api/quizes/${id.id}`)
    //   .catch((err) => {
    //     console.log("Err", err);
    //   });
    // console.log(response.data);
    // setDefaultAnswers(response.data);
    // dispatch(setActiveQuiz(response.data));
  }

  function setDefaultAnswers(data) {
    console.log("ololo");
    let defaultObj = {
      quizId: data._id,
      answers: [],
    };
    data.questions.forEach((element) => {
      defaultObj.answers.push({
        questionNumber: element.questionNumber,
        answer: [],
        otherText: "",
      });
    });
    dispatch(setDefaultAnswer(defaultObj));
  }

  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <div ref={alertRef}>
            {alert ? (
              <div className="alert alert-warning" role="alert">
                {`Заполните вопросы ${emptyAnswers.toString()}`}
              </div>
            ) : null}
          </div>
          <QuizHeader />
          <QuizQuestions />
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="mt-4 mb-4 w-50 btn btn-success"
              onClick={(e) => checkAnswer(e)}
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveQuiz;
