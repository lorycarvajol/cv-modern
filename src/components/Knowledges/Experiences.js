import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FullPageModal from '../common/FullPageModal';

const Experiences = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="experience">
                <h3>Expérience</h3>

                <div className="exp-1">
                    <h4>Formateur/Consultant numérique 2025 / 2026</h4>
                    <p>- Formateur numérique pour l'entreprise Nepsod et consultant freelance</p>
                    <p>- Formateur en développement web et mobile et consultant formation / data analyste</p>
                </div>

                <div className="exp-2">
                    <h4>Apprentis Data-analyste Airbus 2022 / 2024</h4>
                    <p>- Mise en place du projet PilotMe.</p>
                    <p>- Suivi et support des activités du service Manufacturing Engineering.</p>
                </div>

                <div className="exp-3">
                    <h4>Freelance et formateur DWWM 2020 / 2022</h4>
                    <p>Formateur en développement web et mobile</p>
                    <p>Responsable du site de formation de Saint-Baldoph.</p>
                </div>

               
                
                <button className="small-button" onClick={openModal}>
                    Voir plus
                </button>
            </div>

            <FullPageModal 
                show={showModal} 
                onClose={closeModal} 
                title="Parcours Professionnel Détaillé"
                moduleType="Expériences"
            >
                <div className="all-experiences">
                    
                    <div className="experience-section">
                        <h2>Formateur/Consultant Numérique (2025 - 2026)</h2>
                        
                        <h3>Contexte Professionnel</h3>
                        <p>
                            Fort de mes expériences en formation et en analyse de données, j'ai lancé mon activité de consultant 
                            indépendant pour accompagner les entreprises dans leur transformation numérique et former les professionnels 
                            aux compétences digitales de demain.
                        </p>

                        <h3>Activités Principales</h3>
                        <ul>
                            <li><i className="fas fa-laptop-code"></i>Formation en développement web et mobile pour Nepsod</li>
                            <li><i className="fas fa-chart-pie"></i>Consulting en data analyse et business intelligence</li>
                            <li><i className="fas fa-users-class"></i>Animation de sessions de formation professionnelle</li>
                            <li><i className="fas fa-project-diagram"></i>Accompagnement à la transformation digitale des entreprises</li>
                        </ul>

                        <h3>Domaines d'Expertise</h3>
                        <ul>
                            <li><i className="fab fa-react"></i>Développement d'applications web modernes (React, Vue.js, Node.js)</li>
                            <li><i className="fab fa-python"></i>Analyse de données et Machine Learning avec Python</li>
                            <li><i className="fas fa-database"></i>Architecture de données et solutions BI</li>
                            <li><i className="fas fa-mobile-alt"></i>Développement mobile cross-platform</li>
                        </ul>

                        <h3>Prestations Proposées</h3>
                        <ul>
                            <li><i className="fas fa-graduation-cap"></i>Formation sur mesure en entreprise</li>
                            <li><i className="fas fa-hands-helping"></i>Accompagnement de projets data</li>
                            <li><i className="fas fa-code-branch"></i>Audit et optimisation de code</li>
                            <li><i className="fas fa-lightbulb"></i>Conseil en stratégie digitale</li>
                        </ul>

                        <h3>Approche Pédagogique</h3>
                        <p>
                            Ma méthode combine théorie et pratique intensive, avec des projets concrets adaptés au contexte 
                            professionnel de chaque client. J'apporte une attention particulière à la transmission des bonnes 
                            pratiques et à l'autonomisation des équipes.
                        </p>
                    </div>

                    <hr style={{margin: '40px 0', borderColor: '#ddd'}} />

                    <div className="experience-section">
                        <h2>Apprentis Data-Analyste - Airbus (2022-2024)</h2>
                        
                        <h3>Contexte & Mission</h3>
                        <p>
                            Intégré au sein du service Manufacturing Engineering d'Airbus, j'ai participé à la digitalisation 
                            des processus industriels dans le cadre de l'industrie 4.0. Cette expérience m'a permis de découvrir 
                            l'univers de l'aéronautique et de développer mes compétences en analyse de données à grande échelle.
                        </p>

                        <h3>Projet Principal : PilotMe</h3>
                        <ul>
                            <li><i className="fas fa-rocket"></i>Conception et développement d'une plateforme de pilotage Manufacturing Engineering</li>
                            <li><i className="fas fa-chart-line"></i>Création de tableaux de bord interactifs pour le suivi des KPIs industriels</li>
                            <li><i className="fas fa-database"></i>Intégration de données multi-sources (SAP, bases manufacturières, capteurs IoT)</li>
                            <li><i className="fas fa-cogs"></i>Automatisation des processus de reporting avec Python et Power BI</li>
                        </ul>

                        <h3>Responsabilités Techniques</h3>
                        <ul>
                            <li><i className="fab fa-python"></i>Développement de scripts Python pour l'extraction et transformation de données</li>
                            <li><i className="fas fa-server"></i>Gestion des flux ETL pour l'alimentation des bases de données décisionnelles</li>
                            <li><i className="fas fa-chart-bar"></i>Création de visualisations avancées avec Matplotlib, Seaborn et Power BI</li>
                            <li><i className="fas fa-tools"></i>Support technique niveau 2 pour les utilisateurs métier</li>
                        </ul>

                        <h3>Compétences Développées</h3>
                        <ul>
                            <li><i className="fas fa-industry"></i>Compréhension des processus industriels aéronautiques</li>
                            <li><i className="fas fa-users-cog"></i>Travail en équipe pluridisciplinaire (ingénieurs, techniciens, managers)</li>
                            <li><i className="fas fa-project-diagram"></i>Gestion de projet en mode Agile/Scrum</li>
                            <li><i className="fas fa-presentation"></i>Communication technique auprès des parties prenantes</li>
                        </ul>

                        <p>
                            Cette expérience chez Airbus a été déterminante dans ma carrière, me permettant d'acquérir 
                            une vision 360° des enjeux de la transformation digitale dans l'industrie de pointe.
                        </p>
                    </div>

                    <hr style={{margin: '40px 0', borderColor: '#ddd'}} />

                    <div className="experience-section">
                        <h2>Freelance et Formateur DWWM (2020-2022)</h2>
                        
                        <h3>Formation Initiale</h3>
                        <p>
                            Après une reconversion professionnelle, j'ai suivi une formation intensive en Développement Web et Web Mobile 
                            qui m'a permis d'acquérir les compétences techniques fondamentales du développement moderne.
                        </p>

                        <h3>Évolution vers Formateur</h3>
                        <p>
                            Grâce à mes aptitudes pédagogiques et ma progression rapide, j'ai été sollicité pour devenir formateur 
                            et accompagner les nouveaux apprenants dans leur parcours de reconversion.
                        </p>

                        <h3>Responsabilités Pédagogiques</h3>
                        <ul>
                            <li><i className="fas fa-chalkboard-teacher"></i>Animation de sessions de formation en développement web</li>
                            <li><i className="fas fa-code"></i>Enseignement des technologies : HTML5/CSS3, JavaScript, PHP, MySQL</li>
                            <li><i className="fab fa-react"></i>Introduction aux frameworks modernes (React, Symfony)</li>
                            <li><i className="fas fa-project-diagram"></i>Accompagnement sur les projets fil rouge et soutenances</li>
                        </ul>

                        <h3>Gestion du Site de Saint-Baldoph</h3>
                        <ul>
                            <li><i className="fas fa-building"></i>Responsabilité opérationnelle du centre de formation</li>
                            <li><i className="fas fa-users"></i>Coordination des équipes pédagogiques (4 formateurs)</li>
                            <li><i className="fas fa-calendar-alt"></i>Planification des sessions et suivi des progressions</li>
                            <li><i className="fas fa-handshake"></i>Relations avec les entreprises partenaires pour les stages</li>
                        </ul>

                        <h3>Méthodologies & Outils</h3>
                        <ul>
                            <li><i className="fas fa-graduation-cap"></i>Pédagogie active et apprentissage par projet</li>
                            <li><i className="fab fa-git-alt"></i>Formation aux bonnes pratiques Git et travail collaboratif</li>
                            <li><i className="fas fa-bug"></i>Debugging et résolution de problèmes en binôme</li>
                            <li><i className="fas fa-presentation"></i>Préparation aux entretiens techniques</li>
                        </ul>

                        <h3>Résultats</h3>
                        <p>
                            Taux de réussite de 85% sur les promotions encadrées, avec 90% d'insertion professionnelle 
                            dans les 6 mois suivant la formation. Cette expérience m'a appris l'importance de la transmission 
                            de connaissances et m'a permis de consolider mes propres compétences techniques.
                        </p>
                    </div>

                    {/* Intervalle entre les deux periodes. Discret a dessein :
                        une ligne sobre, pas une section — le detail est sur une
                        page a part, atteignable seulement d'ici. */}
                    <Link to="/parcours-2014-2020" className="intervalle-parcours">
                        <span className="periode">2014 — 2020</span>
                        <span className="mention">En savoir plus</span>
                    </Link>

                    <div className="experience-section">
                        <h2>Monteur-Câbleur - Alstom-Areva (2001-2014)</h2>
                        
                        <h3>Contexte Industriel</h3>
                        <p>
                            Premier emploi dans l'industrie lourde, au sein d'Alstom-Areva, dans le transport et la
                            distribution d'énergie. Cette expérience de treize ans m'a forgé une solide culture industrielle
                            et m'a appris la rigueur indispensable dans les environnements à haute criticité.
                        </p>

                        <h3>Activités en Atelier Blanc</h3>
                        <ul>
                            <li><i className="fas fa-hard-hat"></i>Montage de sous-ensembles mécaniques haute précision</li>
                            <li><i className="fas fa-bolt"></i>Câblage de systèmes électriques et électroniques complexes</li>
                            <li><i className="fas fa-search"></i>Contrôle qualité selon les standards de l'industrie de l'énergie</li>
                            <li><i className="fas fa-clipboard-check"></i>Respect des procédures qualité et traçabilité complète</li>
                        </ul>

                        <h3>Interventions sur Site</h3>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i>Déplacements sur sites français et internationaux, dont des environnements de centrale nucléaire</li>
                            <li><i className="fas fa-users"></i>Travail en équipe sous supervision technique</li>
                            <li><i className="fas fa-shield-alt"></i>Respect strict des consignes de sécurité, dont la radioprotection sur les sites concernés</li>
                            <li><i className="fas fa-clock"></i>Gestion des contraintes d'arrêt de tranche (planning serré)</li>
                        </ul>

                        <h3>Compétences Techniques Acquises</h3>
                        <ul>
                            <li><i className="fas fa-wrench"></i>Mécanique de précision et assemblage haute technicité</li>
                            <li><i className="fas fa-plug"></i>Électrotechnique et électronique industrielle</li>
                            <li><i className="fas fa-microscope"></i>Lecture de plans techniques et schémas électriques</li>
                            <li><i className="fas fa-certificate"></i>Habilitations électriques B1V, B2V, BR</li>
                        </ul>

                        <h3>Soft Skills Développées</h3>
                        <ul>
                            <li><i className="fas fa-eye"></i>Rigueur et attention aux détails</li>
                            <li><i className="fas fa-stopwatch"></i>Gestion du stress et des délais serrés</li>
                            <li><i className="fas fa-handshake"></i>Esprit d'équipe et communication technique</li>
                            <li><i className="fas fa-shield-alt"></i>Culture sécurité et prévention des risques</li>
                        </ul>

                        <h3>Évolution de Carrière</h3>
                        <p>
                            Cette expérience initiale dans l'industrie lourde m'a donné des bases solides en rigueur industrielle 
                            et en respect des procédures. Les compétences acquises en lecture de plans techniques et en résolution 
                            de problèmes complexes se sont révélées très utiles dans ma reconversion vers le développement logiciel.
                        </p>

                        <p>
                            Le passage du montage mécanique au code informatique peut sembler éloigné, mais les deux domaines 
                            partagent des similarités : précision, logique, débogage méthodique et travail en équipe.
                        </p>
                    </div>
                </div>
            </FullPageModal>
        </>
    );
};

export default Experiences;