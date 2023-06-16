import React from "react";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import WrapWithContent from "./components/WrapWithContent";
import Splash from "./pages/splash";
import Checkout from "./pages/checkout"
import Success from "./pages/success"
import Privacy from "./pages/privacy"
import Terms from "./pages/terms"
import InterviewGuide from "./pages/interviewguide"
import Behavioral from "./pages/interviewguide/behavioral";
import Coding from "./pages/interviewguide/coding";
import SystemDesign from "./pages/interviewguide/systemdesign";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Router = () => (
  <Switch>
    <Routes>
      <Route path="/" element={<WrapWithContent jsxElement={<Splash />} />} />
      <Route path="/checkout" element={<WrapWithContent jsxElement={<Checkout />} />} />
      <Route path="/success" element={<WrapWithContent jsxElement={<Success />} />} />
      <Route path="/privacy" element={<WrapWithContent jsxElement={<Privacy />} />} />
      <Route path="/terms" element={<WrapWithContent jsxElement={<Terms />} />} />
      <Route path="/interviewguide" element={<WrapWithContent jsxElement={<InterviewGuide />} />} />
      <Route path="/interviewguide/behavioral" element={<WrapWithContent jsxElement={<Behavioral />} />} />
      <Route path="/interviewguide/coding" element={<WrapWithContent jsxElement={<Coding />} />} />
      <Route path="/interviewguide/systemdesign" element={<WrapWithContent jsxElement={<SystemDesign />} />} />
    </Routes>
  </Switch>
);

export default Router;
