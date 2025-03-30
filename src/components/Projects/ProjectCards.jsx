import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLink } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
          )}
          {" "}
          {props.link && (
            <Button variant="primary" href={props.link} target="_blank">
              <BsLink /> &nbsp;
              {props.linkName}
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Modal d'affichage de l'image en grand */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body style={{ padding: 0 }}>
          <img
            src={props.imgPath}
            alt="zoomed"
            style={{ width: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
