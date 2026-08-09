// Coordonnees partagees entre la page d'accueil et la page Contact.
// L'adresse etait jusqu'ici une constante locale de Contact.js : la sortir ici
// evite de la recopier a chaque nouvel endroit qui en a besoin.
export const EMAIL = 'lorycarvajolwebdev@gmail.com';

// Les liens qui utilisent ce helper portent target="_blank" : le gestionnaire
// de courrier s'ouvre dans une autre fenetre, le portfolio reste affiche.
// Si aucun gestionnaire n'est enregistre sur le poste, le navigateur laisse un
// onglet vide — c'est son comportement normal, pas un defaut de la page.
export const lienMail = (sujet = 'Contact professionnel') =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(sujet)}`;
