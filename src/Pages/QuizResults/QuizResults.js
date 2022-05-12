import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Chart from "../../Components/Chart/Chart";
import { useSelector, useDispatch } from "react-redux";
import { FaChartBar } from "react-icons/fa";

const QuizResults = () => {
  const id = useParams();
  const [data, setData] = useState({
    sum: 0,
    result: [],
  });
  const fetchResults = async () => {
    const response = await axios
      .get(`http://localhost:8080/api/results/${id.id}`)
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
    setData(response.data);
    // dispatch(fetchedQuizes(response.data));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h4>Анализ результатов</h4>
      </div>
      <p>Число ответов: {data.sum}</p>
      <div className="d-flex flex-wrap">
        {data.result.map((chart, index) => {
          return (
            <form className="m-auto d-inline-block mb-5 p-2 border border-primary rounded">
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                key={index}
              >
                <p>{`${chart.questionNumber}. ${chart.questionText}`}</p>
                <div className="w-100">
                  <Chart answers={chart.answers} />
                </div>
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default QuizResults;
