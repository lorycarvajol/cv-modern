# Handoff Spec — Template de carte projet (Portfolio)

**Repo** : `lorycarvajol/cv-modern`
**Branche** : `design/harmonisation-styles`
**Contexte** : le portfolio (`src/components/portfolio/`) affiche déjà une grille de projets avec filtre par thème, pagination et une modale de détail. Cette spec étend le modèle de données et la modale existants pour supporter : description, spécifications techniques structurées, galerie de captures en carousel avec légendes, lien repo, lien application en ligne — **sans** introduire de nouveaux tokens visuels : tout réutilise le système déjà harmonisé dans `_settings.scss`.

---

## Overview

Aujourd'hui, `portfolioData.js` définit un projet avec : `name`, `themes`, `languages`/`languagesIcons`, `source` (repo), `info` (description), `picture` (une seule image). Le JSX de la modale (`ProjectList.js` ligne 217) référence déjà `selectedProject.website`, mais **aucune entrée de données ne remplit ce champ** — c'est un gap silencieux à combler en priorité pour connecter tes apps en ligne (qcm, codelearning, etc.).

Objectif : chaque nouveau projet mis en ligne devient une simple entrée de données respectant un schéma fixe, sans toucher au JSX.

---

## Modèle de données — schéma cible

Remplacer/étendre chaque entrée de `portfolioData.js` :

```js
{
  id: 14,
  name: 'QCM Platform',
  themes: ['Labo'],                    // inchangé
  shortInfo: 'Plateforme de quiz avec import Excel et suivi de score.',
  info: 'Description longue existante, conservée telle quelle.',

  // Specs techniques structurées — remplace la simple liste `languages`
  techSpecs: {
    frontend: ['React', 'Vite'],
    backend: ['FastAPI'],
    database: ['TinyDB'],
    hosting: ['Docker Compose', 'Traefik', 'OVH VPS']
  },
  languages: ['React', 'FastAPI'],      // conservé pour compat icônes existantes
  languagesIcons: ['fab fa-react', 'fas fa-bolt'],

  // Liens
  source: 'https://github.com/lorycarvajol/qcm',   // repo (déjà présent)
  website: 'https://qcm.lorycarvajol.dev',          // MANQUANT aujourd'hui — à ajouter

  // Galerie — remplace le champ unique `picture`
  screenshots: [
    { src: './media/qcm/list.png', caption: 'Liste des quiz disponibles' },
    { src: './media/qcm/quiz.png', caption: 'Interface de passage du quiz' },
    { src: './media/qcm/results.png', caption: 'Écran de résultats et score' }
  ],
  picture: './media/qcm/list.png'  // fallback : 1ère capture, pour la carte grille
}
```

**Migration** : les entrées existantes gardent `picture` tel quel ; il suffit d'ajouter `screenshots: [{ src: picture, caption: name }]` pour qu'elles passent par le même composant carousel sans régression visuelle (carousel à une seule image = pas de flèches, voir Edge Cases).

---

## Design Tokens utilisés (existants — aucun nouveau token à créer)

| Token | Valeur | Usage dans ce template |
|---|---|---|
| `$accent` | `#0affef` | flèches carousel, dots actifs, bordures au survol |
| `$border-base` / `$border-strong` | `rgba($accent, .2)` / `.4` | bordure carte specs techniques, état actif |
| `$radius-md` | `20px` | conteneur carousel, cadre image |
| `$radius-sm` | `12px` | tags de specs techniques |
| `@include glass()` | blur 20px / sat 180% | fond du bloc specs techniques |
| `@include card-surface` | — | conteneur de chaque bloc (specs, carousel) |
| `$shadow-card` / `$shadow-card-hover` | — | élévation carousel, hover dots |
| `$font-2` (Dosis) | — | titres de section dans la modale (déjà utilisé pour `h3`) |

---

## Composants

| Composant | Fichier | Rôle | Notes |
|---|---|---|---|
| `Project.js` | existant, inchangé | Carte dans la grille | Continue de lire `picture` (1ère capture) — pas de changement requis |
| `ScreenshotCarousel.js` | **nouveau** — `src/components/portfolio/ScreenshotCarousel.js` | Remplace `.project-modal-image` (image unique) dans la modale | Props : `screenshots: [{src, caption}]` |
| `TechSpecsPanel.js` | **nouveau** — `src/components/portfolio/TechSpecsPanel.js` | Remplace le bloc `.tech-icons`/`.tech-list` par des catégories (Frontend/Backend/DB/Hosting) | Props : `techSpecs: {frontend, backend, database, hosting}`. Si absent, fallback sur l'affichage `languages` actuel |
| `ProjectList.js` | existant, à éditer | Injecte les deux nouveaux composants dans `project-modal-content` | Ajoute le bouton "Voir en ligne" conditionné sur `website` (le conditionnel existe déjà, seul le champ de données manquait) |

