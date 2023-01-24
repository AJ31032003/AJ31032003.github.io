import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Logo.png";
import pdf from "../Assets/Arihant_Jain_Resume.pdf"
import { NavLink } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const scrollToFunction = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    updateExpanded(false);
  };
  
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const li = document.querySelectorAll(".nav-link");
  const section = document.querySelectorAll(".activeNavlink");
  function acvtiveMenu() {
    let len = section.length;
    for (let i = 0; i < len; i++) {
      let sectionTop = section[i].offsetTop;
      let sectionHeight = section[i].offsetHeight;
      let variableHeight = sectionHeight / 4;
    }
  }
  acvtiveMenu();
  window.addEventListener("scroll", acvtiveMenu);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToFunction("scrollHome")}
              >
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToFunction("scrollAbout")}
              >
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToFunction("scrollSkills")}
              >
                <span>Skills</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToFunction("scrollProjects")}>
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <NavLink href={pdf} download onClick={() => { window.open("https://drive.google.com/file/d/1lfLWBNj62-WvpHm6HpbukozLiThKXmgX/view", "_blank");}}>
                  <span>Resume</span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => scrollToFunction("scrollContact")}
              >
                <span>Contact</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
