import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";
import nike from "../../Assets/Projects/nike.png";


function EpreuveE6() {
    return (
        <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
             <strong className="purple">L' épreuve E6 - Parcours de professionnalisation </strong>
          </h1>
          <p style={{ color: "white" }}>
            Cette épreuve est une des trois épreuves d'informatique du BTS SIO. L'étudiant doit présenter deux projets différents, selon le choix de son option.
            Pour l'option SLAM, il s'agit d'un projet de type client léger, c'est-à-dire un projet qui est hébergé sur un serveur et qui sera accessible via un navigateur web, et un projet de type client lourd,
            qui nécessite une installation et une exécution sur le poste de l'utilisateur. 
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={nike}
                title="Projet de type client léger : Site e-commerce d'articles de sport"
                description="Réalisation d'un site de e-commerce. Ce site offre les fonctionnalités attendues d'une boutique en ligne, c'est-à-dire la création de compte pour les clients, la connexion avec une double authentification, la gestion d'un panier d'articles, et le passage de commandes. Le paiement est effectué via Stripe."
                ghLink="https://github.com/Jonathan-Cohen-00/e-commerce-nike"
                link="https://mediumslateblue-crab-828850.hostingersite.com/jonathan_cohen/e-commerce"
                linkName="Accéder au drive"
              />
            </Col>
  
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={nike}
                title="Projet de type client lourd : Application de bureau - Panel d'administration d'une boutique en ligne"
                description="Application windows qui permet la gestion de la boutique, c'est-à-dire l'authentification des gestionnaires, l'accès à un dashboard avec différents KPI, la modification des produits et stocks, la validation et consultations des commandes, l'archivage d'anciens produits. Cette solution utilise la même base de données et dans un environnement réaliste, les deux accèdent à la même base de données. Les bases fournies sont donc identiques."
                ghLink="https://github.com/Jonathan-Cohen-00/SneakerBackOffice"
                link="https://mediumslateblue-crab-828850.hostingersite.com/jonathan_cohen/e-commerce"
                linkName="Accéder au drive"
  
              />
            </Col>
  
       
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default EpreuveE6;
  
  