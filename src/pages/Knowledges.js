import React from 'react';
import Experiences from '../components/Knowledges/Experiences';
import Hobbies from '../components/Knowledges/Hobbies';
import Languages from '../components/Knowledges/Languages';
import OtherSkills from '../components/Knowledges/OtherSkills';
import Navigation from '../components/Navigation';

const CARTES = '.languagesFrameworks, .experience, .otherSkills, .hobbies';

const Knowledges = () => {
    // Projecteur suivant le curseur : on transmet au CSS la position du pointeur
    // dans la carte survolee, via deux variables. Un seul ecouteur pose sur le
    // conteneur plutot qu'un par carte, et rien n'est stocke dans l'etat React —
    // ce serait un rendu a chaque pixel parcouru.
    const suivreCurseur = (e) => {
        const carte = e.target.closest(CARTES);
        if (!carte) return;
        const zone = carte.getBoundingClientRect();
        carte.style.setProperty('--sx', `${e.clientX - zone.left}px`);
        carte.style.setProperty('--sy', `${e.clientY - zone.top}px`);
    };

    return (
        <div className="knowledges">
           <Navigation />
           <div className="knowledgesContent" onMouseMove={suivreCurseur}>
              <Languages />
              <Experiences />
              <OtherSkills />
              <Hobbies />

           </div>
        </div>
    );
};

export default Knowledges;
