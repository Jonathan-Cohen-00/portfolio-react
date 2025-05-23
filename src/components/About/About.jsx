import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Mes projets pour l'épreuve  <strong className="purple">E6</strong>
            </h1>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          ></Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple"> Technologies utilisées </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
