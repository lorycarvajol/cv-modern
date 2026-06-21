import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="hero-section">
                    <div className="hero-text">
                        <div className="intro-badge">
                            <i className="fas fa-code"></i>
                            <span>Développeur Full-Stack & Data Analyst</span>
                        </div>
                        <h1>
                            <span className="name-highlight">Lory Carvajol</span>
                        </h1>
                        <h2 className="tagline">
                            Expert en transformation digitale & formation tech
                        </h2>
                        <p className="description">
                            Formateur et consultant numérique passionné, j'accompagne les entreprises 
                            dans leur digitalisation grâce à mon expertise en développement web moderne 
                            et analyse de données acquise chez Airbus.
                        </p>
                        
                        <div className="key-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-plane"></i>
                                <div>
                                    <strong>Airbus</strong>
                                    <span>Data Analyst 2022-2024</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-chalkboard-teacher"></i>
                                <div>
                                    <strong>Formateur Expert</strong>
                                    <span>Web & Mobile Development</span>
                                </div>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-rocket"></i>
                                <div>
                                    <strong>Consultant</strong>
                                    <span>Transformation Digitale</span>
                                </div>
                            </div>
                        </div>

                        <div className="cta-section">
                            <a href="./media/CV_carvajol_lory_24-02-26.pdf" target="_blank" className="btn-primary">
                                <i className="fas fa-download"></i>
                                Télécharger mon CV
                            </a>
                            <a href="#contact" className="btn-secondary">
                                <i className="fas fa-envelope"></i>
                                Me contacter
                            </a>
                        </div>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Années d'expérience</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">20+</div>
                            <div className="stat-label">Projets réalisés</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Apprenants formés</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;