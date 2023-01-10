import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import MyModal from "./Modal";
import Callme from "./Callme";

function Contact() {
  const [modalShow, setModalShow] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  return (
    <div className="contact-background activeNavlink" id="scrollContact">
      {/* <Particle /> */}
      <Container fluid className="home-contect-section" id="about">
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.3em", marginTop: "59px" }}>Find Me On</h1>
            <p style={{ fontSize: "1.1em" }}>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
          <Col md={6} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons-contect first">
                <Callme show={callme} onHide={() => setCallme(false)} />
                <span
                  onClick={() => setCallme(true)}
                  className="icon-colour home-social-icons"
                >
                  <IoCall />
                </span>
                <span className="link-text-css" onClick={() => setCallme(true)}>
                  +91 9958394688<span style={{ opacity: 0 }}>+91 9958394688</span>
                </span>
              </li>
              <li className="social-icons-contect third">
                <MyModal show={modalShow} onHide={() => setModalShow(false)} />
                <span
                  onClick={() => setModalShow(true)}
                  className="icon-colour home-social-icons"
                >
                  <CgMail />
                </span>
                <span
                  className="link-text-css"
                  onClick={() => setModalShow(true)}
                >
                  arihantj673@gmail.com
                  <span style={{ opacity: 0 }}></span>
                </span>
              </li>
              <li className="social-icons-contect fifth">
                <a
                  href="https://github.com/AJ31032003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
                <a
                  className="link-text-css"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AJ31032003"
                >
                  github.com/AJ31032003
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons-contect second">
                <a
                  href="https://www.linkedin.com/in/arihant-jain-9b45b6238/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="link-text-css"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/arihant-jain-9b45b6238/"
                >
                  linkedin.com/in/Arihant-Jain/
                  <span style={{ opacity: 0 }}>||</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contact;
