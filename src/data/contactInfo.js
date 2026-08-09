// Coordonnees partagees entre la page d'accueil et la page Contact.
// L'adresse etait jusqu'ici une constante locale de Contact.js : la sortir ici
// evite de la recopier a chaque nouvel endroit qui en a besoin.
export const EMAIL = 'lorycarvajolwebdev@gmail.com';

// Les liens qui utilisent ce helper ne portent PAS target="_blank".
//
// Sur un `mailto:`, ouvrir un nouvel onglet produit systematiquement un onglet
// vide : le navigateur cree l'onglet, passe la main au client de messagerie —
// qui s'ouvre a cote, hors du navigateur — et l'onglet reste la, noir. Sans
// `target`, le client s'ouvre et le portfolio reste affiche tel quel ; si le
// poste n'a aucun gestionnaire enregistre, il ne se passe rien de visible,
// ce qui vaut mieux qu'une page noire.
export const lienMail = (sujet = 'Contact professionnel') =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(sujet)}`;

// Chemin du CV, en un seul endroit.
//
// Le nom du fichier porte sa date, il change donc a chaque mise a jour. Il etait
// recopie dans Home.js et Contact.js : au renommage suivant, les deux liens ont
// pointe vers un fichier absent. Et la panne est silencieuse — le repli SPA de
// nginx renvoie index.html en 200 pour tout fichier manquant, le navigateur
// telecharge donc une page HTML deguisee en PDF (piege documente dans CLAUDE.md).
//
// Au prochain CV : deposer le fichier dans public/media/ et corriger CETTE ligne.
export const CV_FICHIER = 'cv_09-08-2026.pdf';

export const lienCV = () => `${process.env.PUBLIC_URL}/media/${CV_FICHIER}`;
