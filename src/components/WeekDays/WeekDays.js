import React from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";

const WeekDays = ({ currentMonth }) => {
  let weekdays = [];
  let firstDayOfWeek = dateFns.startOfWeek(currentMonth);
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
};

const mapStateToProps = ({ currentMonth }) => {
  return {
    currentMonth
  };
};

export default connect(mapStateToProps)(WeekDays);
