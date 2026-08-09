import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';
import FullPageModal from '../common/FullPageModal';
import Carrousel from '../common/Carrousel';
import VisionneusePleinEcran from '../common/VisionneusePleinEcran';

// Noms des couches de `techSpecs`, cote affichage. Les cles du fichier de
// donnees restent en anglais : ce sont des termes techniques stables, alors que
// leur libelle a l'ecran peut changer.
const LIBELLES_COUCHES = {
    frontend: 'Interface',
    backend: 'Serveur',
    hosting: 'Hébergement',
};

// Libelle affiche quand un filtre ne contient encore aucun projet. Une entree
// par theme : plusieurs sections se remplissent au fil de l'eau, un message
// generique ne dirait pas ce qui est attendu a cet endroit.
const EMPTY_STATES = {
    Cursus: {
        icon: 'fas fa-graduation-cap',
        text: 'Les projets réalisés pendant mes formations arrivent ici.'
    },
    Formateur: {
        icon: 'fas fa-chalkboard-teacher',
        text: 'Les projets menés en tant que formateur arrivent ici.'
    },
    Vitrine: {
        icon: 'fas fa-store',
        text: 'Les sites vitrine et e-commerce arrivent ici.'
    },
    Labo: {
        icon: 'fas fa-flask',
        text: 'Les expérimentations, jeux et prototypes arrivent ici.'
    }
};

export default class ProjectList extends Component {
    state = {
        projects: portfolioData,
        // Filtrage par theme et non plus par langage. Les themes sont portes
        // par `themes` dans portfolioData.js ; un projet peut en avoir plusieurs.
        radios: [
            {id: 1, value: "Cursus"},
            {id: 2, value: "Formateur"},
            {id: 3, value: "Vitrine"},
            {id: 4, value: "Labo"}
        ],
        selectedRadio: 'Cursus',
        currentPage: 1,
        projectsPerPage: 6,
        selectedProject: null,
        showModal: false,
        // Index de la vue agrandie depuis la capture d'en-tete. `null` = ferme.
        indexEntete: null
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({
            selectedRadio: radio,
            currentPage: 1 // Reset to first page when changing filter
        });
    }

    handlePageChange = (pageNumber) => {
        this.setState({currentPage: pageNumber});
    }

    handlePrevPage = () => {
        this.setState(prevState => ({
            currentPage: Math.max(prevState.currentPage - 1, 1)
        }));
    }

    handleNextPage = (totalPages) => {
        this.setState(prevState => ({
            currentPage: Math.min(prevState.currentPage + 1, totalPages)
        }));
    }

    handleShowDetails = (project) => {
        this.setState({
            selectedProject: project,
            showModal: true
        });
    }

    // Vues servies a la visionneuse quand on agrandit la capture d'en-tete :
    // la galerie du projet si elle existe, sinon la seule capture de la carte.
    vuesEntete = (projet) => (
        projet.screenshots?.length
            ? projet.screenshots
            : [{ src: projet.picture, caption: projet.name }]
    );

    handleAgrandirEntete = () => {
        const projet = this.state.selectedProject;
        const vues = this.vuesEntete(projet);
        // S'ouvre sur la capture affichee, pas systematiquement sur la premiere.
        const depart = Math.max(0, vues.findIndex((v) => v.src === projet.picture));
        this.setState({ indexEntete: depart });
    };

    handleCloseModal = () => {
        this.setState({
            selectedProject: null,
            showModal: false,
            // Sans cette remise a zero, rouvrir une fiche reaffichait la
            // visionneuse restee ouverte de la precedente.
            indexEntete: null
        });
    }

