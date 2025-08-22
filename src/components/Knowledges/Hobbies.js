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
                        <i className="fas fa-bicycle"></i>
                        <span>Cyclisme</span>
                    </li>
                    <li className="hobby">
                        <i className="fas fa-dumbbell"></i>
                        <span>Fitness</span>
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

                <h3>Sport & Bien-être</h3>
                <p>
                    Le sport fait partie intégrante de ma routine quotidienne. Entre cyclisme, fitness et natation, 
                    je maintiens un équilibre physique et mental qui me permet d'être plus efficace dans mon travail.
                </p>
                <ul>
                    <li><i className="fas fa-swimmer"></i>Natation - 3 séances par semaine, perfectionnement technique</li>
                    <li><i className="fas fa-bicycle"></i>Cyclisme - Sorties route et VTT, exploration des environs</li>
                    <li><i className="fas fa-dumbbell"></i>Fitness - Musculation et cardio, renforcement général</li>
                    <li><i className="fas fa-running"></i>Course à pied - Endurance et dépassement de soi</li>
                </ul>

                <h3>Lecture & Culture Générale</h3>
                <p>
                    La lecture est un pilier de mon développement personnel et professionnel. Je privilégie 
                    les ouvrages techniques, les biographies inspirantes et les romans qui nourrissent ma créativité 
                    et ma vision du monde.
                </p>
                <ul>
                    <li><i className="fas fa-code"></i>Littérature technique - Développement, IA, nouvelles technologies</li>
                    <li><i className="fas fa-rocket"></i>Science-fiction - Exploration des futurs possibles</li>
                    <li><i className="fas fa-brain"></i>Développement personnel - Productivité, leadership</li>
                    <li><i className="fas fa-book-open"></i>Biographies - Parcours inspirants d'entrepreneurs</li>
                </ul>

                <h3>Impact sur ma Vie Professionnelle</h3>
                <p>
                    Ces activités enrichissent ma personnalité et apportent des compétences complémentaires à mon profil technique :
                </p>
                <ul>
                    <li><i className="fas fa-puzzle-piece"></i>Créativité et résolution de problèmes (cuisine)</li>
                    <li><i className="fas fa-clock"></i>Gestion du temps et discipline (sport régulier)</li>
                    <li><i className="fas fa-target"></i>Persévérance et dépassement de soi (fitness/cyclisme)</li>
                    <li><i className="fas fa-graduation-cap"></i>Apprentissage continu et curiosité (lecture)</li>
                </ul>
            </FullPageModal>
        </>
    );
};

export default Hobbies;
