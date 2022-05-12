import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuizDescription,
  changeQuizName,
} from "../../../redux/actions/createQuiz";

const DesignerHeader = () => {
  const header = useSelector((state) => state.create.header);
  const dispatch = useDispatch();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const title = event.target.title.value;
  //   const description = event.target.description.value;
  //   dispatch(createHeader({ name: title, description: description }));
  // };

  // function changeHeader(event, field, index) {
  //   const value = event.target.value;
  //   if (field === "name") dispatch(changeQuizName(value));
  //   if (field === "description") dispatch(changeQuizDescription(value));
  // }

  return (
    <form
      className="m-auto p-5 border border-primary rounded w-75"
      // onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control m-2"
        name="title"
        placeholder="Название опроса"
        // defaultValue={header.name}
        value={header.name}
        onChange={(e) => dispatch(changeQuizName(e.target.value))}
      />
      <textarea
        className="form-control m-2"
        rows="5"
        name="description"
        placeholder="Напишите собственный текст сюда"
        // defaultValue={header.description}
        value={header.description}
        onChange={(e) => dispatch(changeQuizDescription(e.target.value))}
      ></textarea>
      {/* <button type="submit" className="btn btn-primary m-2">
        Сохранить
      </button> */}
    </form>
  );
};

export default DesignerHeader;
