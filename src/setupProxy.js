const { createProxyMiddleware } = require('http-proxy-middleware');

// Redirige /api vers le service mailer pendant le developpement, pour que le
// formulaire de contact et le chatbot soient testables en local. En production
// c'est Traefik qui fait ce routage (voir docker-compose.yml).
//
// Un `"proxy": "http://localhost:8000"` dans package.json ferait la meme chose
// en une ligne, mais il intercepte TOUTES les requetes non reconnues — y compris
// les `hot-update.json` du rechargement a chaud, qui echouent alors en boucle.
// D'ou ce fichier, qui limite le proxy au seul prefixe /api.
module.exports = function (app) {
    app.use(
        // `pathFilter` et non `app.use('/api', ...)` : monte sur un chemin,
        // Express retire le prefixe avant de passer la main au proxy, qui
        // transmet alors /chat au lieu de /api/chat — le service repond 404.
        // Filtrer plutot que monter preserve le chemin complet.
        createProxyMiddleware({
            pathFilter: '/api',
            target: process.env.API_URL || 'http://localhost:8000',
            changeOrigin: true,
        })
    );
};
