import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DesignerHeader from "../../Components/Designer/DesignerHeader/DesignerHeader";
import QuestionForm from "../../Components/Designer/QuestionForm/QuestionForm";
import QuestionListBar from "../../Components/Designer/QuestionListBar/QuestionListBar";
import { resetDesigner, setEdit } from "../../redux/actions/createQuiz";
import QuizService from "../../services/QuizService";
import { Plane } from "react-loader-spinner";

const QuizCreator = () => {
  const [spinnerLoading, setSpinnerLoading] = useState(false);
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

  // const fetchQuiz = async () => {
  //   const response = await axios
  //     .get(`http://localhost:8080/api/quizes/${id.id}`)
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  //   console.log(response.data);
  //   setDefault(response.data);
  // };

  function getQuiz() {
    QuizService.getQuiz(id.id)
      .then((res) => {
        setSpinnerLoading(false);
        setDefault(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function setDefault(data) {
    let defaultObj = {
      header: data.header,
      questions: data.questions,
      activeForm: 1,
      edit: true,
      quizId: data._id,
    };
    dispatch(setEdit(defaultObj));
  }

  useEffect(() => {
    if (id.id) {
      setSpinnerLoading(true);
      getQuiz();
    }
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
        <div>
          <Plane
            type="Plane"
            color="#00BFFF"
            height={100}
            width={100}
            visible={spinnerLoading}
          />
        </div>
        <div className="d-flex">{formHandler()}</div>
      </div>
    </div>
  );
};

export default QuizCreator;
