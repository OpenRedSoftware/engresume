import React from "react";
import { Navbar } from "react-bootstrap";
import CheckoutButton from "./CheckoutButton";
import InterviewGuideButton from "./InterviewGuideButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 ps-3 pe-3 d-flex">
        <Navbar.Brand className="me-auto">
          <Link to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
             Pineapple Resume
          </Link>
        </Navbar.Brand>
        <InterviewGuideButton />
        <CheckoutButton />
      </Navbar>
    </>
  );
};

export default Header;
