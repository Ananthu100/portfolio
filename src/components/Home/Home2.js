import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Ananthanarayanan S and I am currently pursing
              <i>
                <b className="purple"> B.Tech Information Technology </b>
              </i>
              in{" "}
              <i>
                <b className="purple"> SASTRA DEEMED TO BE UNIVERSITY. </b>
              </i>
              <br />
              <br />I am a budding Competitive programmer where I have been
              practicing problems and attending contests conducted by various
              platforms like
              <i>
                <b className="purple">
                  {" "}
                  Leetcode (1619 Max Rating and top40%) ,CodeChef (2 star) (Div
                  3) (1536) and Codeforces.{" "}
                </b>
              </i>
              <br />
              <br />I am currently learning
              <i>
                <b className="purple"> FULL STACK DEVELOPMENT </b> where I have
                created 3 websites using technologies like{" "}
                <b className="purple">
                  ' HTML , CSS , JAVASCRIPT , REACT JS , NODE JS , MONDGO DB ,
                  SQL '
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ananthu100"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ananthanarayanan-s-9a2558203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
