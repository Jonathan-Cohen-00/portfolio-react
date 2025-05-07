import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import gitlab from "../../Assets/Projects/gitlab.png";
import puppet from "../../Assets/Projects/puppet.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/learn.jpg";
import rundeck from "../../Assets/Projects/rundeck.png";
import api from "../../Assets/Projects/api.png";
import log from "../../Assets/Projects/log.png";
import bug from "../../Assets/Projects/bug.jpg";

function Alternance() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Présentation de l'Insee */}
        <h1 className="project-heading">
          Mon alternance à <strong className="purple">l'Insee</strong>
        </h1>
        <p style={{ color: "white" }}>
          L’<strong>Insee</strong> (Institut national de la statistique et des
          études économiques) est un organisme public chargé de produire,
          analyser et diffuser les statistiques officielles en France. Il joue
          un rôle essentiel dans l’aide à la décision publique, à travers la
          collecte de données économiques, démographiques et sociales. En tant
          qu'apprenti, j’ai intégré une équipe technique qui conçoit et
          maintient des outils internes, au sein du service de développement de
          la direction générale située à Montrouge.
        </p>

        {/* Missions en alternance */}
        <h1 className="project-heading">
          Mes missions en<strong className="purple"> alternance</strong>
        </h1>
        <p style={{ color: "white" }}>
          J'ai intégré un projet en cours de développement qui consiste à gérer
          les comptes des agents et leurs habilitations.
          <br />
          Il est composé de plusieurs projets distincts : un front-end en React/
          Typescript, deux Rest API. Voici les missions que j'ai pu réalisées.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Formation"
              description="A mon arrivée, ma première mission durant les premiers mois consistait à me familiariser avec les langages,
              outils et technologies utilisées afin de pouvoir collaborer sur un projet de développement.
              J'ai réalisé des exercices d'entraînement sur Java et Spring Boot. J'ai aussi découvert le fonctionnement de Git et Gitlab."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              title="Développement sur deux Rest API"
              description="Développement sur deux Rest API Java utilisant Spring Boot. La première API permet l'envoi de requêtes LDAP à un annuaire (lecture, ajout, modification et supression de comptes et groupes). La seconde permet l'exécution de commandes Powershell, pour des opérations Exchange et de la gestion Active Directory."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Développement sur un front-end en React / Typescript"
              description="Développement d'une SPA (Single Page Application) en React et Typescript, qui s'exécute sur un navigateur web, faisant appel à plusieurs API back-end.
              Cette interface utilisateur est utilisée pour effectuer des tâches d'administration d'annuaire."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitlab}
              title="Utilisation et évolutions de Pipelines Gitlab CI / CD"
              description="Gitlab permet, en plus de collaborer sur un dépôt distant avec d'autres développeurs de créer des pipelines, qui servent à automatiser des tâches.
              J'utilise et j'ai fait évoluer certaines pipelines Gitlab pour automatiser des tâches de validation de code, build, tests, et déploiements."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rundeck}
              title="Utilisation de Rundeck pour lancer des commandes et jobs sur des serveurs Debian"
              description="J'ai utilisé l'outil Rundeck afin de lancer des commandes bash en SSH ainsi que des jobs prédéfinis sur les serveurs d'applications. Exemples : redémarrer le service, mettre à jour le système d'exploitation du serveur..."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puppet}
              title="Utilisation de Puppet comme solution de configuration"
              description="Dans une infrastructure basée sur Puppet, j’ai externalisé les propriétés de configuration des applications vers un dépôt distant (GitLab). Grâce à Puppet, j’ai automatisé la récupération de ces configurations sur les serveurs, permettant ainsi d’utiliser un livrable unique pour plusieurs environnements de déploiement, chacun adapté via des configurations spécifiques."
            />
          </Col>
        </Row>

        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={log}
              title="Mise en place d'une journalisation pour une API"
              description="J'ai mis en place une journalisation d'une API. Cette journalisation permet de voir qui a effectué l'opération, à quel moment, et quelle est la nature de l'opération. De plus, les fichiers de journalisation sont envoyés sur un espace dédié."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bug}
              title="Gestion d'incidents"
              description="Lors d'incidents, j’ai assuré la prise en charge des tickets en analysant les fichiers de journalisation, tout en maintenant une communication claire avec les utilisateurs. Cette approche m’a permis d’identifier l’origine des problèmes, de les résoudre efficacement et de garantir un suivi utilisateur de qualité."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Alternance;
