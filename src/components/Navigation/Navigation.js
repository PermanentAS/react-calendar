import React from "react";

const Navigation = ({
  previousMounthClickHandler,
  nextMounthClickHandler,
  currentMonth
}) => {
  return (
    <div className="mt-3 container-fluid">
      <div className="row">
        <button
          type="button"
          className="btn btn-light"
          onClick={previousMounthClickHandler}
        >
          <i className="fas fa-arrow-left fa-sm" />
        </button>
        <div className="col-sm text-center mt-2 font-weight-bold">
          {currentMonth}
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={nextMounthClickHandler}
        >
          <i className="fas fa-arrow-right fa-sm" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
