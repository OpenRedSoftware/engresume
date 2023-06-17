import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutButton = (props) => {
  return (
    <Link to="/checkout">
      <Button variant="primary" size="sm" onClick={() => {}}>
        Resume Review
      </Button>
    </Link>
  );
};

export default CheckoutButton;
