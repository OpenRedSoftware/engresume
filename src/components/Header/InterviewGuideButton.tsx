import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutButton = (props) => {
  return (
    <Link to="/interview">
      <Button variant="outline" size="sm" onClick={() => {}}>
        Interview Guide
      </Button>
    </Link>
  );
};

export default CheckoutButton;
