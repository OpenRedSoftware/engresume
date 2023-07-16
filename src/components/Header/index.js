import React from "react";
import { Navbar } from "react-bootstrap";
import CheckoutButton from "./CheckoutButton";
import InterviewGuideButton from "./InterviewGuideButton";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Header = (props) => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 ps-3 pe-3 d-flex">
        <Navbar.Brand className="me-auto">
          <Link to="/"
            style={{ textDecoration: "none", color: "var(--color-text)" }}
          >
            <Image
              src="/res/logo.webp"
              alt="Pineapple Resume Logo"
              width={"30em"}
              style={{ marginRight: "0.3em", paddingBottom: "0.2em"}}
              />
            Pineapple Resume
          </Link>
        </Navbar.Brand>
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
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
