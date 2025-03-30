import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import { DiLaravel } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";

function VeilleTechnologique() {
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
              <strong className="purple">Veille Technologique</strong> : Laravel
              &nbsp;

              <FaLaravel></FaLaravel>
            </h1>
            <p>
              Laravel est un framework PHP open-source créé en 2011 par{" "}
              <strong>Taylor Otwell</strong>. Il suit le modèle MVC et offre une
              syntaxe élégante, une CLI puissante (Artisan), un moteur de
              template (Blade) et une gestion de base de données via l'ORM
              Eloquent.
            </p>
            <h3 className="purple">Méthodologie de veille</h3>
            <p>
              Pour cette veille technologique, j'ai utilisé deux outils
              principaux :
            </p>
            <ul className="list-left">
              <li>
                <strong>Feedly</strong> : pour suivre en temps réel les blogs,
                communautés et annonces autour de Laravel.
              </li>
              <li>
                <strong>Google Alerts</strong> : pour recevoir par mail des
                alertes automatiques dès que des articles ou actualités
                mentionnent "Laravel 12", "Laravel", ou des mots-clés
                similaires.
              </li>
            </ul>
            <h3 className="purple">Évolutions récentes (2023 - 2025)</h3>
            <ul className="list-left">
              <li>
                <strong>Laravel 10 (2023)</strong> : Abandon du support des
                anciennes versions de PHP, nouvelles règles de validation plus
                lisibles et suppression de fonctions obsolètes pour un code plus
                léger.
              </li>
              <li>
                <strong>Laravel 11 (2024)</strong> : Réduction de la structure
                par défaut pour plus de personnalisation, amélioration de
                Laravel Octane (serveur haute performance) et kits de démarrage
                plus interactifs.
              </li>
              <li>
                <strong>Laravel 12 (2025)</strong> : Intégration native de
                TypeScript, kits front-end complets avec React/Vue/Livewire, et
                AuthKit pour une gestion simplifiée des authentifications
                externes.
              </li>
            </ul>

            <h3 className="purple">Comparaison avec d'autres frameworks PHP</h3>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Critère</th>
                  <th>Laravel</th>
                  <th>Symfony</th>
                  <th>CodeIgniter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Facilité d'apprentissage</td>
                  <td>✔️</td>
                  <td>❌</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <td>Fonctionnalités intégrées</td>
                  <td>✔️ Complètes</td>
                  <td>✔️ Riches mais techniques</td>
                  <td>❌ Limitées</td>
                </tr>
                <tr>
                  <td>Popularité</td>
                  <td>⭐ Haute</td>
                  <td>Moyenne</td>
                  <td>Basse</td>
                </tr>
              </tbody>
            </Table>

            <h3 className="purple">
              Popularité des frameworks PHP (Stack Overflow 2024)
            </h3>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Framework PHP</th>
                  <th>Taux d'utilisation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Laravel</td>
                  <td>7.9%</td>
                </tr>
                <tr>
                  <td>Symfony</td>
                  <td>3.2%</td>
                </tr>
                <tr>
                  <td>CodeIgniter</td>
                  <td>1.7%</td>
                </tr>
                <tr>
                  <td>Drupal</td>
                  <td>1.9%</td>
                </tr>
                <tr>
                  <td>Yii 2</td>
                  <td>0.9%</td>
                </tr>
              </tbody>
            </Table>
            <p>
              Ces données confirment la position dominante de Laravel parmi les
              frameworks PHP modernes, loin devant ses concurrents.
            </p>

            <h3 className="purple">L'intégration de TypeScript</h3>
            <p>
              Laravel 12 propose l'utilisation de TypeScript via des kits
              front-end (React, Vue, Livewire) préconfigurés, rendant le code
              front-end plus robuste. Avant, la configuration était manuelle.
              Aujourd'hui, elle est native et simplifiée.
            </p>

            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Avant Laravel 12</th>
                  <th>Depuis Laravel 12</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Configuration manuelle</td>
                  <td>Prête à l’emploi</td>
                </tr>
                <tr>
                  <td>Pas de support officiel</td>
                  <td>Support complet avec Vite</td>
                </tr>
              </tbody>
            </Table>

            <h3 className="purple">Pourquoi Laravel se distingue</h3>
            <ul className="list-left">
              <li>Une communauté très active et des mises à jour fréquentes</li>
              <li>Une documentation claire et abondante</li>
              <li>Une prise en main rapide, idéale pour les débutants</li>
              <li>
                Un écosystème riche : Laravel Breeze, Jetstream, Nova, Forge...
              </li>
              <li>Des performances solides avec Laravel Octane</li>
              <li>
                Intégration moderne avec des technologies front-end (TypeScript,
                Vite, React, etc.)
              </li>
            </ul>

            <p>
              Grâce à son approche orientée développeur, sa simplicité sans
              sacrifier la puissance, Laravel a su conquérir une large part du
              marché PHP. Il se distingue de Symfony par sa facilité, sa courbe
              d’apprentissage rapide et sa productivité immédiate. À long terme,
              Laravel a toutes les cartes en main pour s'imposer comme
              framework PHP de référence.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default VeilleTechnologique;
