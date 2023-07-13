import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function GuideCard(props) {
  const Image = props.image;
  return (
    <Card style={{ width: "18rem", maxWidth: "95%", margin: "1rem" }}>
      <Link to={props.linkdestination} style={{ textDecoration: "none" }}>
        <div style={{ padding: "30%", height: "15rem", textAlign: "center" }}>
          <Image className="svg-icon" alt={props.title + " icon"} />
        </div>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default GuideCard;
