# cv-modern — notes de travail

CV / portfolio React (Create React App), déployé en conteneur nginx derrière
Traefik sur un VPS OVH. Domaine cible : `https://lorycarvajol.dev`.

---

## À FAIRE À LA MISE EN LIGNE

Rien de tout cela n'est fait à ce jour. À reprendre dans cet ordre.

### 1. DNS (bloquant pour tout le reste)

Les enregistrements A de `lorycarvajol.dev` et `www.lorycarvajol.dev` pointent
encore vers l'IP de parking OVH `213.186.33.5`.

- Les **modifier** (ne pas en ajouter, sous peine de double enregistrement A)
  vers `51.75.194.109`.
- Sans cela, Let's Encrypt ne peut pas émettre le certificat.

### 2. Formulaire de contact — Resend

Le domaine `lorycarvajol.dev` est **déjà vérifié** chez Resend
(`sending: enabled`, région `eu-west-1`) : rien à faire de ce côté.

Reste à faire :

- **Révoquer la clé API actuelle et en régénérer une.** L'ancienne a transité en
  clair dans une conversation, elle doit être considérée comme compromise. Une
  clé Resend autorise l'envoi au nom du domaine : elle permettrait d'usurper
  `@lorycarvajol.dev`.
- Créer le fichier `.env` **sur le VPS**, à partir de `.env.example`. Il est
  exclu de git : il ne partira jamais avec un `git push`, il faut le recopier à
  la main.
- Déployer : `docker compose up -d --build` (démarre `cv-frontend` et
  `cv-mailer`).

### 2 bis. Chatbot — clé Anthropic

Le chatbot appelle Claude depuis le service `mailer` (route `POST /api/chat`).
Même règle que Resend : la clé reste sur le serveur.

- Créer une clé sur `https://console.anthropic.com/settings/keys` et la mettre
  dans le `.env` du VPS (`ANTHROPIC_API_KEY`).
- `CHAT_BUDGET_JETONS_JOUR` est un **coupe-circuit quotidien**, pas un réglage
  de confort. Une route LLM publique est une facture ouverte. Défaut : 200 000
  jetons de sortie/jour, soit environ 5 $ sur Claude Opus 5.
- Les faits du CV viennent de `src/data/parcours.json`, monté en lecture seule
  dans le conteneur. **C'est la source unique** : corriger une date là, jamais
  dans un composant.

### 3. Test de bout en bout — JAMAIS EFFECTUÉ

C'est le point de vigilance principal. Ce qui est vérifié à ce jour :

- validation des champs, pot de miel anti-robots, limite de débit (3/h par IP) ;
- le service répond correctement quand Resend refuse (502, sans fuite de détail).

Ce qui ne l'est **pas** :

- l'envoi réel d'un e-mail (clé valide → Resend accepte → réception) ;
- le chemin de succès côté interface (message de confirmation, remise à zéro
  des champs) ;
- **le chemin de succès du chatbot** : réponse réelle de Claude, diffusion au
  fil de l'eau, mise en cache du prompt. Seul le chemin d'erreur a été exercé.

`src/setupProxy.js` route désormais `/api` vers `localhost:8000` en
développement : lancer le service (`uvicorn main:app --port 8000` depuis
`mailer/`, avec les clés en variables d'environnement) rend le formulaire **et**
le chat testables en local, ce qui n'était pas le cas jusqu'ici.

Après déploiement, envoyer un message depuis le formulaire et vérifier la
réception sur `lorycarvajolwebdev@gmail.com`.

### 4. Contenu à valider

`src/pages/Contact.js` — objet `INFOS` en haut de fichier, sous un bandeau
« TEXTES À VALIDER » : disponibilité, zone d'intervention, mobilité. Ce sont des
affirmations publiques, elles n'ont pas été inventées.

---

## Points ouverts, non bloquants

- **Poids des images.** Elles ne sont pas optimisées (`Chess.png` fait 296 Ko).
  À traiter avant d'ajouter des galeries de captures au portfolio.
- **Filtres vides.** `Formateur` et `Labo` n'ont aucun projet ; `Vitrine` n'en a
  qu'un. Ajouter les entrées `qcm` et `codelearning` les remplirait.
- `react-copy-to-clipboard` n'est plus utilisé (remplacé par
  `navigator.clipboard`) — désinstallable.
- Fins de ligne mixtes LF/CRLF dans certains `.scss`. Un `.gitattributes` avec
  `* text=auto` réglerait la question.

---

## Conventions du projet

### Styles

Tout passe par les jetons de `src/styles/_settings.scss` — ne pas réintroduire
de valeurs en dur :

