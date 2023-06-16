import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function GuideCard(props) {
  return (
    <Link to={props.linkdestination} style={{ textDecoration: "none" }}>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default GuideCard;
