import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLink, BiGitRepoForked } from "react-icons/bi";
import { SiGithub } from "react-icons/si";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title} ({props.single?"Individual":"Collaborative"})</Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Text style={{ fontWeight: "100 !important" }}>
          {props.description}
        </Card.Text>
        <Card.Text>
          <b style={{ letterSpacing: "1.5px" }}> Tech Stack :- </b> <span> {props.tool} </span>
        </Card.Text>
        <Button variant="primary" style={{ margin: "15px" }} href={props.link} target="_blank">
          <BiGitRepoForked /> &nbsp;
          {props.isBlog ? "View Blog" : "Github"}
        </Button>
        <Button variant="primary" style={{ margin: "15px" }} href={props.demoLink} target="_blank">
          <BiLink /> &nbsp;
          {props.isBlog ? "View Blog" : "Netlify"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
