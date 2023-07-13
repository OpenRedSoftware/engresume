import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./router";
import { HelmetProvider } from 'react-helmet-async';
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const helmetContext = {};

createRoot(
  document.getElementById("root")).render(
    <div >
      <HelmetProvider context={helmetContext}>
        <Router />
      </HelmetProvider>
    </div>
  );
