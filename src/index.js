import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./reducers/store";
import Router from "./router";


createRoot(
  document.getElementById("root")).render(
    <Provider store={store}>
      <Router />
    </Provider>,
  );
