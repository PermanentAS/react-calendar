import React, { Component } from "react";
import dateFns from "date-fns";

export default class Calendar extends Component {

    state = {
      today: dateFns.format(new Date(), "D MMMM YYYY"),
      currentMonth: new Date(),
      selectedDate: new Date(),
      showPopup: false,
      inputValue: '',
      events: [
        {
          date: new Date(),
          payload: 'Test event 1'
        },
        {
          date: dateFns.addDays(new Date(), 1),
          payload: 'Test event 2'
        },
        {
          date: dateFns.addDays(new Date(), -1),
          payload: 'Test event 3'
        }
      ]
    };


  renderNav() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">React-calendar</span>
        <span className="text-light">Today is: {this.state.today}</span>
      </nav>
    );
  }

  renderHeader() {
    return (
      <div className="mt-3 container-fluid">
        <div className="row">
          <button
            type="button"
            className="btn btn-light"
            onClick={this.previousMounthClickHandler}
          >
            <i className="fas fa-arrow-left fa-sm" />
          </button>
          <div className="col-sm text-center mt-2 font-weight-bold">
            {dateFns.format(this.state.currentMonth, "MMMM YYYY")}
          </div>
          <button
            type="button"
            className="btn btn-light"
            onClick={this.nextMounthClickHandler}
          >
            <i className="fas fa-arrow-right fa-sm" />
          </button>
        </div>
      </div>
    );
  }

  renderWeekdays() {
    let weekdays = [];
    let firstDayOfWeek = dateFns.startOfWeek(this.state.currentMonth);
    const weekdayStyle = {
      width: "14%",
      borderLeft: "1px solid gray",
      padding: "5px 10px"
    };

    const navbarWeekdayStyle = {
      paddingLeft: "2%"
    };

    for (let i = 0; i < 7; i++) {
      weekdays.push(
        <div key={i} className="" style={weekdayStyle}>
          {dateFns.format(dateFns.addDays(firstDayOfWeek, i), "ddd")}
        </div>
      );
    }

    return (
      <nav
        className="bg-dark mt-3 navbar-weekday text-white text-left d-flex"
        style={navbarWeekdayStyle}
      >
        {weekdays}
      </nav>
    );
  }

  renderDaysGrid() {
    const { currentMonth, selectedDate, events } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(currentMonth);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    const dayStyle = {
      width: "14%",
      height: "100px",
      borderLeft: "1px solid gray",
      borderBottom: "1px solid gray",
      borderRight: "1px solid gray",
      padding: "8px 10px"
    };

    const rowStyle = {
      padding: "0px",
      margin: "0px"
    };

    const navStyle = {
      flexWrap: "wrap",
      flexDirection: "column",
      paddingLeft: "2%"
    };

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, "D");
        const cloneDay = day;
        let todayEvents = []

        for (let i = 0; i < events.length; i++) {
          if (dateFns.isSameDay(day, events[i].date)) {
            todayEvents.push(events[i].payload);
          }
        }

        days.push(
          <div
            className={`${
              !dateFns.isSameMonth(day, monthStart)
                ? "text-secondary"
                : dateFns.isSameDay(day, selectedDate)
                ? "text-primary font-weight-bold"
                : "font-weight-bold"
            }`}
            key={day}
            onClick={() =>
              this.onSelectedDateClickHandler(dateFns.parse(cloneDay))
            }
            style={dayStyle}
          >
            <span>{formattedDate}</span><br/>
            {todayEvents.map((event, index) => {
              return(
                <div className="font-weight-normal" key={index}>{event}</div>
              )
            })}
          </div>
        );
        todayEvents = []
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row d-flex" style={rowStyle} key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return (
      <div className="bg-light text-left" style={navStyle}>
        {rows}
      </div>
    );
  }

  renderTodayButton() {
    return (
      <div className="mt-5 container-fluid text-center ">
        <button
          type="button"
          className="pl-5 pr-5 pt-3 pb-3 btn btn-light text-uppercase font-weight-bold"
          onClick={this.onTodayClickHandler}
        >
          Go To Today
        </button>
      </div>
    );
  }

  renderPopup() {
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
              {dateFns.format(this.state.selectedDate, "D/MM/YYYY")}
            </h5>
            <h5 className="card-title mb-2 text-muted">Input your event</h5>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.inputValue}
                onChange={this.onInputChangeHandler}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary"
                onClick={this.onPopupAddClickHandler}
              >
                Add
              </button>
              <button
                className="btn btn-danger"
                onClick={this.onPopupCloseClickHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  nextMounthClickHandler = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  previousMounthClickHandler = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, -1)
    });
  };

  onSelectedDateClickHandler = day => {
    this.setState({
      selectedDate: day,
      showPopup: true
    });
  };

  onTodayClickHandler = () => {
    this.setState({
      currentMonth: new Date(),
      selectedDate: new Date()
    });
  };

  onInputChangeHandler = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  onPopupAddClickHandler = () => {
    let newEvent = {
      date: this.state.selectedDate,
      payload: this.state.inputValue
    }

    this.setState({
      inputValue: '',
      showPopup: false,
      events: [...this.state.events, newEvent]
    });
  };

  onPopupCloseClickHandler = () => {
    this.setState({
      showPopup: false
    });
  };



  render() {
    return (
      <React.Fragment>
        {this.renderNav()}
        {this.renderHeader()}
        {this.renderWeekdays()}
        {this.renderDaysGrid()}
        {this.renderTodayButton()}
        {this.state.showPopup ? this.renderPopup() : null}
      </React.Fragment>
    );
  }
}
