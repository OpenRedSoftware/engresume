import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./reducers/store";
import Router from "./router";
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

createRoot(
  document.getElementById("root")).render(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <Router />
      </Provider>
    </HelmetProvider>
  );
