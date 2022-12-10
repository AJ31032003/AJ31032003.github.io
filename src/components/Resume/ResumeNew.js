import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Arihant_Jain_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <a href={pdf} download>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
            </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
