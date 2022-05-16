import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BASE_URL } from "../../../Constants/Global";
import { Link } from "react-router-dom";

const Congratulation = () => {
  return (
    <>
      <div className="w-25 mb-4">
        <img
          src={`${BASE_URL}/images/check.png`}
          className="img-fluid"
          alt="OK"
        />
      </div>
      <h1 className="text-center">Спасибо за участие в опросе!</h1>
      <Link to="/" className="link-secondary text-center mt-4">
        К списку опросов
      </Link>
    </>
  );
};

export default Congratulation;