---

## États et interactions

| Élément | État | Comportement |
|---|---|---|
| Carousel — flèche suivant/précédent | Défaut | Icône `$accent` à 0.8 opacité |
| Carousel — flèche | Hover | Opacité 1, `transform: scale(1.1)`, halo `box-shadow: 0 0 15px rgba($accent, .4)` — cohérent avec `.icons i:hover` existant dans `_portfolio.scss` |
| Carousel — flèche | 1 seule capture | Flèches et dots masqués (`display: none`), pas de bouton mort |
| Carousel — dot indicateur | Défaut / actif | Point `rgba($accent, .3)` → plein `$accent` sur l'image active, transition `0.3s ease` (reprend le pattern `.page-btn.active` de la pagination) |
| Carousel — image | Changement de slide | Fondu `opacity` + léger `translateX`, `0.4s cubic-bezier(0.4, 0, 0.2, 1)` — easing déjà utilisé partout dans `_portfolio.scss` |
| Carousel — légende | Changement de slide | Fade-in synchronisé avec l'image, texte sous l'image, `color: rgba(255,255,255,.8)` |
| Bouton "Voir en ligne" | `website` absent | Bouton masqué (déjà géré par le conditionnel existant ligne 217) |
| Bouton "Voir le code source" | `source` absent | Bouton masqué (déjà géré) |
| Badge specs techniques | Catégorie vide (ex: pas de `database`) | Catégorie non rendue, pas de ligne vide |

---

## Responsive

Réutilise les breakpoints déjà définis (`$mobileBreakpoint: 850px` dans `_settings.scss`, plus 1024/768/480 dans `_portfolio.scss`).

| Breakpoint | Comportement |
|---|---|
| Desktop (>1024px) | Carousel 280×200px, flèches latérales, dots en dessous |
| Tablette (768–1024px) | Carousel pleine largeur du panneau, flèches conservées |
| Mobile (<850px) | `project-modal-header` déjà en `flex-direction: column` sur mobile (règle existante ligne 574) → carousel prend toute la largeur, hauteur réduite à 180px comme `.project-image` mobile |
| Mobile (<480px) | Swipe tactile activé en plus des dots (les flèches restent visibles mais peuvent être petites, 32px de zone tactile minimum) |

---

## Edge cases

- **0 captures** : fallback sur `picture` seul (comportement actuel préservé), pas de carousel affiché.
- **1 capture** : image statique, pas de flèches ni de dots (voir tableau états).
- **Légende manquante** : utiliser `name` du projet comme légende par défaut.
- **`website` absent** : bouton "Voir en ligne" masqué — c'est déjà le comportement du code, il ne manque que le remplissage des données.
- **`techSpecs` absent** (anciens projets non migrés) : fallback automatique sur l'affichage `languages`/`languagesIcons` actuel, pas de section vide.
- **Description longue** : le style `.project-description` existant gère déjà le retour à la ligne, aucun changement requis.

---

## Accessibilité

- Boutons flèche carousel : `aria-label="Image précédente"` / `"Image suivante"`.
- Région carousel : `aria-live="polite"` annonçant `Image {n} sur {total}`.
- Chaque `<img>` du carousel : `alt` = légende de la capture (pas le nom du projet, pour être spécifique).
- Navigation clavier : flèches gauche/droite du clavier changent de slide quand le focus est dans le carousel (la modale `FullPageModal` gère déjà probablement le piège de focus — à vérifier qu'il englobe bien le nouveau composant).
- Dots : `role="tablist"` / chaque dot `role="tab"` + `aria-selected`.

---

## Prochaines étapes suggérées

1. Ajouter le champ `website` aux projets déjà en ligne (`qcm.lorycarvajol.dev`, `codelearning.lorycarvajol.dev`) — gain immédiat, zéro nouveau composant requis.
2. Construire `ScreenshotCarousel.js` (le composant qui a le plus de valeur ajoutée visuelle).
3. Construire `TechSpecsPanel.js` en second, avec fallback propre sur les anciens projets.
4. Migrer les entrées existantes de `portfolioData.js` vers `screenshots: []` (script simple, 1 ligne par projet).