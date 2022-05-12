import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizService from "../../services/QuizService";

const ModalWindow = () => {
  const quizes = useSelector((state) => state.quizes);
  const id = quizes.delQuizId;
  // const title = quizes.quizes.find((quiz) => quiz.id === id).name;

  function delQuiz() {
    QuizService.delQuiz(id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Подтверждение удаления
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div className="modal-body">
            Опрос вместе со всеми ответами будет удалён. Восстановить его будет
            невозможно
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Отмена
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => delQuiz()}
            >
              Удалить опрос
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
