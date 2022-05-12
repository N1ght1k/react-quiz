import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DesignerHeader from "../../Components/Designer/DesignerHeader/DesignerHeader";
import QuestionForm from "../../Components/Designer/QuestionForm/QuestionForm";
import QuestionListBar from "../../Components/Designer/QuestionListBar/QuestionListBar";
import { resetDesigner, setEdit } from "../../redux/actions/createQuiz";

const QuizCreator = () => {
  const activeForm = useSelector((state) => state.create.activeForm);
  const id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = () => {
    if (activeForm === 0) {
      return <DesignerHeader />;
    } else {
      return <QuestionForm />;
    }
  };

  const fetchQuiz = async () => {
    const response = await axios
      .get(`http://localhost:8080/api/quizes/${id.id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
    setDefault(response.data);
  };

  function setDefault(data) {
    console.log("ololo");
    let defaultObj = {
      header: data.header,
      questions: data.questions,
      activeForm: 1,
      edit: true,
      quizId: data._id,
    };
    console.log(defaultObj);
    dispatch(setEdit(defaultObj));
  }

  useEffect(() => {
    if (id.id) fetchQuiz();
    return () => {
      dispatch(resetDesigner());
    };
  }, []);

  return (
    <div className="row">
      <div className="col-2">
        <QuestionListBar />
      </div>
      <div className="col-10">
        <div className="d-flex">{formHandler()}</div>
      </div>
    </div>
  );
};

export default QuizCreator;
