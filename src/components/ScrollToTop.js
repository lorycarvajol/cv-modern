import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remet la page en haut a chaque changement de route.
 *
 * Sans cela, la navigation mobile depose l'utilisateur au milieu de la page
 * d'arrivee : en dessous de $mobileBreakpoint c'est le DOCUMENT qui defile
 * (voir App.scss), et react-router ne touche pas au defilement. Mesure faite
 * depuis le bas du Portfolio, un appui sur l'onglet Contact arrivait a 225px
 * du haut — le titre et le bandeau de la page etaient deja passes.
 *
 * Sur desktop l'appel ne coute rien : `html, body` y sont en `overflow: hidden`
 * et le defilement se fait dans `.homeContent` & consorts, remontes a chaque
 * route donc deja en haut.
 *
 * `useLayoutEffect` et non `useEffect` : le repositionnement est applique avant
 * la peinture, sans image intermediaire a l'ancienne position.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
