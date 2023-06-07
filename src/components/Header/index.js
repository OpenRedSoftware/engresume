import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import LoginOutButton from "./LoginOutButton";

const Header = (props) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3 ps-3 pe-3 d-flex">
        <Navbar.Brand className="me-auto">EngResume</Navbar.Brand>
        <LoginOutButton />
      </Navbar>
    </>
  );
};

export default Header;
