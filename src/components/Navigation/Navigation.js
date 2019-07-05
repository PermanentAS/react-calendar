import React from "react";
import { connect } from "react-redux";
import dateFns from "date-fns";
import {
  previousMounthClickHandler,
  nextMounthClickHandler
} from "./../../actions";

const Navigation = ({
  previousMounthClickHandler,
  nextMounthClickHandler,
  currentMonth
}) => {
  let currentMonthFormatted = dateFns.format(currentMonth, "MMMM YYYY");
  return (
    <div className="mt-3 container-fluid">
      <div className="row">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => previousMounthClickHandler(currentMonth)}
        >
          <i className="fas fa-arrow-left fa-sm" />
        </button>
        <div className="col-sm text-center mt-2 font-weight-bold">
          {currentMonthFormatted}
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => nextMounthClickHandler(currentMonth)}
        >
          <i className="fas fa-arrow-right fa-sm" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentMonth }) => {
  return {
    currentMonth
  };
};

const mapDispatchToProps = {
  previousMounthClickHandler,
  nextMounthClickHandler
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
