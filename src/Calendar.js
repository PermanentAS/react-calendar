import React, { Component } from "react";
import { connect } from "react-redux";
import { todayDay } from "./actions";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import WeekDays from "./components/WeekDays";
import DaysGrid from "./components/DaysGrid";
import TodayButton from "./components/TodayButton";
import Popup from "./components/Popup";

class Calendar extends Component {
  componentWillMount() {
    this.props.todayDay();
  }

  render() {
    const { showPopup } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Navigation />
        <WeekDays />
        <DaysGrid />
        <TodayButton />

        {showPopup ? <Popup /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ showPopup }) => {
  return { showPopup };
};

const mapDispatchToProps = {
  todayDay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
