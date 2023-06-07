import React from "react";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import WrapWithContent from "./components/WrapWithContent";
import Splash from "./pages/splash";
import Checkout from "./pages/checkout"
import Success from "./pages/success"
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Router = () => (
  <Switch>
    <Routes>
      <Route path="/" element={<WrapWithContent jsxElement={<Splash />} />} />
      <Route path="/checkout" element={<WrapWithContent jsxElement={<Checkout />} />} />
      <Route path="/success" element={<WrapWithContent jsxElement={<Success />} />} />
    </Routes>
  </Switch>
);

export default Router;
