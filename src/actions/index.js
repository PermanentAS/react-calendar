import dateFns from "date-fns";

const todayDay = () => {
  return {
    type: "TODAY_DAY",
    payload: dateFns.format(new Date(), "D MMMM YYYY")
  };
};

const onTodayClickHandler = () => {
  return {
    type: "ON_TODAY_CLICK_HANDLER",
    payload: { currentMonth: new Date(), selectedDate: new Date() }
  };
};

const previousMounthClickHandler = currentMonth => {
  return {
    type: "ON_PREV_MOUNTH_CLICK_HANDLER",
    payload: dateFns.addMonths(currentMonth, -1)
  };
};

const nextMounthClickHandler = currentMonth => {
  return {
    type: "ON_NEXT_MOUNTH_CLICK_HANDLER",
    payload: dateFns.addMonths(currentMonth, 1)
  };
};

const onSelectedDateClickHandler = day => {
  return {
    type: "ON_SELECTED_DAY_CLICK_HANDLER",
    payload: {
      selectedDate: day,
      showPopup: true
    }
  };
};

const onPopupAddClickHandler = (selectedDate, inputValue) => {
  let newEvent = {
    date: selectedDate,
    payload: inputValue
  };

  return {
    type: "ON_POPUP_ADD_CLICK_HANDLER",
    payload: newEvent
  };
};

const onPopupCloseClickHandler = () => {
  return {
    type: "ON_POPUP_CLOSE_CLICK_HANDLER",
    payload: {
      showPopup: false
    }
  };
};

export {
  todayDay,
  onTodayClickHandler,
  previousMounthClickHandler,
  nextMounthClickHandler,
  onSelectedDateClickHandler,
  onPopupCloseClickHandler,
  onPopupAddClickHandler
};
