import React from "react";

const TodayButton = ({ onTodayClickHandler }) => {
  return (
    <div className="mt-5 container-fluid text-center ">
      <button
        type="button"
        className="pl-5 pr-5 pt-3 pb-3 btn btn-light text-uppercase font-weight-bold"
        onClick={onTodayClickHandler}
      >
        Go To Today
      </button>
    </div>
  );
};

export default TodayButton;
