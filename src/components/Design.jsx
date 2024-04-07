/* eslint-disable react/prop-types */
// Design.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import "../css/design.css";

function Design(props) {
  return (
    <Card className="m-2">
      {props.work && (
        <Card.Img
          variant="top"
          src={props.work}
          alt={`image of ${props.title}`}				
        />
      )}
      <Card.Body>
        <Card.Title className="artwork-card-title mb-1">{props. title}</Card.Title>
        <Card.Text className="artwork-card-subtitle">{props.type}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Design;
