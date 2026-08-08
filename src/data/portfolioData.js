// `themes` pilote les filtres du portfolio (voir ProjectList.js).
// Valeurs possibles : 'Cursus' | 'Formateur' | 'Vitrine' | 'Labo'
// `themes` est un tableau : un projet peut relever de plusieurs themes a la
// fois (par exemple un site vitrine realise pendant une formation), il
// apparaitra alors sous chacun des filtres concernes.
//
// `languages` reste utilise pour les icones et la liste des technos affichees
// dans la fiche detail du projet.
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
  }
]
