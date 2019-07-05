import React from "react";
import { connect } from "react-redux";
import { onTodayClickHandler } from "./../../actions";

const TodayButton = ({onTodayClickHandler}) => {
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

const mapDispatchToProps = {
  onTodayClickHandler }

export default connect(
  null,
  mapDispatchToProps
)(TodayButton);
