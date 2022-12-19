import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Mean from "../../Assets/Capture2.PNG"
import Nauk from "../../Assets/Capture.PNG"
import Apple from "../../Assets/Capture3.PNG"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              src={Mean}
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
              src={Nauk}
              isBlog={false}
              single={false}
              title="Naukri.com"
              description="It is a website where one can find his dream job and a recruiter can get an employee too."
              ghLink="https://github.com/AJ31032003/delicious-vacation-7867"
              demoLink="https://wondrous-gaufre-17f2d4.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              src={Apple}
              isBlog={false}
              single={true}
              title="Tv.apple.com"
              description="It is a website where one can see movies , entertainment and many more."
              ghLink="https://github.com/AJ31032003/pleasant-lettuce-5002"
              demoLink="https://storied-swan-446925.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
