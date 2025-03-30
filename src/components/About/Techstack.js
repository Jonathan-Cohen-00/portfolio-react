import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
  DiGithub,
  DiCss3,
} from "react-icons/di";
import {
  SiGitlab,
  SiHtml5,
  SiMysql,
  SiPhp,
  SiSpring,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
   
 
    </Row>
  );
}

export default Techstack;
