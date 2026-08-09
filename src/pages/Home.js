import React from 'react';
import Navigation from '../components/Navigation';
import { lienMail } from '../data/contactInfo';
import donnees from '../data/parcours.json';

// Reperes de parcours et chiffres : lus depuis parcours.json, la source unique
// partagee avec le chatbot (le service mailer monte le meme fichier). Une date
// se corrige la-bas, une seule fois.
const PARCOURS = donnees.parcours;
const STATS = donnees.chiffres;

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="hero-section">
                    {/* Le texte occupe la colonne de gauche, les chiffres une
                        colonne verticale a droite sur toute sa hauteur. */}
                    <div className="hero-top">
                        <div className="hero-text">
                            <div className="intro-badge">
                                <i className="fas fa-code"></i>
                                <span>Développeur Full-Stack & Data Analyst</span>
                            </div>
                            <h1>
                                <span className="name-highlight">Lory Carvajol</span>
                            </h1>
                            <h2 className="tagline">
                                De l'industrie au numérique — développement, data et formation
                            </h2>

                            <p className="description">
                                Treize ans dans le transport et la distribution d'énergie chez Alstom-Areva,
                                puis une reconversion vers le développement en 2020. Depuis, je forme des
                                développeurs web et mobile, j'analyse des données — dont deux ans chez Airbus
                                sur le projet PilotMe — et j'accompagne les entreprises en freelance.
                            </p>

                            <div className="cta-section">
                                <a
                                    href={`${process.env.PUBLIC_URL}/media/CV_carvajol_lory_24-02-26.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    data-infobulle="Ouvre le CV au format PDF dans un nouvel onglet"
                                >
                                    <i className="fas fa-download"></i>
                                    Télécharger mon CV
                                </a>
                                {/* Ouvre le gestionnaire de courrier dans une autre fenetre.
                                    Remplace l'ancre #contact, qui ne pointait sur rien. */}
                                <a
                                    href={lienMail('Contact professionnel')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                    data-infobulle="Ouvre votre messagerie avec mon adresse déjà remplie"
                                >
                                    <i className="fas fa-envelope"></i>
                                    Me contacter
                                </a>
                            </div>
                        </div>

                        <div className="hero-stats">
                            {STATS.map((stat) => (
                                <div className="stat-card" key={stat.valeur}>
                                    <div className="stat-number">{stat.valeur}</div>
                                    <div className="stat-label">{stat.libelle}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="key-highlights">
                        {PARCOURS.map((etape) => (
                            <div className="highlight-item" key={etape.titre}>
                                <i className={etape.icone}></i>
                                <div>
                                    <strong>{etape.titre}</strong>
                                    <span>{etape.detail}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
