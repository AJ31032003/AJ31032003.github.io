import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Arihant_Jain_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  
  return (
    <div className="resume-background activeNavlink" id="scrollResume">
      <Container fluid className="resume-section">
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <a href={pdf} download>
            <Button variant="primary" onClick={() => { window.open("https://drive.google.com/file/d/1lfLWBNj62-WvpHm6HpbukozLiThKXmgX/view", "_blank");}}>
              <AiOutlineDownload /> Download Resume
            </Button>
            </a>
          </Row>
          <Row className="resume">
            
            <Col md={6} className="resume-right">
              <h3 className="resume-title">Education</h3>
                
              <Resumecontent
                title="Full Stack Web Developer "
                
                content={[
                  "From - Masai School , Banglore",
                  "Date - (2022) - Present",
                  "1200 hours of hands - on coding.",
                  "1000 hours for DSA.",
                  "50 hours for soft skills development.",
                  "3 collaborative projects and 30+ mini-projects.",
                ]}
              />

        
              <Resumecontent
                title="Higher Secondary School (PCM)"
                content={[
                 
                  "LKIS , Delhi",
                  "2019-2020"
                ]}
              />

       
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;
