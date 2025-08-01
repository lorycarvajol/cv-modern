import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: "Python"},
            {id: 2, value: "php"},
            {id: 3, value: "React"},
            {id: 4, value: "symfony"}
        ],
        selectedRadio: 'React',
        currentPage: 1,
        projectsPerPage: 6,
        selectedProject: null,
        showDetails: false
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
            showDetails: true
        });
    }

    handleCloseDetails = () => {
        this.setState({
            selectedProject: null,
            showDetails: false
        });
    }

    render() {
        let {projects, radios, selectedRadio, currentPage, projectsPerPage} = this.state;
        
        // Filter projects by selected technology
        const filteredProjects = projects.filter(item => 
            item.languages.includes(selectedRadio)
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

        let {showDetails, selectedProject} = this.state;

        if (showDetails && selectedProject) {
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

                    {/* Project Details */}
                    <div className="project-details">
                        <div className="detail-header">
                            <button className="close-detail-btn" onClick={this.handleCloseDetails}>
                                <i className="fas fa-arrow-left"></i>
                                Retour
                            </button>
                            <h2>{selectedProject.name}</h2>
                            <div className="detail-tech">
                                {selectedProject.languagesIcons.map(icon =>
                                    <i className={icon} key={icon}></i>
                                )}
                            </div>
                        </div>
                        
                        <div className="detail-content">
                            <div className="detail-image">
                                <img src={selectedProject.picture} alt={selectedProject.name} />
                            </div>
                            
                            <div className="detail-info">
                                <div className="detail-description">
                                    <p>{selectedProject.info}</p>
                                </div>
                                
                                <div className="detail-actions">
                                    {selectedProject.website && (
                                        <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                                            <i className="fas fa-external-link-alt"></i>
                                            Voir le projet
                                        </a>
                                    )}
                                    {selectedProject.source && (
                                        <a href={selectedProject.source} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                                            <i className="fab fa-github"></i>
                                            Code source
                                        </a>
                                    )}
                                    <button onClick={this.handleCloseDetails} className="action-btn tertiary">
                                        <i className="fas fa-times"></i>
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
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
            </>
        );
    }
}

