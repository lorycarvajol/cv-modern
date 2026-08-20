// `themes` pilote les filtres du portfolio (voir ProjectList.js).
// Valeurs possibles : 'Cursus' | 'Formateur' | 'Vitrine' | 'Labo'
// `themes` est un tableau : un projet peut relever de plusieurs themes a la
// fois (par exemple un site vitrine realise pendant une formation), il
// apparaitra alors sous chacun des filtres concernes.
//
// `languages` reste utilise pour les icones et la liste des technos affichees
// dans la fiche detail du projet.
//
// `shortInfo` (optionnel) est la description courte affichee sur la carte de la
// grille, sous le titre. A ne pas confondre avec `info`, la description longue
// reservee a la fiche detail. Une phrase, sans point final superflu : elle est
// tronquee a deux lignes pour que les cartes d'une meme rangee restent alignees.
// Les projets qui ne la renseignent pas gardent la carte a trois rangees.
export const portfolioData = [
  {
    id: 1,
    name: 'volha-design.fr',
    themes: ['Vitrine'],
    languages: ['React','symfony'],
    languagesIcons: ['fab fa-react','fab fa-symfony'],
    source: 'https://github.com/maclory73/olgadesignsite',
    info: 'Site e-commerce de produit fait main en France, avec une architecture Symfony/React en cours de développement sur mon temp libre',
    picture: './media/project1.png'
  },
  {
    id: 3,
    name: 'BlogPromo',
    themes: ['Cursus'],
    languages: ['javascript','php'],
    languagesIcons: ['fab fa-js','fab fa-php'],
    source: 'https://github.com/maclory73/blogpromo',
    info: 'Développement du blog de la promo avec création de thème Wordpress',
    picture: './media/imgblog1.1.png'
  },
  {
    id: 4,
    name: 'ApiSki',
    themes: ['Cursus'],
    languages: ['Vue.js','php'],
    languagesIcons: ['fab fa-vuejs','fab fa-php'],
    source: 'https://github.com/pierre01470/ski',
    info: ' Développement d\'une Api type dashboard de compétition de ski pour organisateur. Vue en temp réel des liste de compétiteurs selon la catégorie ainsi que le lieu de la course. Exporté en Excel pour inscrire les temps puis renvoyé sur l\'application avec la moyenne des deux courses. Pour finalement afficher les classements de manière très dynamique grace à Vue.js.     ',
    picture: './media/apiski2.png'
  },
  {
    id: 5,
    name: 'Kikinenveu ?',
    themes: ['Cursus'],
    languages: ['javascript','php'],
    languagesIcons: ['fab fa-js','fab fa-php'],
    source: 'https://github.com/Thomasv07/petites_annonces',
    info: 'Création d\'un site de petite annonce du type "leboncoin". Projet phare de l\'apprentissage du MVC avec une gestion des requêtes Ajax et la particularité d\'être intégré avec twigg.',
    picture: './media/kikinenveu1.png'
  },
  {
    id: 6,
    name: 'Gîtes de Savoie',
    themes: ['Cursus'],
    languages: ['javascript','php'],
    languagesIcons: ['fab fa-js','fab fa-php'],
    source: 'https://github.com/Nabile01/Projet-G-tes',
    info: 'Premier projet de groupe dans le cadre de ma formation. Développement d\'un site de réservation de gîtes, première introduction à la programmation orienté objet POO. Avec gestion des disponibilité et réservation.',
    picture: './media/project6.png'
  },
  {
    id: 8,
    name: 'Book to scrap',
    themes: ['Cursus'],
    languages: ['Python'],
    languagesIcons: ['fab fa-python'],
    source: 'https://github.com/lorycarvajol/Carvajol_Lory_1_analyse_de_march-___10_2022',
    info: 'Projet de formation Python,ce projet est un scraper Python qui extrait les informations des livres du site "Books to Scrape" et les enregistre en fichiers CSV par catégorie.',
    picture: './media/Book to scrap.png'
  },
  {
    id: 9,
    name: 'Chess tournament',
    themes: ['Cursus'],
    languages: ['Python'],
    languagesIcons: ['fab fa-python'],
    source: 'https://github.com/lorycarvajol/chess-tornament.git',
    info: 'Projet de formation Python, logiciel pour organiser et gérer des tournois d\'échecs. Cette application vous aide à gérer les joueurs, organiser des tournois, mener des rondes en système suisse et générer des rapports complets.',
    picture: './media/Chess.png'
  },
  {
    id: 10,
    name: 'Python Test',
    themes: ['Cursus'],
    languages: ['Python'],
    languagesIcons: ['fab fa-python'],
    source: 'https://github.com/lorycarvajol/Testez-votre-ma-trise-du-langage-Python.git',
    info: 'Projet de formation Python, petite série de 12 épreuves qui permet de s\'exercer sur les notions que j\'ais vues lors des projets précédents.',
    picture: './media/exam.png'
  },
  {
    id: 11,
    name: 'Just StreamIt',
    themes: ['Cursus'],
    languages: ['javascript','Python'],
    languagesIcons: ['fab fa-js','fab fa-python'],
    source: 'https://github.com/lorycarvajol/OCMovies-API-EN-FR.git',
    info: 'Projet de formation Python, réalisation d\'une interface relativement similaire à ce qu\'il existe sur le marché en récupérant es données depuis une API, le tout sans framework en javascript et css',
    picture: './media/Just Stream It.png'
  },
  {
    id: 12,
    name: 'AlgoInvest',
    themes: ['Cursus'],
    languages: ['Python'],
    languagesIcons: ['fab fa-python'],
    source: 'https://github.com/lorycarvajol/Snd-try-financial-opt.git',
    info: "Projet de formation Python. Ce projet vise à identifier la meilleure combinaison d'actions à acheter pour maximiser le profit avec un budget limité, en utilisant deux algorithmes : Force Brute : Explore toutes les combinaisons possibles. Sac à Dos (Knapsack) : Utilise la programmation dynamique pour une solution optimale plus efficace.",
    picture: './media/algo.png'
  },
  {
    id: 13,
    name: 'LitRevu',
    themes: ['Cursus'],
    languages: ['javascript','Python'],
    languagesIcons: ['fab fa-js','fab fa-python'],
    source: 'https://github.com/lorycarvajol/litreview.git',
    info: "Projet de formation Python. L'application vise à fournir des critiques sur des livres et articles, ainsi qu'à recommander des lectures basées sur les avis des utilisateurs. Le projet prévoit l'utilisation de Django pour créer un MVP, avec des wireframes fournis par l'UX designer et un schéma de base de données déjà disponible pour guider le développement.",
    picture: './media/litrevu.png'
  },
  {
    id: 14,
    name: 'QCM Platform',
    // Casse exacte : le filtre compare la chaine telle quelle
    // (`themes.includes('Formateur')`). En minuscules, le projet n'apparaissait
    // sous aucun filtre.
    themes: ['Formateur'],
    languages: ['React', 'FastAPI', 'Python'],
    languagesIcons: ['fab fa-react', 'fas fa-bolt', 'fab fa-python'],
    source: 'https://github.com/lorycarvajol/QCM-python-react',
    website: 'https://qcm.lorycarvajol.dev',
    shortInfo: 'Questionnaires générés par IA, suivi de classe et export des résultats',
    info: "Plateforme de QCM full-stack avec création et génération de questionnaires par IA (Claude) ou manuellement et importation de fichier Excel , gestion de classes et de rôles (formateur, élève, compte solo), assignation de notes issus d'autre exercices, tableaux de bord avec graphiques, import Excel et export PDF des résultats. Authentification JWT, verrouillage de compte après échecs répétés, et conformité RGPD.",
    techSpecs: {
      frontend: ['React 18', 'Vite', 'Tailwind CSS'],
      backend: ['FastAPI', 'TinyDB', 'Anthropic Claude API'],
      hosting: ['Docker Compose', 'Traefik', 'OVH VPS']
    },
    screenshots: [
      { src: './media/qcm/01-login.png', caption: 'Connexion avec sélection du rôle (formateur / élève solo)' },
      { src: './media/qcm/02-dashboard-formateur.png', caption: 'Tableau de bord formateur : suivi des classes et de la progression' },
      { src: './media/qcm/03-creation-qcm.png', caption: 'Possibilité de créer des QCM par plusieurs méthodes' },
      { src: './media/qcm/04-generation-ia.png', caption: 'Génération d\'un QCM par IA à partir d\'un simple sujet' },
      { src: './media/qcm/05-passage-qcm.png', caption: 'Interface de passage d\'un QCM, côté élève' },
      { src: './media/qcm/06-rapports.png', caption: 'Rapports de résultats avec graphiques par classe' },
      { src: './media/qcm/07-import-excel.png', caption: 'Import d\'un QCM depuis un fichier Excel, avec validation' }
    ],
    picture: './media/qcm/02-dashboard-formateur.png',
    // Cadrage de la vignette de carte. Sans cela, le rognage se fait au centre
    // et coupe l'en-tete du tableau de bord. Champ optionnel : les autres
    // projets gardent le centrage par defaut.
    cadrage: 'top center'
  },
  {
    id: 15,
    name: 'CodeAcademy',
    themes: ['Formateur'],
    languages: ['React', 'Django', 'PostgreSQL', 'Docker'],
    languagesIcons: ['fab fa-react', 'fab fa-python', 'fas fa-database', 'fab fa-docker'],
    source: 'https://github.com/lorycarvajol/appli-learning-1',
    website: 'https://codelearning.lorycarvajol.dev',
    shortInfo: 'Parcours web en 4 chapitres, exercices corrigés dans un bac à sable Docker',
    info: "Plateforme d'apprentissage du développement web : 4 chapitres et 68 leçons (HTML, CSS, JavaScript, puis mise en ligne d'un site vitrine), avec exercices de code corrigés automatiquement dans un bac à sable Docker isolé, sans accès réseau. Chaque exercice annonce ses critères de validation et propose des indices. Progression détaillée leçon par leçon, quiz, 30 trophées dont 10 secrets et séries de régularité. Espace formateur pour suivre une classe et ouvrir les chapitres, back-office Django pour le contenu et le journal d'audit. Anonymisation RGPD plutôt que suppression, pour ne pas fausser les statistiques de classe.",
    techSpecs: {
      frontend: ['React 18', 'Vite', 'Redux Toolkit', 'React Router 7', 'Monaco Editor'],
      backend: ['Django 5.2', 'Django REST Framework', 'SimpleJWT', 'Celery'],
      database: ['PostgreSQL 15', 'Redis 7'],
      hosting: ['Docker Compose', 'Traefik', "Let's Encrypt", 'OVH VPS']
    },
    screenshots: [
      { src: './media/codelearning/tableau-de-bord.png', caption: 'Tableau de bord : reprendre la leçon en cours, points, trophées et progression globale' },
      { src: './media/codelearning/chapitres.png', caption: 'Les 4 chapitres du parcours, du HTML à la mise en ligne d\'un site vitrine' },
      { src: './media/codelearning/lessons.png', caption: 'Une leçon : théorie, exemples de code commentés et analogies du quotidien' },
      { src: './media/codelearning/exercices.png', caption: 'Exercice corrigé automatiquement : critères de validation, indices et éditeur de code' },
      { src: './media/codelearning/progression.png', caption: 'Ma progression : avancement chapitre par chapitre, temps investi et score moyen' },
      { src: './media/codelearning/trophy.png', caption: 'Trophées et objectifs, dont dix secrets révélés par une énigme' },
      { src: './media/codelearning/gestion-classes.png', caption: 'Espace formateur : suivi des apprenants et ouverture des chapitres' },
      { src: './media/codelearning/tableau-de-bord-admin.png', caption: 'Back-office Django : contenu, classes, gamification et jetons révoqués' }
    ],
    picture: './media/codelearning/tableau-de-bord.png',
    // Meme raison que pour QCM : le rognage centre couperait l'en-tete du
    // tableau de bord (barre de navigation et message d'accueil).
    cadrage: 'top center'
  },
  {
    id: 16,
    name: 'DGFiP Concours C 2026',
    themes: ['Labo'],
    languages: ['HTML5', 'CSS3', 'JavaScript'],
    languagesIcons: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    source: 'https://github.com/lorycarvajol/dgfip-entrainement',
    website: 'https://dgfip-personnal-trainning.netlify.app',
    shortInfo: 'Site de révision pour le concours DGFiP/DGDDI, sans framework',
    info: "Site de révision pour le concours commun C externe DGFiP/DGDDI 2026 : 17 fiches de cours réparties en 4 matières (orthographe, culture générale, calcul, raisonnement), annales QCM 2023-2025 corrigées, flashcards et exercices d'entraînement avec tirage aléatoire équilibré par sous-thème (20 questions / 30 minutes par tentative, jamais la même liste deux fois). 589 questions au total, chacune corrigée et commentée, avec export du résultat en CSV ou PDF. Aucun framework ni étape de build : HTML/CSS/JS vanille, en-têtes de sécurité (CSP, HSTS) configurés côté Netlify.",
    techSpecs: {
      frontend: ['HTML', 'CSS', 'JavaScript vanille — sans framework ni build'],
      hosting: ['Netlify', 'CSP et HSTS via netlify.toml']
    },
    screenshots: [
      { src: './media/dgfip/tableau-de-bord.png', caption: 'Accueil : 17 fiches de cours, 8 exercices et 589 questions réparties en 4 matières' },
      { src: './media/dgfip/lesson-choice.png', caption: 'Les fiches de cours, regroupées par matière et par sous-thème' },
      { src: './media/dgfip/lesson.png', caption: 'Une fiche : règle fondamentale, arbre de décision, exemples et erreurs fréquentes' },
      { src: './media/dgfip/annale.png', caption: 'Annale officielle 2025 : 54 questions en 1h30, note éliminatoire à 5/20' },
      { src: './media/dgfip/qcm-start.png', caption: 'Entraînement par matière : 20 questions tirées au hasard, 30 minutes' },
      { src: './media/dgfip/qcm.png', caption: 'Passage du QCM : minuteur, progression et réponse au clavier (touches 1 à 4)' },
      { src: './media/dgfip/qcm-result.png', caption: 'Résultats : score, correction commentée question par question, export CSV et PDF' },
      { src: './media/dgfip/flashcard.png', caption: 'Flashcards : 64 termes et notions clés tirés des annales 2023-2025' }
    ],
    picture: './media/dgfip/tableau-de-bord.png',
    // Meme raison que pour les deux projets precedents : le rognage centre
    // couperait l'en-tete et l'accroche de la page d'accueil.
    cadrage: 'top center'
  },
  {
    id: 17,
    name: 'Évolution Climatique',
    themes: ['Labo'],
    languages: ['React', 'FastAPI', 'Python'],
    languagesIcons: ['fab fa-react', 'fas fa-bolt', 'fab fa-python'],
    source: 'https://github.com/lorycarvajol/weather-evolution-app',
    website: 'https://weather-evolution-app.vercel.app',
    shortInfo: "75 ans d'évolution des températures d'été, ville par ville",
    info: "Application de visualisation de l'évolution de la température moyenne estivale (mai-septembre) sur les 75 dernières années, pour une ou plusieurs villes françaises, à partir des données ouvertes Météo-France. Architecture en pipeline : un ETL Python récupère et agrège les données une fois (mise à jour périodique), calcule une tendance par régression linéaire (°C/an) par ville, et alimente une base ; le backend ne fait que la lire, sans recalcul à la requête. Sélecteur de villes en autocomplétion, comparaison multi-villes sur un même graphique et badge de tendance par décennie pour chacune. Deux lectures : la tendance annuelle, doublée du nombre de jours au-dessus de 35 °C quand une seule ville est retenue, et une courbe saisonnière animée qui déroule les années mois par mois, avec en repère la plus ancienne année disponible pour la ville et les précipitations en arrière-plan.",
    techSpecs: {
      frontend: ['React 18', 'Vite', 'Recharts', 'Axios'],
      backend: ['FastAPI', 'SQLAlchemy', 'SQLite / PostgreSQL'],
      hosting: ['Vercel (interface)', 'Render (API)']
    },
    screenshots: [
      { src: './media/weather-app/dashboard.png', caption: 'Accueil : deux lectures possibles, tendance annuelle ou courbe saisonnière' },
      { src: './media/weather-app/tendance-annuelle.png', caption: 'Une seule ville : la courbe des étés et, en barres, les jours au-delà de 35 °C' },
      { src: './media/weather-app/comparatif-villes.png', caption: 'Comparaison de trois villes, chacune avec sa tendance en °C par décennie' },
      { src: './media/weather-app/courbe-saisonniere.png', caption: 'Courbe saisonnière animée : l\'année choisie face à la plus ancienne, précipitations en fond' }
    ],
    picture: './media/weather-app/dashboard.png',
    // Meme raison que pour les projets precedents : le rognage centre couperait
    // l'en-tete et l'accroche de la page d'accueil.
    cadrage: 'top center'
  },
  {
    id: 18,
    name: 'Voyage à Milan',
    // 'Labo' et non 'Vitrine' : ce n'est pas un site client, c'est un banc
    // d'essai personnel — d'ou sa place a cote des autres experimentations.
    themes: ['Labo'],
    languages: ['HTML5', 'CSS3', 'JavaScript'],
    languagesIcons: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    source: 'https://github.com/lorycarvajol/voyage---Milan',
    shortInfo: "Carnet de route interactif d'un week-end dans les Alpes jusqu'à Milan",
    info: "Carnet de route d'un week-end d'août : traversée des Alpes par le col du Petit-Saint-Bernard puis trois jours à Milan (320 km, 17 étapes, 2 pays). Site éditorial en HTML/CSS/JS vanille, sans framework ni dépendance : profil altimétrique en SVG animé au chargement, carte Leaflet avec tracés colorés par territoire traversé, et trois dispositifs de repérage synchronisés (fil segmenté desktop, fil au clic mobile, rail vertical des 17 étapes) pilotés par un seul ordonnanceur de scroll partagé. Système de couleur et de typographie pensé comme un récit : glacier pour le versant français, laiton pour la vallée d'Aoste, rouge Campari pour Milan. Accessibilité soignée (prefers-reduced-motion, aria-current, lien d'évitement). Le projet est né en août 2025 d'une demande de mon épouse pour préparer un week-end pour le marriage d'une amie : la première version a été produite en deux ou trois échanges avec Claude, et c'est la refonte menée un an plus tard qui a tout repris — direction artistique, mise en page, animations. Les deux dernières captures montrent cet état d'origine.",
    techSpecs: {
      frontend: ['HTML/CSS/JS vanille, sans framework', 'Leaflet 1.9.4 (carte)', 'SVG animé (profil altimétrique)'],
      hosting: ['Netlify', 'build.js (assemblage statique, sans dépendance npm)']
    },
    // Les cinq premieres vues montrent la refonte, les deux dernieres la
    // version de 2025 : l'ordre fait lire la galerie comme un avant/apres, et
    // les legendes datent explicitement les captures d'origine pour qu'on ne
    // les prenne pas pour l'etat actuel du site.
    screenshots: [
      { src: './media/voyage-milan/new-hero.png', caption: "Ouverture : le profil altimétrique du trajet, dessiné en SVG et animé au chargement" },
      { src: './media/voyage-milan/new-itineraire.png', caption: 'Le tracé sur carte Leaflet : traversée alpine en pointillés, descente sur Milan en rouge' },
      { src: './media/voyage-milan/new-journey.png', caption: "Jour 01, la traversée alpine : chaque étape avec sa distance, sa durée et ce qu'il y a à voir" },
      { src: './media/voyage-milan/new-journey-2.png', caption: 'Jour 02 à Milan : le fil de progression du haut se colore section par section' },
      { src: './media/voyage-milan/new-tricks.png', caption: 'Le guide : budget, réservations, adresses et usages locaux en trois colonnes' },
      { src: './media/voyage-milan/old-design-hero.png', caption: 'Première version, août 2025 : sortie de deux ou trois échanges avec Claude' },
      { src: './media/voyage-milan/old-design-content.png', caption: 'La même page en 2025 — cartes empilées et tuiles claires, avant la refonte éditoriale' }
    ],
    picture: './media/voyage-milan/new-hero.png',
    // Meme raison que pour les projets precedents : le rognage centre couperait
    // le titre et la barre de navigation.
    cadrage: 'top center'
  },
  {
  id: 19,
  name: 'Tapistyle',
  // 'Vitrine' : projet client réel (boutique en ligne pour Olga), pas une
  // expérimentation personnelle — à la différence des labos comme Shuzan.
  themes: ['Vitrine'],
  languages: ['PHP', 'Symfony', 'MySQL', 'Stimulus'],
  languagesIcons: ['fab fa-php', 'fas fa-database', 'fab fa-js'],
  source: 'https://github.com/lorycarvajol/olga-com-site',
  shortInfo: "Boutique en ligne Symfony pour une créatrice de tapis et objets d'art (Vilna Design)",
  info: "Site e-commerce sur mesure pour Vilna Design, une créatrice de tapis et d'œuvres artisanales. Backend Symfony 7.2 / PHP 8.3 avec Doctrine ORM et MySQL, panneau d'administration EasyAdmin pour la gestion du catalogue et des commandes, authentification classique et connexion sociale (Google, Facebook), upload d'images produits via VichUploader. Le frontend s'appuie sur Symfony UX (Turbo/Stimulus) plutôt qu'un framework JS séparé, avec l'asset-mapper natif de Symfony pour le build de production — pas de bundler externe. Déployé en Docker (image PHP-FPM + nginx en trois étapes, worker Messenger dédié pour l'envoi asynchrone des e-mails), derrière Traefik avec certificat HTTPS automatique et une politique de sécurité (CSP à nonce, HSTS) strictement configurée. Le tunnel de commande est fonctionnel mais le paiement n'est pas encore intégré : le site tourne en phase de test, sans traitement de vraies transactions.",
  techSpecs: {
    frontend: ['Symfony UX (Turbo/Stimulus)', 'Symfony Asset Mapper', 'Bootstrap'],
    backend: ['Symfony 7.2', 'PHP 8.3', 'Doctrine ORM', 'EasyAdmin', 'OAuth2 (Google, Facebook)'],
    hosting: ['Docker (PHP-FPM + nginx, build multi-étapes)', 'Traefik + Let\'s Encrypt', 'VPS OVH', 'MySQL 8.0 mutualisée']
  },
  screenshots: [
    { src: './media/tapistyle/hero.png', caption: "Page d'accueil de Vilna Design, présentation du catalogue" },
    { src: './media/tapistyle/produit.png', caption: 'Fiche produit avec galerie d\'images et variantes' },
    { src: './media/tapistyle/admin.png', caption: "Panneau d'administration EasyAdmin — gestion du catalogue" },
    { src: './media/tapistyle/login.png', caption: 'Connexion classique et sociale (Google / Facebook)' }
  ],
  picture: './media/tapistyle/hero.png',
  cadrage: 'top center'
},
 
{
  id: 20,
  name: 'Apprentissage JavaScript',
  themes: ['Formation'],
  languages: ['PHP', 'MySQL', 'React', 'JavaScript'],
  languagesIcons: ['fab fa-php', 'fas fa-database', 'fab fa-react'],
  source: 'https://github.com/lorycarvajol/apprentissage-JS',
  shortInfo: 'Plateforme e-learning pour apprendre JavaScript, avec exercices corrigés et système de badges',
  info: "Plateforme d'apprentissage interactive dédiée à JavaScript : cours structurés en modules et chapitres, exercices de code corrigés automatiquement, suivi de progression, et système de gamification à 19+ badges (progression, réussite du premier coup, séries de connexion). Backend PHP 8.2 en MVC artisanal (sans framework), authentification par JWT, base de données MySQL 8.0 mutualisée avec son projet jumeau PHP/POO. Particularité de sécurité : le code soumis par les apprenants s'exécute côté client, dans un Web Worker isolé du thread principal — aucune exécution de code arbitraire ne transite par le serveur, contrairement à son projet jumeau orienté objet. Frontend React/Vite. Déployé en Docker derrière Traefik, avec migrations de schéma idempotentes rejouées automatiquement au démarrage du conteneur.",
  techSpecs: {
    frontend: ['React', 'Vite', 'Web Worker (sandbox client)'],
    backend: ['PHP 8.2 (MVC maison)', 'MySQL 8.0', 'JWT (auth + refresh token)'],
    hosting: ['Docker', 'Traefik + Let\'s Encrypt', 'VPS OVH', 'MySQL mutualisée']
  },
  screenshots: [
    { src: './media/apprentissage-js/accueil.png', caption: "Page d'accueil, aperçu des modules disponibles" },
    { src: './media/apprentissage-js/exercice.png', caption: "Éditeur d'exercice avec correction automatique en direct" },
    { src: './media/apprentissage-js/trophees.png', caption: 'Salle des trophées — badges obtenus et progression' },
    { src: './media/apprentissage-js/progression.png', caption: "Tableau de suivi de progression par module" }
  ],
  picture: './media/apprentissage-js/accueil.png',
  cadrage: 'top center'
},
 
{
  id: 21,
  name: 'Apprentissage PHP / POO',
  themes: ['Formation'],
  languages: ['PHP', 'MySQL', 'React', 'JavaScript'],
  languagesIcons: ['fab fa-php', 'fas fa-database', 'fab fa-react'],
  source: 'https://github.com/lorycarvajol/apprentissage-POO-PHP',
  shortInfo: 'Plateforme e-learning pour apprendre PHP procédural puis orienté objet, avec bac à sable serveur isolé',
  info: "Projet jumeau d'Apprentissage JavaScript, dédié cette fois à PHP : tronc commun procédural (6 modules) puis programmation orientée objet (6 modules supplémentaires), avec MySQL comme fil rouge pédagogique. Authentification robuste (JWT court + refresh token httpOnly rotatif, vérification d'e-mail, limitation de débit, verrouillage de compte après échecs répétés), suivi de progression et système de badges partagé avec le projet jumeau. La différence structurante avec la version JavaScript : le code des apprenants s'exécute ici côté serveur (PHP ne s'exécutant pas dans le navigateur), via un conteneur sandbox dédié et durci — utilisateur non privilégié, aucune capacité système, accès réseau sortant coupé, quotas CPU/mémoire stricts — isolé du reste de l'infrastructure par un mandataire qui ne laisse passer que les opérations Docker strictement nécessaires. Frontend React/Vite, backend PHP 8.2 en MVC artisanal, base MySQL 8.0 mutualisée avec le projet jumeau.",
  techSpecs: {
    frontend: ['React', 'Vite'],
    backend: ['PHP 8.2 (MVC maison)', 'MySQL 8.0', 'JWT (auth + refresh token rotatif)'],
    hosting: ['Docker (conteneur sandbox isolé, docker-socket-proxy)', 'Traefik + Let\'s Encrypt', 'VPS OVH', 'MySQL mutualisée']
  },
  screenshots: [
    { src: './media/apprentissage-poo-php/accueil.png', caption: "Page d'accueil, parcours procédural puis orienté objet" },
    { src: './media/apprentissage-poo-php/exercice.png', caption: 'Exercice de POO avec correction automatique via le bac à sable serveur' },
    { src: './media/apprentissage-poo-php/trophees.png', caption: 'Salle des trophées, partagée avec le projet jumeau JavaScript' },
    { src: './media/apprentissage-poo-php/connexion.png', caption: "Écran de connexion avec vérification d'e-mail" }
  ],
  picture: './media/apprentissage-poo-php/accueil.png',
  cadrage: 'top center'
},
 
{
  id: 22,
  name: 'Shuzan',
  // 'Labo' : expérimentation personnelle sans backend ni compte, dans le même
  // esprit que Voyage à Milan.
  themes: ['Labo'],
  languages: ['React', 'JavaScript'],
  languagesIcons: ['fab fa-react', 'fab fa-js'],
  source: 'https://github.com/lorycarvajol/Shuzan',
  shortInfo: 'École du soroban en ligne : 17 leçons progressives et exercices ciblés sur le boulier japonais',
  info: "Application d'apprentissage du calcul au boulier japonais (soroban) : dix-sept leçons progressives réparties en six modules, et un générateur d'exercices aléatoires ciblés par compétence. Toute l'application repose sur un unique moteur de calcul (src/lib/technique.js) qui détermine, pour chaque opération, laquelle des quatre techniques du soroban s'applique — geste direct, « petit ami », « grand ami », ou technique combinée — et produit la séquence de gestes élémentaires correspondante. Ce même moteur alimente à la fois les exercices (le générateur rejette tout tirage qui ne travaille pas la compétence visée), les corrections pas-à-pas jouées geste par geste sur le boulier, et le contenu des leçons elles-mêmes — aucune démonstration ne peut donc raconter un geste différent de celui que produirait réellement le moteur. Une suite de vérification dédiée (npm run check) recalcule 120 000 opérations aléatoires et contrôle les 180 plans de gestes possibles avant chaque publication. Aucun serveur ni compte : la progression est stockée dans le localStorage du navigateur, le routage par hash permettant de servir l'application depuis n'importe quel hébergement statique. Boulier manipulable au clavier, trois apparences (système, jour, nuit), animations respectant prefers-reduced-motion, palette inspirée des indigos traditionnels japonais.",
  techSpecs: {
    frontend: ['React 19', 'Vite 7', 'react-router-dom (hash router)'],
    hosting: ['Hébergement statique (aucun backend)', 'localStorage pour la progression']
  },
  screenshots: [
    { src: './media/shuzan/accueil.png', caption: "Page d'accueil, les six modules de leçons" },
    { src: './media/shuzan/lecon.png', caption: 'Boulier interactif, manipulable à la souris et au clavier' },
    { src: './media/shuzan/walkthrough.png', caption: 'Correction pas-à-pas : les gestes joués un par un sur le boulier' },
    { src: './media/shuzan/exercice.png', caption: "Générateur d'exercices ciblés par compétence" }
  ],
  picture: './media/shuzan/accueil.png',
  cadrage: 'top center'
}
]