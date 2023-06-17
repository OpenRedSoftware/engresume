import React, { useEffect } from "react";
import { BrowserRouter as Switch, Route, Routes, useLocation } from "react-router-dom";
import WrapWithContent from "./components/WrapWithContent";
import Splash from "./pages/splash";
import Checkout from "./pages/checkout"
import Success from "./pages/success"
import Privacy from "./pages/privacy"
import Terms from "./pages/terms"
import InterviewGuide from "./pages/interview"
import Behavioral from "./pages/interview/behavioral";
import Coding from "./pages/interview/coding";
import SystemDesign from "./pages/interview/systemdesign";
import Salary from "./pages/interview/salary";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Router = () => (
  <Switch>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<WrapWithContent jsxElement={<Splash />} />} />
      <Route path="/checkout" element={<WrapWithContent jsxElement={<Checkout />} />} />
      <Route path="/success" element={<WrapWithContent jsxElement={<Success />} />} />
      <Route path="/privacy" element={<WrapWithContent jsxElement={<Privacy />} />} />
      <Route path="/terms" element={<WrapWithContent jsxElement={<Terms />} />} />
      <Route path="/interview" element={<WrapWithContent jsxElement={<InterviewGuide />} />} />
      <Route path="/behavioral" element={<WrapWithContent jsxElement={<Behavioral />} />} />
      <Route path="/coding" element={<WrapWithContent jsxElement={<Coding />} />} />
      <Route path="/systemdesign" element={<WrapWithContent jsxElement={<SystemDesign />} />} />
      <Route path="/salary" element={<WrapWithContent jsxElement={<Salary />} />} />
      <Route path="*" element={<WrapWithContent jsxElement={<Splash />} />} />
    </Routes>
  </Switch>
);

export default Router;
