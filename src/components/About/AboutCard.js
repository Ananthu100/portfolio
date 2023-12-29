import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            DEGREE &rarr; B.Tech in SASTRA UNIVERSITY
            <br />
            CGPA : 7.9699
            <br />
            <br />
            HIGHER SECONDARY &rarr; SRV MATRICULATION SCHOOL
            <br />
            Percentage : 89.5 % ( Mathematics / Computer Science )
            <br />
            <br />
            SSLC &rarr; SRV MATRICULATION SCHOOL
            <br />
            Percentage : 93.2 %
          </p>
          <br />
          <p>Apart from academics, some other activities that I love to do!!</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Keyboard
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