    render() {
        let {projects, radios, selectedRadio, currentPage, projectsPerPage, showModal, selectedProject, indexEntete} = this.state;
        
        // Filtrage par theme
        const filteredProjects = projects.filter(item =>
            (item.themes || []).includes(selectedRadio)
        );
        
        // Calculate pagination
        const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
        const indexOfLastProject = currentPage * projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - projectsPerPage;
        const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
        
        // Generate page numbers for pagination
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                {/* Filters */}
                <ul className="radioDisplay">
                    {radios.map((radio) => {
                        return (
                            <li key={radio.id}>
                                <input
                                    type="radio"
                                    name="radio"
                                    checked={radio.value === selectedRadio}
                                    value={radio.value}
                                    id={radio.value}
                                    onChange={this.handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })}
                </ul>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    // Une grille vide passerait pour un bug : on annonce
                    // explicitement que la section se remplit, avec un libelle
                    // propre au filtre concerne.
                    <div className="projects-empty">
                        <i className={EMPTY_STATES[selectedRadio].icon}></i>
                        <p>Bientôt</p>
                        <span>{EMPTY_STATES[selectedRadio].text}</span>
                    </div>
                ) : (
                    <div className="projects">
                        {currentProjects.map(item => {
                            return (
                                <Project
                                    key={item.id}
                                    item={item}
                                    onShowDetails={this.handleShowDetails}
                                />
                            )
                        })}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button 
                            className="page-btn"
                            onClick={this.handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            ‹
                        </button>
                        
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                className={`page-btn ${currentPage === number ? 'active' : ''}`}
                                onClick={() => this.handlePageChange(number)}
                            >
                                {number}
                            </button>
                        ))}
                        
                        <button 
                            className="page-btn"
                            onClick={() => this.handleNextPage(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            ›
                        </button>
                        
                        <div className="page-info">
                            {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} sur {filteredProjects.length}
                        </div>
                    </div>
                )}

                {/* Modal for project details */}
                <FullPageModal 
                    show={showModal} 
                    onClose={this.handleCloseModal} 
                    title={selectedProject ? selectedProject.name : ''}
                    moduleType="Portfolio"
                >
                    {selectedProject && (
                        <div className="project-modal-content">
                            <div className="project-modal-header">
                                {/* Capture d'en-tete, agrandissable comme celles
                                    du carrousel. Quand le projet a une galerie,
                                    l'agrandissement s'ouvre sur la vue
                                    correspondante et on peut circuler dans
                                    toutes ; sinon la visionneuse n'en montre
                                    qu'une, sans fleches ni vignettes. */}
                                <button
                                    type="button"
                                    className="project-modal-image"
                                    onClick={this.handleAgrandirEntete}
                                    aria-label={`Agrandir l'aperçu de ${selectedProject.name}`}
                                >
                                    <img src={selectedProject.picture} alt={selectedProject.name} />
                                    <span className="loupe-entete" aria-hidden="true">
                                        <i className="fas fa-expand"></i>
                                    </span>
                                </button>
                                <div className="project-modal-tech">
                                    <h3>Technologies utilisées</h3>
                                    <div className="tech-icons">
                                        {selectedProject.languagesIcons.map(icon =>
                                            <i className={icon} key={icon}></i>
                                        )}
                                    </div>
                                    <div className="tech-list">
                                        {selectedProject.languages.map(lang =>
                                            <span key={lang} className="tech-tag">{lang}</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="project-modal-body">
                                <h3>Description du projet</h3>
                                <p className="project-description">{selectedProject.info}</p>

                                {/* Champs optionnels : seuls les projets qui les
                                    renseignent affichent ces sections. Les autres
                                    fiches restent inchangees. */}
                                {selectedProject.techSpecs && (
                                    <div className="project-specs">
                                        <h3>Architecture</h3>
                                        <dl>
                                            {Object.entries(selectedProject.techSpecs).map(([couche, outils]) => (
                                                <React.Fragment key={couche}>
                                                    <dt>{LIBELLES_COUCHES[couche] || couche}</dt>
                                                    <dd>{outils.join(' · ')}</dd>
                                                </React.Fragment>
                                            ))}
                                        </dl>
                                    </div>
                                )}

                                {selectedProject.screenshots?.length > 0 && (
                                    <div className="project-galerie">
                                        <h3>Aperçus</h3>
                                        {/* `key` sur l'id du projet : sans elle, passer
                                            d'un projet a l'autre reutiliserait le meme
                                            carrousel, qui resterait sur l'index de la
                                            fiche precedente. */}
                                        <Carrousel
                                            key={selectedProject.id}
                                            vues={selectedProject.screenshots}
                                            titre={selectedProject.name}
                                        />
                                    </div>
                                )}

                                <div className="project-modal-actions">
                                    {selectedProject.website && (
                                        <a 
                                            href={selectedProject.website} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="modal-action-btn primary"
                                        >
                                            <i className="fas fa-external-link-alt"></i>
                                            Voir le projet en ligne
                                        </a>
                                    )}
                                    {selectedProject.source && (
                                        <a 
                                            href={selectedProject.source} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="modal-action-btn secondary"
                                        >
                                            <i className="fab fa-github"></i>
                                              Voir le code source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {selectedProject && indexEntete !== null && (
                        <VisionneusePleinEcran
                            vues={this.vuesEntete(selectedProject)}
                            index={indexEntete}
                            onChangerIndex={(i) => this.setState({ indexEntete: i })}
                            onFermer={() => this.setState({ indexEntete: null })}
                            titre={selectedProject.name}
                        />
                    )}
                </FullPageModal>
            </>
        );
    }
}