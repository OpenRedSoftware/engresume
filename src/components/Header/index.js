import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Link to="/">
          <Navbar.Brand className="mr-2">EngResume</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>{" "}
      </Navbar>
    </>
  );
};

export default Header;
