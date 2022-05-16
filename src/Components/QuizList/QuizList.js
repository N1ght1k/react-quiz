import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Editbar from "../Editbar/Editbar";
import { Link } from "react-router-dom";
import QuizService from "../../services/QuizService";
import { setQuizes } from "../../redux/actions/quizes";
import { Plane } from "react-loader-spinner";

const QuizList = () => {
  // const [quizes, setQuizes] = useState([]);
  const [spinnerLoading, setSpinnerLoading] = useState(true);
  const dispatch = useDispatch();
  const quizes = useSelector((state) => state.quizes.quizes);

  function getQuizes() {
    QuizService.getQuizes()
      .then((res) => {
        setSpinnerLoading(false);
        dispatch(setQuizes(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const fetchQuizes = async () => {
  //   const response = await axios
  //     .get("http://localhost:8080/api/quizes")
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  //   console.log(response.data);
  //   setQuizes(response.data);
  //   // console.log(quizes);
  //   // dispatch(fetchedQuizes(response.data));
  // };

  // const delQuiz = async (id, index) => {
  //   const response = await axios
  //     .delete(`http://localhost:8080/api/quizes/${id}`)
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  //   console.log(response.data);
  //   setQuizes([
  //     ...quizes.slice(0, index),
  //     ...quizes.slice(index + 1, quizes.length),
  //   ]);
  //   // window.location.reload();
  // };

  useEffect(() => {
    getQuizes();
  }, []);

  return (
    <>
      <div>
        <Plane
          type="Plane"
          color="#00BFFF"
          height={100}
          width={100}
          visible={spinnerLoading}
        />
      </div>
      <ul className="list-group list-group-flush">
        {quizes.map((quiz, index) => {
          return (
            <li className="d-flex list-group-item p-1" key={quiz.id}>
              <Link to={`/quiz/${quiz.id}`} className="link-secondary">
                {`${index + 1}. ${quiz.name}`}
              </Link>
              <Editbar quizId={quiz.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuizList;
