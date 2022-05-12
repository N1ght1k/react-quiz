import React from "react";
import ModalWindow from "../../Components/ModalWindow/ModalWindow";
import QuizList from "../../Components/QuizList/QuizList";

const ActiveQuizes = () => {
  return (
    <div className="row justify-content-md-center">
      <ModalWindow />
      <div className="col-md-auto">
        <h3>Список опросов:</h3>
        <QuizList />
      </div>
    </div>
  );
};

export default ActiveQuizes;
