import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveQuiz,
  setDefaultAnswer,
  setAlert,
  changeEmptyAnswers,
} from "../../../redux/actions/activeQuiz";

const Alert = () => {
  const activeQuiz = useSelector((state) => state.activeQuiz);
  const emptyAnswers = activeQuiz.emptyAnswers;
  const alert = activeQuiz.alert;
  const elAlert = useRef(null);
  if (alert) {
    elAlert.current.focus();
  }

  return (
    <div className="alert alert-warning" role="alert" ref={elAlert}>
      {`Заполните вопросы ${emptyAnswers.toString()}`}
    </div>
  );
};

export default Alert;
