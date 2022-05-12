import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaChartBar } from "react-icons/fa";
import { setDelQuiz } from "../../redux/actions/quizes";

const Editbar = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex ms-2">
      <div>
        <Link
          className="m-1"
          to={"results/" + props.quizId}
          rel="noopener noreferrer"
        >
          <FaChartBar />
        </Link>
      </div>
      <div>
        <Link
          className="m-1"
          to={"edit/" + props.quizId}
          rel="noopener noreferrer"
        >
          <FaEdit />
        </Link>
      </div>
      <div
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={() => dispatch(setDelQuiz(props.quizId))}
      >
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default Editbar;
