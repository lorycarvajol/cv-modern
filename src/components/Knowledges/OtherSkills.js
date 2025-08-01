import React, { useState } from 'react';
import FullPageModal from '../common/FullPageModal';

const OtherSkills = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
            <div className="otherSkills">
                <h3>Autres compétences</h3>
                <div className="list">
                    <ul>
                        <li><i className="fas fa-check-square"></i>Programmation en Python</li>
                        <li><i className="fas fa-check-square"></i>Développement Front-end</li>
                        <li><i className="fas fa-check-square"></i>Gestion de bases de données</li>
                        <li><i className="fas fa-check-square"></i>Développement d'API RESTful</li>
                    </ul>
                    <ul>
                        <li><i className="fas fa-check-square"></i>Analyse des données</li>
                        <li><i className="fas fa-check-square"></i>Outils de versionnement</li>
                        <li><i className="fas fa-check-square"></i>Déploiement avec Docker</li>
                        <li><i className="fas fa-check-square"></i>Maîtrise de frameworks</li>
                    </ul>
                </div>
                <button className="small-button" onClick={toggleModal}>
                    Voir plus
                </button>
            </div>

            <FullPageModal 
                show={showModal} 
                onClose={toggleModal} 
                title="Compétences Techniques Détaillées"
                moduleType="Autres Compétences"
            >
                <h2>Compétences Techniques Avancées</h2>
                
                <h3>Programmation & Développement</h3>
                <ul>
                    <li><i className="fab fa-python"></i>Python - Développement d'applications, scripts d'automatisation, analyse de données</li>
                    <li><i className="fab fa-js-square"></i>JavaScript ES6+ - Applications web modernes, programmation asynchrone</li>
                    <li><i className="fab fa-react"></i>React.js - Interfaces utilisateur dynamiques, hooks, state management</li>
                    <li><i className="fab fa-html5"></i>HTML5/CSS3 - Sémantique moderne, animations, responsive design</li>
                </ul>

                <h3>Bases de Données & API</h3>
                <ul>
                    <li><i className="fas fa-database"></i>SQL - PostgreSQL, MySQL, requêtes complexes, optimisation</li>
                    <li><i className="fas fa-server"></i>API RESTful - Conception, développement, documentation avec OpenAPI</li>
                    <li><i className="fas fa-code"></i>ORM - SQLAlchemy, Django ORM, gestion des migrations</li>
                    <li><i className="fas fa-bolt"></i>FastAPI - APIs haute performance, validation automatique</li>
                </ul>

                <h3>DevOps & Outils</h3>
                <ul>
                    <li><i className="fab fa-docker"></i>Docker - Conteneurisation, docker-compose, déploiement multi-environnements</li>
                    <li><i className="fab fa-git-alt"></i>Git - Workflow Git Flow, résolution de conflits, hooks</li>
                    <li><i className="fas fa-terminal"></i>Linux/Unix - Administration système, scripts bash, automatisation</li>
                    <li><i className="fas fa-cloud"></i>CI/CD - GitHub Actions, déploiement automatisé</li>
                </ul>

                <h3>Analyse de Données</h3>
                <ul>
                    <li><i className="fas fa-chart-line"></i>Pandas/NumPy - Manipulation de données, analyse statistique</li>
                    <li><i className="fas fa-chart-bar"></i>Matplotlib/Seaborn - Visualisation de données, reporting</li>
                    <li><i className="fas fa-robot"></i>Machine Learning - Scikit-learn, preprocessing, évaluation de modèles</li>
                    <li><i className="fas fa-table"></i>Power BI - Tableaux de bord interactifs, KPIs</li>
                </ul>

                <p>
                    Ces compétences ont été développées et affinées au cours de mes expériences professionnelles, 
                    notamment lors de mon apprentissage chez Airbus où j'ai pu travailler sur des projets concrets 
                    d'analyse de données industrielles et de développement d'outils métier.
                </p>
            </FullPageModal>
        </>
    );
};

export default OtherSkills;
