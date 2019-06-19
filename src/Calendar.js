import React, { Component } from "react";
import dateFns from "date-fns";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import WeekDays from "./components/WeekDays";
import DaysGrid from "./components/DaysGrid";
import TodayButton from "./components/TodayButton";
import Popup from "./components/Popup";

export default class Calendar extends Component {
  state = {
    today: dateFns.format(new Date(), "D MMMM YYYY"),
    currentMonth: new Date(),
    selectedDate: new Date(),
    showPopup: false,
    inputValue: "",
    events: [
      {
        date: new Date(),
        payload: "Test event 1"
      },
      {
        date: dateFns.addDays(new Date(), 1),
        payload: "Test event 2"
      },
      {
        date: dateFns.addDays(new Date(), -1),
        payload: "Test event 3"
      }
    ]
  };

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

  onInputChangeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onPopupAddClickHandler = () => {
    let newEvent = {
      date: this.state.selectedDate,
      payload: this.state.inputValue
    };

    this.setState({
      inputValue: "",
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
    const{
      today,
      currentMonth,
      selectedDate,
      events,
      inputValue,
      showPopup
    } = this.state

    return (
      <React.Fragment>
        <Header today={today} />

        <Navigation
          previousMounthClickHandler={this.previousMounthClickHandler}
          nextMounthClickHandler={this.nextMounthClickHandler}
          currentMonth={dateFns.format(currentMonth, "MMMM YYYY")}
        />

        <WeekDays currentMonth={currentMonth} />

        <DaysGrid
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          events={events}
          onSelectedDateClickHandler={this.onSelectedDateClickHandler}
        />

        <TodayButton onTodayClickHandler={this.onTodayClickHandler} />

        {showPopup ? (
          <Popup
            selectedDate={selectedDate}
            inputValue={inputValue}
            onInputChangeHandler={this.onInputChangeHandler}
            onPopupAddClickHandler={this.onPopupAddClickHandler}
            onPopupCloseClickHandler={this.onPopupCloseClickHandler}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
