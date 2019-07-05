import React from "react";
import dateFns from "date-fns";
import { connect } from "react-redux";
import { onSelectedDateClickHandler } from "./../../actions";

const DaysGrid = ({
  currentMonth,
  selectedDate,
  events,
  onSelectedDateClickHandler
}) => {
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
      let todayEvents = [];

      for (let i = 0; i < events.length; i++) {
        if (dateFns.isSameDay(day, events[i].date)) {
          todayEvents.push(events[i].payload);
        }
      }

      days.push(
        <div
          className={`dayStyle ${
            !dateFns.isSameMonth(day, monthStart)
              ? "text-secondary"
              : dateFns.isSameDay(day, selectedDate)
              ? "text-primary font-weight-bold"
              : "font-weight-bold"
          }`}
          key={day}
          onClick={() => onSelectedDateClickHandler(dateFns.parse(cloneDay))}
          style={dayStyle}
        >
          <span>{formattedDate}</span>
          <br />
          {todayEvents.map((event, index) => {
            return (
              <div className="font-weight-normal" key={index}>
                {event}
              </div>
            );
          })}
        </div>
      );
      todayEvents = [];
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
};

const mapStateToProps = ({ currentMonth, selectedDate, events }) => {
  return {
    currentMonth,
    selectedDate,
    events
  };
};

const mapDispatchToProps = { onSelectedDateClickHandler };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaysGrid);
