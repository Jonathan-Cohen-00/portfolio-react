import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MON <span className="purple"> PARCOURS </span>
            </h1>
            <p className="home-about-body">
              Après obtention de mon baccalauréat scientifique spécialité
              mathématiques, je me suis orienté vers une licence de
              Mathématiques - Informatique.
              <br />
              <br /> Mon intérêt pour les enseignements en informatique en
              particulier pour la programmation est à l'origine de ma
              réorientation en
              <i>
                <b className="purple"> BTS SIO option SLAM. </b>
              </i>
              <br />
              <br />
              Ces deux années de BTS m'ont permis d'acquérir &nbsp;
              <i>
                <b className="purple">
                  des savoirs fondamentaux en informatique{" "}
                </b>
              </i>
              et de découvrir plusieurs langages et technologies liés au
              <i>
                <b className="purple"> développement informatique.</b>
              </i>
              <br />
              <br />
              En parallèle de mes cours, je poursuis mon apprentissage du métier
              de{" "}
              <b className="purple">
                <i>développeur </i>
              </b>
              <b> au sein de </b>
              <i></i>
              &nbsp;
              <i>
                <b className="purple">l'Insee.</b>
              </i>
              <br />
              <br /> Si j'obtiens mon BTS, j'aimerai poursuivre en
              apprentissage vers la{" "}
              <b className="purple">
                <i> licence MIAGE à Panthéon - Sorbonne.</i>
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
