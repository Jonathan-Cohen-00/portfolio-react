import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nike from "../../Assets/Projects/nike.png";
import editor from "../../Assets/Projects/codeEditor.png";
import intcode from "../../Assets/Projects/intcode.png";
import zoo from "../../Assets/Projects/zoo.webp";
import server from "../../Assets/Projects/server.pdf";

function ProjetsPersonnels() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">personnels </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets que j'ai réalisés durant mon parcours
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intcode}
              title="IntMachine – Interpréteur d’instructions numériques"
              description="Développement d’un interpréteur capable de lire et d’exécuter une séquence d’instructions codées sous forme de nombres. Chaque instruction déclenche une action spécifique, souvent liée à la manipulation d’une mémoire interne d’entiers (lecture, écriture, modification).
Ce projet résoud des défis de l’Advent of Code 2019, axés sur la simulation d’une machine virtuelle de type Intcode Computer.
Langage Java."
              ghLink="https://github.com/Jonathan-Cohen-00/Advent2019-Intcode"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoo}
              title="Intranet d'un Zoo"
              description="Réalisation de l'intranet d'un zoo fictif.
              Maquettage, puis conception du site.
              Base de donnnées comportant les informations sur les utilisateurs, espèces et animaux recueillis. Site dynamique envoyant des requêtes vers cette base.
              Système de connexion basique avec un login et mot de passe hashé.
              Pris en charge de deux rôles différents : 
               le rôle d'employé pour gérer uniquement les espèces et les animaux, 
               et le rôle d'administrateur pour gérer en plus les comptes employés. Langages utilisés : PHP, HTML, CSS, MySQL."
              ghLink="https://github.com/Jonathan-Cohen-00/WebsiteZoo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Mise en place d’une infrastructure réseau Windows (DHCP, DNS, ADDS)"
              description="Configuration complète d’un serveur Windows avec les rôles DHCP, DNS et ADDS, intégration d'une VM cliente, réalisée dans un environnement virtualisé via Hyper V. Après réalisation du projet, j'ai produit un guide documenté. Ce travail a été réalisé en groupe avec deux camarades. "
              link={server}
              linkName="Voir le guide"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              title="Site e-commerce d'articles de sport"
              description="Réalisation d'un site de e-commerce. Constitue mon client léger pour l'épreuve E6. Ses fonctionnalités principales sont la création de compte, la connexion, la gestion des paniers et le passage de commandes."
              ghLink="https://github.com/Jonathan-Cohen-00/e-commerce-nike"
              link="https://plant49-ai.herokuapp.com/"
              linkName="Accéder au site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              title="Application de bureau - Backoffice d'une boutique en ligne"
              description="Application windows qui permet l'authentification des gestionnaires de la boutique, l'accès à un dashboard avec différents KPI, la modification des produits et stocks, la validation et consultations des commandes, l'archivage d'anciens produits."
              ghLink="https://github.com/Jonathan-Cohen-00/SneakerBackOffice"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nike}
              title=""
              description="J'ai forké un portfolio open source de github. Ce portfolio étant codé en JavaScript et utilisant la librairie React, je l'ai fait évolué, modifié et ajouté 
              de nombreux éléments pour le faire correspondre à mes besoins. J'ai également mis en place une Github action qui crée un livrable et le déploie automatiquement à chaque modification sur la branche principale."
              ghLink="https://github.com/Jonathan-Cohen-00/portfolio-react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjetsPersonnels;
