import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Visionneuse plein ecran.
 *
 * Extraite du carrousel pour servir aussi la capture posee a cote des
 * technologies, dans la fiche projet : deux endroits, un seul comportement.
 *
 * `vues` : [{ src, caption }]. Avec une seule vue, fleches et vignettes
 * disparaissent d'elles-memes.
 *
 * Rendue dans `document.body` par un portail. La modale projet porte un
 * `backdrop-filter`, ce qui fait d'elle le bloc conteneur des elements
 * `position: fixed` : rendue sur place, la visionneuse se limiterait a la
 * modale au lieu de couvrir l'ecran (piege documente dans CLAUDE.md).
 */

// Nombre de visionneuses actuellement montees.
//
// Sert au carrousel a savoir qu'il doit laisser le clavier a la visionneuse.
// Les deux ecoutent `document` en phase de capture : `stopPropagation` n'y
// suffit pas — elle n'arrete pas les autres ecouteurs du MEME noeud — et
// `stopImmediatePropagation` non plus, l'ecouteur du carrousel etant enregistre
// en premier, il s'execute avant. D'ou ce drapeau, que le carrousel consulte.
let visionneusesOuvertes = 0;
export const visionneuseOuverte = () => visionneusesOuvertes > 0;

const Fleches = ({ aller }) => (
    <>
        <button
            type="button"
            className="carrousel-fleche precedent"
            onClick={(e) => { e.stopPropagation(); aller(-1); }}
            aria-label="Aperçu précédent"
        >
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
            type="button"
            className="carrousel-fleche suivant"
            onClick={(e) => { e.stopPropagation(); aller(1); }}
            aria-label="Aperçu suivant"
        >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
    </>
);

const VisionneusePleinEcran = ({ vues, index, onChangerIndex, onFermer, titre }) => {
    const toucheDepart = useRef(null);
    const total = vues.length;
    const vue = vues[index];

    // Effet a dependances vides : le comptage suit strictement le montage et le
    // demontage, pas les changements de vue.
    useEffect(() => {
        visionneusesOuvertes += 1;
        return () => { visionneusesOuvertes -= 1; };
    }, []);

    const aller = (n) => onChangerIndex((index + n + total) % total);

    useEffect(() => {
        const auClavier = (e) => {
            if (e.key === 'ArrowRight') { e.preventDefault(); aller(1); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); aller(-1); }
            // Capture + arret de propagation : la modale projet ecoute aussi
            // Echap pour se fermer. Sans cela, un seul appui fermerait la
            // visionneuse ET la fiche derriere elle.
            else if (e.key === 'Escape') { e.stopPropagation(); onFermer(); }
        };
        document.addEventListener('keydown', auClavier, true);
        return () => document.removeEventListener('keydown', auClavier, true);
    });

    // Balayage tactile. Seuil de 50px : en deca, c'est un appui, pas un geste.
    const debutTouche = (e) => { toucheDepart.current = e.touches[0].clientX; };
    const finTouche = (e) => {
        if (toucheDepart.current === null) return;
        const delta = e.changedTouches[0].clientX - toucheDepart.current;
        if (Math.abs(delta) > 50) aller(delta < 0 ? 1 : -1);
        toucheDepart.current = null;
    };

    return createPortal((
        <div
            className="carrousel-plein-ecran"
            // Le clic sur le fond ferme ; les controles arretent la propagation.
            onClick={onFermer}
            onTouchStart={debutTouche}
            onTouchEnd={finTouche}
            role="dialog"
            aria-modal="true"
            aria-label={`${titre || 'Aperçus'} — affichage plein écran`}
        >
            <button
                type="button"
                className="pe-fermer"
                onClick={(e) => { e.stopPropagation(); onFermer(); }}
                aria-label="Quitter le plein écran"
            >
                <i className="fas fa-times" aria-hidden="true"></i>
            </button>

            <div className="pe-scene" onClick={(e) => e.stopPropagation()}>
                <img src={vue.src} alt={vue.caption} />
            </div>

            {total > 1 && <Fleches aller={aller} />}

            <div className="pe-pied" onClick={(e) => e.stopPropagation()}>
                <p className="pe-legende" role="status" aria-live="polite">
                    {total > 1 && <span className="pe-compteur">{index + 1} / {total}</span>}
                    {vue.caption}
                </p>
                {total > 1 && (
                    <div className="pe-vignettes">
                        {vues.map((v, i) => (
                            <button
                                type="button"
                                key={v.src}
                                className={i === index ? 'active' : ''}
                                onClick={(e) => { e.stopPropagation(); onChangerIndex(i); }}
                                aria-label={`Aperçu ${i + 1} : ${v.caption}`}
                                aria-current={i === index}
                            >
                                <img src={v.src} alt="" loading="lazy" />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    ), document.body);
};

export default VisionneusePleinEcran;
