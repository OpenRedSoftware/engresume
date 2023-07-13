import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../pages/index.css";

function MainJumbo() {
  return (
    <div
      className="jumbotron"
    >
      <strong>
        <h1
          className="d-flex justify-content-center"
          style={{ fontSize: "5rem" }}
        >
          50$
        </h1>
      </strong>
      <div className="text-muted d-flex justify-content-center pb-2">
        No Nonsense. No Hidden Fees.
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/checkout">
          <Button size="lg" className="mr-3 px-5">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainJumbo;
