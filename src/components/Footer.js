import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div
      className="navbar navbar-default font-small"
      role="navigation"
    >
      <div className="py-1 me-auto ps-sm-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="/"> PineappleResume.com </Link>
      </div>
      <div className="pe-sm-3">
        <Link to="/privacy"
          style={{ textDecoration: "none", color: "var(--color-text)" }}
        >Privacy</Link> | <Link to="/terms"
          style={{ textDecoration: "none", color: "var(--color-text)" }}
        >Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default FooterPage;
