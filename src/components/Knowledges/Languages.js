import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import FullPageModal from '../common/FullPageModal';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "Python", xp: 2 },
            { id: 2, value: "SQL", xp: 5 },
            { id: 3, value: "php", xp: 5 },
            { id: 4, value: "javascript", xp: 5 }
        ],
        frameworks: [
            { id: 1, value: "Django", xp: 2 },
            { id: 2, value: "Bootstrap", xp: 5 },
            { id: 3, value: "Symfony", xp: 2 },
            { id: 4, value: "React", xp: 5 }
        ],
        isModalOpen: false,
    };

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    };

    render() {
        const { languages, frameworks, isModalOpen } = this.state;

        return (
            <>
                <div className="languagesFrameworks">
                    <h3>Langages & Frameworks</h3>
                    
                    <div className="content-wrapper">
                        <ProgressBar
                            className="languagesDisplay"
                            languages={languages}
                            title="Languages"
                        />

                        <ProgressBar
                            className="frameworksDisplay"
                            languages={frameworks}
                            title="Frameworks & Bibliothèques"
                        />
                    </div>

                    <button className="small-button" onClick={this.openModal}>
                        Voir plus
                    </button>
                </div>

                <FullPageModal 
                    show={isModalOpen} 
                    onClose={this.closeModal} 
                    title="Stack Technique Complète"
                    moduleType="Langages & Frameworks"
                >
                    <h2>Ma Stack Technique</h2>
                    
                    {/* Grille definie dans _fullpage-modal.scss : en style en
                        ligne, les deux colonnes etaient imposees jusqu'a 320px
                        de large et la seconde sortait du cadre. */}
                    <div className="colonnes-modale">
                        <div>
                            <h3>Langages de Programmation</h3>
                            <ul>
                                <li><i className="fab fa-python"></i><strong>Python (2 ans)</strong> - Django, FastAPI, Data Science</li>
                                <li><i className="fas fa-database"></i><strong>SQL (5 ans)</strong> - PostgreSQL, MySQL, optimisation</li>
                                <li><i className="fab fa-php"></i><strong>PHP (5 ans)</strong> - MVC, sécurité, APIs REST</li>
                                <li><i className="fab fa-js-square"></i><strong>JavaScript (5 ans)</strong> - ES6+, Node.js, async</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3>Frameworks & Bibliothèques</h3>
                            <ul>
                                <li><i className="fab fa-python"></i><strong>Django (2 ans)</strong> - ORM, API REST, déploiement</li>
                                <li><i className="fab fa-bootstrap"></i><strong>Bootstrap (5 ans)</strong> - Responsive, SASS</li>
                                <li><i className="fab fa-symfony"></i><strong>Symfony (2 ans)</strong> - MVC, Twig, Doctrine</li>
                                <li><i className="fab fa-react"></i><strong>React (5 ans)</strong> - Hooks, SPA, styling</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Combinaisons Techniques Maîtrisées</h3>
                    <ul>
                        <li><i className="fas fa-layer-group"></i><strong>Full Stack Python</strong> : Django + PostgreSQL + Bootstrap + Deployment Docker</li>
                        <li><i className="fas fa-chart-line"></i><strong>Data Stack</strong> : Python + Pandas/NumPy + SQL + Power BI + Matplotlib</li>
                        <li><i className="fas fa-globe"></i><strong>Web Moderne</strong> : React + JavaScript ES6+ + API REST + Responsive Design</li>
                        <li><i className="fas fa-server"></i><strong>Backend Robuste</strong> : PHP/Symfony + MySQL + API + Sécurité avancée</li>
                    </ul>

                    <h3>Projets Phares par Stack</h3>
                    
                    <h4>Stack Python/Django</h4>
                    <ul>
                        <li><i className="fas fa-rocket"></i><strong>Plateforme PilotMe (Airbus)</strong> - Dashboard industriel avec KPIs temps réel</li>
                        <li><i className="fas fa-chart-bar"></i><strong>Analytics Engine</strong> - ETL automatisé + visualisations Matplotlib</li>
                        <li><i className="fas fa-robot"></i><strong>ML Pipeline</strong> - Preprocessing + modèles Scikit-learn + API FastAPI</li>
                    </ul>

                    <h4>Stack Base de Données</h4>
                    <ul>
                        <li><i className="fas fa-database"></i><strong>Data Warehouse</strong> - Schéma étoile PostgreSQL + requêtes analytiques</li>
                        <li><i className="fas fa-tachometer-alt"></i><strong>Optimisation BDD</strong> - Index composites + requêtes CTE + performances</li>
                        <li><i className="fas fa-sync-alt"></i><strong>ETL Complexe</strong> - Transformation multi-sources + intégrité référentielle</li>
                    </ul>

                    <h4>Stack Web Full Stack</h4>
                    <ul>
                        <li><i className="fas fa-shopping-cart"></i><strong>E-commerce PHP</strong> - Architecture MVC + paiement sécurisé + admin</li>
                        <li><i className="fab fa-react"></i><strong>Dashboard React</strong> - SPA + hooks + API consumption + charts</li>
                        <li><i className="fas fa-mobile-alt"></i><strong>Responsive Design</strong> - Bootstrap + SASS + mobile-first</li>
                    </ul>

                    <h3>Compétences Transversales</h3>
                    <ul>
                        <li><i className="fab fa-git-alt"></i><strong>DevOps</strong> : Git workflows + Docker + CI/CD + déploiement</li>
                        <li><i className="fas fa-shield-alt"></i><strong>Sécurité</strong> : Authentification + autorisation + protection OWASP</li>
                        <li><i className="fas fa-search"></i><strong>Qualité Code</strong> : Tests unitaires + code review + documentation</li>
                        <li><i className="fas fa-users-cog"></i><strong>Méthodologies</strong> : Agile/Scrum + architecture MVC + design patterns</li>
                    </ul>

                    <h3>Évolution & Apprentissage Continu</h3>
                    <p>
                        Ma stack technique évolue constamment. Actuellement en approfondissement sur :
                        React avancé (Context API, Redux), architecture microservices, 
                        et technologies cloud (AWS/Azure). L'objectif est de maîtriser 
                        une stack complète permettant de développer des applications 
                        modernes, scalables et maintenables.
                    </p>
                </FullPageModal>
            </>
        );
    }
}

export default Languages;
