import React from "react";
import dateFns from "date-fns";

const Popup = ({
  selectedDate,
  inputValue,
  onInputChangeHandler,
  onPopupAddClickHandler,
  onPopupCloseClickHandler
}) => {
  const popupStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0, 0.7)"
  };

  return (
    <div className="popup" style={popupStyle}>
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
              onChange={onInputChangeHandler}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={onPopupAddClickHandler}
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
};

export default Popup;
