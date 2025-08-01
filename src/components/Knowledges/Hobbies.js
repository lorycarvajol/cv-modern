import React, { useState } from 'react';
import FullPageModal from '../common/FullPageModal';

const Hobbies = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                        <i className="fas fa-drumstick-bite"></i>
                        <span>Cuisine</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-fish"></i>
                        <span>Aquaplaning</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-book"></i>
                        <span>Lecture</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-water"></i>
                        <span>Natation</span>
                    </li>
                </ul>
                <button className="small-button" onClick={toggleModal}>
                    Voir plus
                </button>
            </div>

            <FullPageModal 
                show={showModal} 
                onClose={toggleModal} 
                title="Passions & Centres d'Intérêt"
                moduleType="Intérêts Personnels"
            >
                <h2>Mes Passions</h2>
                
                <h3>Cuisine & Gastronomie</h3>
                <p>
                    Passionné de cuisine depuis plusieurs années, j'aime explorer les saveurs du monde et 
                    créer de nouveaux plats. Cette passion m'a appris la patience, la précision et l'importance 
                    de bien suivre un processus - des qualités directement transférables dans le développement logiciel.
                </p>
                <ul>
                    <li><i className="fas fa-utensils"></i>Cuisine française traditionnelle et moderne</li>
                    <li><i className="fas fa-globe-asia"></i>Exploration des cuisines asiatiques</li>
                    <li><i className="fas fa-birthday-cake"></i>Pâtisserie et desserts créatifs</li>
                    <li><i className="fas fa-seedling"></i>Cuisine saine et équilibrée</li>
                </ul>

                <h3>Sports Aquatiques</h3>
                <p>
                    Les activités aquatiques occupent une place importante dans ma vie. La natation et l'aquaplaning 
                    me permettent de maintenir un équilibre physique et mental, tout en développant ma discipline personnelle.
                </p>
                <ul>
                    <li><i className="fas fa-swimmer"></i>Natation - 3 séances par semaine, perfectionnement technique</li>
                    <li><i className="fas fa-ship"></i>Aquaplaning - Sports nautiques et sensations fortes</li>
                    <li><i className="fas fa-waves"></i>Plongée sous-marine - Exploration des fonds marins</li>
                </ul>

                <h3>Lecture & Développement Personnel</h3>
                <p>
                    Grand amateur de lecture, je lis régulièrement des ouvrages techniques, de science-fiction 
                    et de développement personnel. Cette habitude m'aide à rester curieux et à continuellement 
                    apprendre de nouvelles choses.
                </p>
                <ul>
                    <li><i className="fas fa-code"></i>Littérature technique - Développement, IA, nouvelles technologies</li>
                    <li><i className="fas fa-rocket"></i>Science-fiction - Isaac Asimov, Philip K. Dick</li>
                    <li><i className="fas fa-brain"></i>Développement personnel - Productivité, leadership</li>
                    <li><i className="fas fa-history"></i>Histoire des sciences et technologies</li>
                </ul>

                <h3>Impact sur ma Vie Professionnelle</h3>
                <p>
                    Ces activités enrichissent ma personnalité et apportent des compétences complémentaires à mon profil technique :
                </p>
                <ul>
                    <li><i className="fas fa-puzzle-piece"></i>Créativité et résolution de problèmes</li>
                    <li><i className="fas fa-clock"></i>Gestion du temps et discipline</li>
                    <li><i className="fas fa-users"></i>Travail d'équipe (sports collectifs)</li>
                    <li><i className="fas fa-graduation-cap"></i>Apprentissage continu et curiosité</li>
                </ul>
            </FullPageModal>
        </>
    );
};

export default Hobbies;
