import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Calendar from "./Calendar";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Calendar />
  </Provider>,
  document.getElementById("root")
);
