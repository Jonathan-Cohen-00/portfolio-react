import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nike from "../../Assets/Projects/nike.png";
import ad from "../../Assets/Projects/server.png";
import intcode from "../../Assets/Projects/intcode.png";
import zoo from "../../Assets/Projects/zoo.webp";
import server from "../../Assets/Projects/server.pdf";
import portfolio from "../../Assets/Projects/portfolio.png";

function ProjetsPersonnels() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">personnels </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets que j'ai réalisés.
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
              imgPath={ad}
              title="Mise en place de services DHCP, DNS, ADDS sur un réseau virtuel "
              description="Configuration complète sur une machine virtuelle d’un serveur Windows avec les rôles de DHCP, DNS et ADDS. Accès aux services depuis une VM cliente sur le même réseau : la VM cliente a pu se connecter avec son IP donnée par le serveur, et se connecter à un compte du domaine Active Directory crée. Version du serveur : Windows Server Core 2022, sans interface graphique. Utilisation de Hyper-V. L'objectif était la réalisation du projet en utilisant uniquement des commandes sur le serveur et la production d'un guide documenté exposant les étapes nécessaires. "
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
              link="https://mediumslateblue-crab-828850.hostingersite.com/jonathan_cohen/e-commerce"
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
              imgPath={portfolio}
              title="Portfolio React"
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
