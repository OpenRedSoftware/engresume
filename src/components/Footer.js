import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div
      className="navbar navbar-default font-small pt-2 mt-3 static-bottom"
      role="navigation"
    >
      <div className="footer-copyright text-center py-1 ps-3 me-auto">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="/"> EngResume.com </Link>
      </div>
      <div className="pe-3">
        <Link to="/privacy"
          style={{ textDecoration: "none", color: "black" }}
        >Privacy</Link> | <Link to="/terms"
          style={{ textDecoration: "none", color: "black" }}
        >Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default FooterPage;
