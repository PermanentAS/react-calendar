const initialState = {
  today: null,
  currentMonth: new Date(),
  selectedDate: new Date(),
  showPopup: false,
  events: [
    {
      date: new Date(),
      payload: "Test event 1"
    },
    // {
    //   date: dateFns.addDays(new Date(), 1),
    //   payload: "Test event 2"
    // },
    // {
    //   date: dateFns.addDays(new Date(), -1),
    //   payload: "Test event 3"
    // }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODAY_DAY":
      return {
        ...state,
        today: action.payload
      };
    case "ON_TODAY_CLICK_HANDLER":
    case "ON_SELECTED_DAY_CLICK_HANDLER":
    case "ON_POPUP_CLOSE_CLICK_HANDLER":
      return {
        ...state,
        ...action.payload
      };
      
    case "ON_POPUP_ADD_CLICK_HANDLER":
    return {
      ...state,
      events: [...state.events, action.payload],
      showPopup: false
    };
    case "ON_PREV_MOUNTH_CLICK_HANDLER":
    case "ON_NEXT_MOUNTH_CLICK_HANDLER":
      return {
        ...state,
        currentMonth: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
