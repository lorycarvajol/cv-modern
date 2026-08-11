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
  }
]