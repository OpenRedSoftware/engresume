import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Link to="/lessons">
          <Navbar.Brand className="mr-2">Korean Vocab</Navbar.Brand>
          <Navbar.Brand className="text-muted">
            <sup>BETA</sup>
          </Navbar.Brand>
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
