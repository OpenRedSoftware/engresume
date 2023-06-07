import React from "react";

const FooterPage = () => {
  return (
    <div
      className="navbar navbar-default font-small pt-2 mt-3 static-bottom"
      role="navigation"
    >
      <div className="footer-copyright text-center py-1 ps-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="EngResume.com"> EngResume.com </a>
      </div>
    </div>
  );
};

export default FooterPage;
