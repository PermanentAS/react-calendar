import React, { Component } from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";
import {
  onPopupCloseClickHandler,
  onPopupAddClickHandler
} from "./../../actions";

class Popup extends Component {
  state = {
    inputValue: ""
  };

  popupStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0, 0.7)"
  };

  onInputChangeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const { inputValue } = this.state;

    const {
      selectedDate,
      onPopupAddClickHandler,
      onPopupCloseClickHandler
    } = this.props;

    return (
      <div className="popup" style={this.popupStyle}>
        <div className="card" style={{ width: "600px", margin: "300px auto" }}>
          <div className="card-body">
            <h5 className="card-title">
              {dateFns.format(selectedDate, "D/MM/YYYY")}
            </h5>
            <h5 className="card-title mb-2 text-muted">Input your event</h5>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={inputValue}
                onChange={this.onInputChangeHandler}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary"
                onClick={() => {
                  onPopupAddClickHandler(selectedDate, inputValue);
                }}
              >
                Add
              </button>
              <button
                className="btn btn-danger"
                onClick={onPopupCloseClickHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentMonth, selectedDate, events }) => {
  return {
    currentMonth,
    selectedDate,
    events
  };
};

const mapDispatchToProps = { onPopupCloseClickHandler, onPopupAddClickHandler };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup);
