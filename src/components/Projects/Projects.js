import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import naukri from "../../Assets/Projects/Capture.PNG";
import apple from "../../Assets/Projects/Capture3.PNG";
 import meanbuy from "../../Assets/Projects/Capture2.PNG";
 import Nykaa from "../../Assets/Projects/Capture4.PNG";

function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={meanbuy}
                isBlog={false}
                single={true}
                title="Meanbuy"
                tool=" React, Chakra-UI, Javascript"
                description="MeanBuy was originally founded as a cross border B2C e-commerce platform, . It primarily focuses on bringing transparency to customers ordering directly from wholesalers or manufacturers. By offering flexible pricing around future delivery dates."
                link="https://github.com/AJ31032003/-evil-jellyfish-2990/tree/main/meanbuy"
                demoLink="https://lustrous-malabi-7c7fc6.netlify.app/"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={naukri}
                isBlog={false}
                single={false}
                title="Naukri.com"
                tool= "HTML, CSS, Javascript"
                description="Naukri.com is an Indian employment website operating in India and Middle East. It was founded in March 1997 by Indian businessman Sanjeev Bikhchandani.[1] Naukri.com is the largest employment website in India"
                link="https://github.com/AJ31032003/delicious-vacation-7867"
                demoLink="https://wondrous-gaufre-17f2d4.netlify.app/"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={apple}
                isBlog={false}
                single={true}
                title="Tv.apple.com"
                tool="HTML, CSS, Javascript"
                description="Apple TV is a digital media player and microconsole developed and marketed by Apple Inc. It is a small network appliance hardware that plays received media data such as video and audio to a television set or external display."
                link="https://github.com/AJ31032003/pleasant-lettuce-5002"
                demoLink="https://storied-swan-446925.netlify.app"
              />
            </Col>

            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={Nykaa}
                isBlog={false}
                single={false}
                title="Nykaa.Com"
                tool="React,Chakra-UI, Javascript"
                description="Nykaa is an Indian e-commerce company, founded by Falguni Nayar in 2012 and headquartered in Mumbai. It sells beauty, wellness and fashion products across websites, mobile apps and 100+ offline stores.In 2020, it became the first Indian unicorn startup headed by a woman."
                link="https://github.com/arpitmiahra4/amazing-pocket-7061"
                demoLink="https://63bfed597aacf001e8b9caf6--ornate-cupcake-fb26b5.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
