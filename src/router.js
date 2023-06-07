import React from "react";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import WrapWithContent from "./components/WrapWithContent";
import Splash from "./pages/splash";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Router = () => (
  <Switch>
    <Routes>
      <Route path="/" element={<WrapWithContent jsxElement={<Splash />} />} />
    </Routes>
  </Switch>
);

export default Router;
