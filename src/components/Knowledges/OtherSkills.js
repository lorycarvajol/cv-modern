import React, { useState } from 'react';
import Modal from '../common/Modal';
import Glassbox from '../common/Glassbox';

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
                <button className="button" onClick={toggleModal}>
                    Voir plus
                </button>
            </div>

            {showModal && (
                <Modal show={showModal} onClose={toggleModal} title="Compétences supplémentaires">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nunc non ipsum.</p>
                </Modal>
                )}
           
        </>
    );
};

export default OtherSkills;
