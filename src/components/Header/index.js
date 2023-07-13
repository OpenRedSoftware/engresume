import React from "react";
import { Navbar } from "react-bootstrap";
import CheckoutButton from "./CheckoutButton";
import InterviewGuideButton from "./InterviewGuideButton";
import Theme from "./Theme";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 ps-3 pe-3 d-flex">
        <Navbar.Brand className="me-auto">
          <Link to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            Pineapple Resume
          </Link>
        </Navbar.Brand>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }} >
          <InterviewGuideButton />
          <CheckoutButton />
          <Theme />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
