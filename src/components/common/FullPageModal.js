import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const SELECTEURS_FOCUSABLES =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modale plein ecran.
 *
 * `variant="compact"` la dimensionne au contenu plutot qu'a l'ecran : utilise
 * pour le formulaire de contact, ou 90vh de vide autour d'un formulaire n'aurait
 * aucun sens.
 */
const FullPageModal = ({ show, onClose, title, children, moduleType, variant = '' }) => {
    const boite = useRef(null);
    const declencheur = useRef(null);

    // `onClose` garde dans une reference plutot qu'en dependance de l'effet.
    //
    // La plupart des appelants passent une fonction definie dans leur corps de
    // rendu (`onClose={fermer}`) : son identite change a CHAQUE rendu. En la
    // listant dans les dependances, l'effet se rejouait a chaque frappe dans le
    // formulaire de contact — et sa premiere instruction etant de donner le
    // focus au premier element focusable, celui-ci partait sur le bouton
    // « Fermer » a chaque lettre. Il fallait recliquer dans le champ pour taper
    // la suivante.
    //
    // Corriger ici plutot que chez les six appelants : la modale reste juste
    // quelle que soit la facon dont on lui passe son callback.
    const fermeture = useRef(onClose);
    useEffect(() => {
        fermeture.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!show) return undefined;

        // Memorise l'element qui avait le focus pour le lui rendre a la
        // fermeture : sans cela le focus repart en haut de page.
        declencheur.current = document.activeElement;

        const scrollInitial = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const premierFocusable = boite.current?.querySelector(SELECTEURS_FOCUSABLES);
        (premierFocusable || boite.current)?.focus();

        const auClavier = (e) => {
            if (e.key === 'Escape') {
                fermeture.current();
                return;
            }
            if (e.key !== 'Tab') return;

            // Piege a focus : sans lui, la tabulation sort de la modale et
            // parcourt la page situee derriere, invisible pour l'utilisateur.
            const cibles = boite.current?.querySelectorAll(SELECTEURS_FOCUSABLES);
            if (!cibles || cibles.length === 0) return;
            const premier = cibles[0];
            const dernier = cibles[cibles.length - 1];

            if (e.shiftKey && document.activeElement === premier) {
                e.preventDefault();
                dernier.focus();
            } else if (!e.shiftKey && document.activeElement === dernier) {
                e.preventDefault();
                premier.focus();
            }
        };

        document.addEventListener('keydown', auClavier);
        return () => {
            document.removeEventListener('keydown', auClavier);
            document.body.style.overflow = scrollInitial;
            if (declencheur.current instanceof HTMLElement) {
                declencheur.current.focus();
            }
        };
        // `show` seul : l'effet ne doit se rejouer qu'a l'ouverture et a la
        // fermeture, jamais entre deux frappes au clavier.
    }, [show]);

    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Rendue dans `document.body` et non a sa place dans l'arbre.
    //
    // `position: fixed` se cale sur la fenetre SAUF si un ancetre porte une
    // transformation, un filtre ou un `backdrop-filter` : cet ancetre devient
    // alors le bloc conteneur. Or `@include panel-surface` pose un
    // `backdrop-filter` sur `.knowledgesContent` & consorts. La modale « plein
    // ecran » etait donc bornee au PANNEAU : mesuree sur un ecran de 1000px,
    // elle faisait 517px de large a partir de x=364, et le voile sombre ne
    // couvrait que la moitie droite de la page. C'est ce qui etranglait la
    // stack technique a ~437px de largeur utile, deux colonnes comprises.
    //
    // _settings.scss desactive deja `backdrop-filter` sous $mobileBreakpoint
    // pour cette raison precise ; le portail regle le cas desktop sans avoir a
    // sacrifier le verre depoli.
    return createPortal(
        <div className="fullpage-modal-overlay" onClick={handleOverlayClick}>
            <div
                className={`fullpage-modal-container ${variant ? `fullpage-modal-container--${variant}` : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                tabIndex={-1}
                ref={boite}
            >
                <div className="fullpage-modal-header">
                    <div className="header-content">
                        {moduleType && <span className="module-type">{moduleType}</span>}
                        <h1>{title}</h1>
                    </div>
                    <button onClick={onClose} className="close-button" aria-label="Fermer">
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="fullpage-modal-content">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default FullPageModal;
