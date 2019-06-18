import React, { Component } from "react";
import dateFns from "date-fns";

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date(),
      today: dateFns.format(new Date(), "D MMMM YYYY")
    };
  }

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
      paddingLeft: "5px"
    };

    for (let i = 0; i < 7; i++) {
      weekdays.push(
        <div key={i} className="week-day " style={weekdayStyle}>
          {dateFns.format(dateFns.addDays(firstDayOfWeek, i), "ddd")}
        </div>
      );
    }

    return (
      <nav className="navbar navbar-dark bg-dark mt-3 navbar-weekday text-white text-left">
        {weekdays}
      </nav>
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

  render() {
    console.log(
      dateFns.format(dateFns.startOfWeek(this.state.currentMonth), "ddd")
    );
    return (
      <div>
        {this.renderNav()}
        {this.renderHeader()}
        {this.renderWeekdays()}
      </div>
    );
  }
}
