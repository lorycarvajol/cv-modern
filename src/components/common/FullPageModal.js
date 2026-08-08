import React, { useEffect, useRef } from 'react';

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
                onClose();
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
    }, [show, onClose]);

    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
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
        </div>
    );
};

export default FullPageModal;
