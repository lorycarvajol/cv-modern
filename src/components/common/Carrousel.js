import React, { useState, useEffect, useCallback, useRef } from 'react';
import VisionneusePleinEcran, { visionneuseOuverte } from './VisionneusePleinEcran';

/**
 * Carrousel d'apercus, avec passage en plein ecran.
 *
 * `vues` : [{ src, caption }]. Le composant ne suppose rien du contenu — il
 * sert les captures du portfolio, mais n'y est pas lie.
 *
 * Les images sont affichees en `contain` et non `cover` : ce sont des captures
 * d'interface, les rogner reviendrait a cacher ce qu'elles servent a montrer.
 */

// Defini au niveau du module, jamais dans le corps du composant : une fonction
// declaree a l'interieur produirait un type de composant different a chaque
// rendu, et React demonterait puis remonterait ces boutons a chaque changement
// de vue.
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

const Carrousel = ({ vues, titre }) => {
    const [index, setIndex] = useState(0);
    const [plein, setPlein] = useState(false);
    const toucheDepart = useRef(null);

    const total = vues.length;
    // Bouclage dans les deux sens : depuis la premiere vue, « precedent »
    // renvoie a la derniere.
    const aller = useCallback((n) => setIndex((i) => (i + n + total) % total), [total]);

    useEffect(() => {
        const auClavier = (e) => {
            // Des qu'une visionneuse est ouverte — la sienne, ou celle lancee
            // depuis la capture d'en-tete de la fiche —, c'est elle qui gere le
            // clavier. Sans cette garde, les deux ecouteurs repondaient : le
            // carrousel defilait en silence derriere la visionneuse.
            if (plein || visionneuseOuverte()) return;
            if (e.key === 'ArrowRight') { e.preventDefault(); aller(1); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); aller(-1); }
        };
        document.addEventListener('keydown', auClavier, true);
        return () => document.removeEventListener('keydown', auClavier, true);
    }, [aller, plein]);

    // Balayage tactile. Seuil de 50px : en deca, c'est un appui, pas un geste.
    const debutTouche = (e) => { toucheDepart.current = e.touches[0].clientX; };
    const finTouche = (e) => {
        if (toucheDepart.current === null) return;
        const delta = e.changedTouches[0].clientX - toucheDepart.current;
        if (Math.abs(delta) > 50) aller(delta < 0 ? 1 : -1);
        toucheDepart.current = null;
    };

    const vue = vues[index];

    return (
        <div className="carrousel">
            <div className="carrousel-scene" onTouchStart={debutTouche} onTouchEnd={finTouche}>
                <img
                    src={vue.src}
                    alt={vue.caption}
                    onClick={() => setPlein(true)}
                    loading={index === 0 ? 'eager' : 'lazy'}
                />

                {total > 1 && <Fleches aller={aller} />}

                <span className="carrousel-compteur">{index + 1} / {total}</span>

                <button
                    type="button"
                    className="carrousel-loupe"
                    onClick={() => setPlein(true)}
                    aria-label="Afficher en plein écran"
                >
                    <i className="fas fa-expand" aria-hidden="true"></i>
                </button>
            </div>

            {/* aria-live : la legende change sans rechargement, les lecteurs
                d'ecran doivent l'annoncer. */}
            <p className="carrousel-legende" role="status" aria-live="polite">
                {vue.caption}
            </p>

            {total > 1 && (
                <div className="carrousel-vignettes">
                    {vues.map((v, i) => (
                        <button
                            type="button"
                            key={v.src}
                            className={i === index ? 'active' : ''}
                            onClick={() => setIndex(i)}
                            aria-label={`Aperçu ${i + 1} : ${v.caption}`}
                            aria-current={i === index}
                        >
                            <img src={v.src} alt="" loading="lazy" />
                        </button>
                    ))}
                </div>
            )}

            {plein && (
                <VisionneusePleinEcran
                    vues={vues}
                    index={index}
                    onChangerIndex={setIndex}
                    onFermer={() => setPlein(false)}
                    titre={titre}
                />
            )}
        </div>
    );
};

export default Carrousel;
