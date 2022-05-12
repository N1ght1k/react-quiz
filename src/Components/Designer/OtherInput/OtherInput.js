import React from "react";

const OtherInput = () => {
  return (
    <>
      <input
        type="text"
        className="form-control m-1"
        value={"Ответ " + props.id}
      />
    </>
  );
};

export default OtherInput;
