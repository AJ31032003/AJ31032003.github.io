import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              single={true}
              title="Meanbuy"
              description="It is an E-commerce website where a person can buy the desired items and can proceed to checkout."
              ghLink="https://github.com/AJ31032003/-evil-jellyfish-2990/tree/main/meanbuy"
              demoLink="https://lustrous-malabi-7c7fc6.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              single={false}
              title="Naukri.com"
              description="It is a website where one can find his dream job and a recruiter can get an employee too."
              ghLink="https://github.com/AJ31032003/delicious-vacation-7867"
              demoLink="https://wondrous-gaufre-17f2d4.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
