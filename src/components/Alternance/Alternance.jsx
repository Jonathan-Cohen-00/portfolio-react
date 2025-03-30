import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gitlab from "../../Assets/gitlab.png";
import puppet from "../../Assets/Projects/puppet.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/learn.jpg";
import rundeck from "../../Assets/Projects/rundeck.png";
import api from "../../Assets/Projects/api.png";

function Alternance() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container></Container>
      <Container>
        <h1 className="project-heading">
          Mon parcours en<strong className="purple"> alternance</strong>
        </h1>
        <p style={{ color: "white" }}>
          J'ai intégré un projet en cours de développement qui consiste à
          gérer les comptes des agents et leurs habilitations au sein de
          différents annuaires.
          <br />
          Il est composé d'un front-end en React/ Typescript, de deux Rest API
          ainsi que d'un batch en Java Spring Boot. Voici les missions
          que j'ai réalisées.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Formation"
              description="A mon arrivée, ma première mission durant les premiers mois consistait à me familiariser avec les langages,
               outils et technologies utilisées afin de pouvoir collaborer sur un projet de développement.
              J'ai réalisé divers exercices d'entraînement pour apprendre Java et Spring Boot, et utilisé
                Webgoat, une application délibérement vulnérable conçue pour découvrir les failles de sécurité les plus courantes. J'ai aussi découvert le fonctionnement de Git, Gitlab, et d'un annuaire LDAP."
              link="https://owasp.org/www-project-webgoat/"
              linkName="Accéder à Webgoat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Développement sur des Rest API Java Spring Boot"
              description="
Développement sur deux Rest API s'inscrivant dans le projet de gestion d'annuaires. La première API permet l'envoi de requêtes LDAP à un annuaire (lecture, ajout, modification et supression de comptes et groupes). La seconde permet l'exécution de commandes Powershell, notamment des opérations Exchange, mais aussi la gestion de groupes au sein de domaines Active Directory en relation d'approbation. 
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Développement sur un front-end en React / Typescript"
              description="Développement d'une SPA (Single Page Application) en React et Typescript, qui s'éxecute sur un navigateur web, et qui propose permet d'effectuer différentes opérations, en faisant appel à quatre API distincites.
React permet, avec sa philosophie composant, d'écrire du code plus lisible, réutilisable, et plus maintenable. J'ai notamment utilisé des composants Material UI."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitlab}
              isBlog={false}
              title="Utilisation et évolutions de Pipelines Gitlab CI / CD
"
              description="
              Gitlab permet, en plus de collaborer sur un dépôt distant avec d'autres développeurs de créer des pipelines, qui servent à automatiser des tâches.
             J'utilise et j'ai fait évolué certaines pipelines Gitlab pour automatiser des tâches de validation de code, build, tests, et déploiements.
             "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rundeck}
              isBlog={false}
              title="Utilisation de Rundeck pour lancer des commandes et jobs sur des serveurs Debian"
              
            description="J'ai utilisé l'outil Rundeck afin de lancer des commandes bash en SSH sur les serveurs ou sont déployés les applications sur lesquelles je travaille : redémarrer le service, mettre à jour le système d'exploitation..."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puppet}
              isBlog={false}
              title="Utilisation de Puppet comme solution de configuration"
              description="Pour des raisons pratiques, certaines propriétés de configuration sont définies à l'extérieur du livrable d'une application. Au sein d'une infrastructure Puppet, 
              elles sont définies sur un dépôt distant sur Gitlab. J'ai donc exploité l'outil Puppet pour récupérer les configurations des applications sur les serveurs qui la font tourner."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Alternance;
