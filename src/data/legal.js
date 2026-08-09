// ---------------------------------------------------------------------------
// INFORMATIONS LEGALES — CHAMPS A COMPLETER
//
// Les valeurs marquees `null` sont celles que je ne peux pas inventer : elles
// dependent de ton statut d'entrepreneur. Tant qu'elles valent `null`, la page
// affiche un encadre « à compléter » bien visible, impossible a manquer en
// relisant le site avant mise en ligne.
//
// Ce qu'il faudra renseigner :
//   - statut   : « Entrepreneur individuel », « Micro-entrepreneur », « SASU »…
//   - adresse  : adresse de l'etablissement. Sans local professionnel, c'est le
//                domicile qui doit figurer — une societe de domiciliation evite
//                de le rendre public.
//   - siret    : 14 chiffres.
//   - rcsOuRm  : ville et numero d'immatriculation au RCS (commerce) ou au RM
//                (artisanat), si tu y es inscrit. Sinon, laisser `null`.
//   - tva      : numero intracommunautaire, ou la mention de franchise deja
//                pre-remplie plus bas si tu n'es pas assujetti.
// ---------------------------------------------------------------------------

export const EDITEUR = {
    nom: 'Lory Carvajol',
    statut: null,
    adresse: null,
    siret: null,
    rcsOuRm: null,
    // En franchise de TVA, remplacer par :
    // "TVA non applicable, article 293 B du CGI"
    tva: null,
};

// L'hebergeur est impose par la LCEN : nom, adresse et telephone. Ce sont les
// coordonnees publiques d'OVH, ou tourne le VPS.
export const HEBERGEUR = {
    nom: 'OVH SAS',
    adresse: '2 rue Kellermann, 59100 Roubaix, France',
    telephone: '+33 9 72 10 10 07',
    site: 'https://www.ovhcloud.com',
};

// Sous-traitants qui voient passer des donnees personnelles. Verifie dans le
// code : Resend recoit les messages du formulaire, Anthropic ceux du chatbot.
export const SOUS_TRAITANTS = [
    {
        nom: 'Resend',
        role: "Acheminement des e-mails du formulaire de contact",
        donnees: 'Nom, adresse e-mail, sujet et contenu du message',
        zone: 'Union européenne (région eu-west-1)',
        horsUE: false,
    },
    {
        nom: 'Anthropic',
        role: "Génération des réponses de l'assistant conversationnel",
        donnees: 'Contenu des messages envoyés à l’assistant',
        zone: 'États-Unis',
        horsUE: true,
    },
];

export const DERNIERE_MAJ = 'août 2026';