| Jeton | Rôle |
|---|---|
| `$accent` `#0affef` | accent unique (un second bleu `#00afef` traînait, supprimé) |
| `$border-soft/base/strong` | bordures, 0.12 / 0.2 / 0.4 d'opacité |
| `$radius-sm/md/pill` | 12px / 20px / 50px |
| `@include glass($blur, $sat)` | verre dépoli, recette unique |
| `@include panel-surface` | cadre des 4 panneaux de page |
| `@include card-surface` | surface des cartes |

**Points de rupture :**

- `$mobileBreakpoint: 850px` — bascule « coquille d'application » (desktop, page
  figée) vers « document qui défile » (mobile, en-tête + barre d'onglets fixes).
- `$denseGridBreakpoint: 1450px` — grilles denses (Compétences, Contact) :
  repasser en mode desktop à 851px ne signifie pas qu'il y a la place pour
  3 colonnes.

### Pièges rencontrés, à ne pas réintroduire

- **Spécificité.** Plusieurs conteneurs sont ciblés en `(0,2,0)`
  (`.home .homeContent`, `.portfolio .portfolio-container`). Un override
  générique en `(0,1,0)` est ignoré, media query ou non.
- **Le fallback SPA masque les 404.** `try_files … /index.html` renvoie la page
  en **200 avec du HTML** pour tout fichier manquant. Six images en `.pnG` ont
  ainsi été cassées en silence. Nommer les fichiers en minuscules, sans espace.
- **`#root` n'a pas de largeur.** C'est l'élément flex de `body` : sans
  `width: 100%` explicite il se dimensionne sur son contenu et toute la chaîne
  d'enfants en `width: 100%` s'effondre avec lui.
- **Animations par `transform` dans un conteneur défilant.** La boîte
  transformée déborde et crée du défilement fantôme. Préférer l'animation de
  `background-position` (cf. particules de la page Contact).
- **`_mediaQueries.scss`** est importé par `pages/_knowledges.scss`, pas par
  `styles.scss`. Facile à manquer.
- **Le défilement ne se remet pas seul en haut.** Sous `$mobileBreakpoint`
  c'est le document qui défile, et react-router n'y touche pas : un appui sur
  un onglet depuis le bas d'une page arrivait à 225px du haut de la suivante.
  C'est `src/components/ScrollToTop.js`, monté dans le `<Router>`, qui règle
  la question. Ne pas le retirer.
- **`align-content` de la sidebar sur la barre d'onglets.** Le menu de bureau
  groupe ses liens au centre ; hérité par la barre mobile, il dimensionnait la
  rangée sur son contenu (46,5px dans une barre de 64) et laissait 9px inertes
  en haut et en bas — pile où se pose le pouce. D'où le `align-content: stretch`
  du bloc mobile.
- **`backdrop-filter` piège les `position: fixed`.** Un ancêtre qui porte une
  transformation, un filtre ou un `backdrop-filter` devient le bloc conteneur
  des descendants en `fixed`. `@include panel-surface` en pose un : la modale
  « plein écran » était donc bornée au panneau — 517px de large à partir de
  x=364 sur un écran de 1000. `_settings.scss` neutralise déjà l'effet sous
  `$mobileBreakpoint` ; côté desktop c'est `createPortal(…, document.body)`
  dans `FullPageModal` qui règle la question. Ne pas remettre la modale dans
  l'arbre du panneau.
- **Pas de style en ligne pour les grilles.** Un `gridTemplateColumns: '1fr 1fr'`
  écrit dans le JSX de `Languages.js` imposait deux colonnes jusqu'à 320px de
  large. La classe `.colonnes-modale` (`auto-fit` + `minmax(min(260px, 100%),
  1fr)`) s'en passe sans point de rupture. Le `min(…, 100%)` n'est pas
  décoratif : sans lui la piste refuse de descendre sous 260px et déborde sur
  un iPhone SE.
- **`display: flex` sur un `li` qui mélange balises et texte nu.**
  `<i/><strong>Python</strong> - Django, FastAPI` fait trois enfants, donc trois
  colonnes qui se replient chacune de leur côté. Les listes de modale utilisent
  un retrait pendant (`text-indent` négatif + `padding-left`), pas flex.

### Vérification

Le serveur de développement seul ne suffit pas : Windows est insensible à la
casse des noms de fichiers, le conteneur Linux ne l'est pas. Vérifier les
changements sensibles dans le conteneur, et mesurer le rendu (largeurs, débordements)
plutôt que se fier à l'œil.

```bash
npm start                      # dev, port 3000
npm run build                  # build de production
docker compose up -d --build   # pile complète (front + mailer)
```
