import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Math-Landing Page"
              description="It is static Math Landing Webpage developed using Frontend technologies like HTML and CSS."
              ghLink="https://github.com/Ananthu100/Maths-Home-Website"
              demoLink="https://ananthu-math-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Math-Game Website"
              description="It is a Math Gaming webiste developed using Frontend Technologies like HTML , CSS , JAVASCRIPT. The basic idea of the project is to brushup with Mathematics Table."
              ghLink="https://github.com/Ananthu100/Math-Game"
              demoLink="https://ananthu-math-game.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book-Store Website"
              description="The basic idea of the project is to store the users book which acts as library.It stores the name of the book,author and publishYear.The features of this project includes all the CRUD operations like CREATE , READ , UPDATE and Deleting of the books.The user can view the details in 'table' or in a 'Card' form. This project is developed using 'MERN STACK' which includes technolgies like HTML , TailWind CSS , JAVASCRIPT , ReactJS(Vite) , NodeJS , MongoDB. "
              ghLink="https://github.com/Ananthu100/bookstore-backend"
              demoLink="https://github.com/Ananthu100/bookstore-frontend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
