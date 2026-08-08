# Fiche technique — cv-modern : préparation au déploiement

**Contexte** : ce projet est un CV/portfolio interactif, React pur (Create React App), sans backend ni base de données — le plus simple des projets à déployer sur ton VPS. Objectif : le conteneuriser et le brancher sur Traefik, en profitant de sa simplicité pour aller vite.

**Cible proposée** : le **domaine racine** `https://lorycarvajol.dev` (pas un sous-domaine) — c'est ta vitrine personnelle, il est cohérent qu'elle occupe l'adresse principale plutôt qu'un sous-domaine parmi d'autres. Les projets techniques restent sur leurs sous-domaines (`qcm.`, `codelearning.`, etc.), et `lorycarvajol.dev` devient la page d'accueil qui peut les lier tous.

---

## 1. Créer un `Dockerfile` multi-étapes (build React + service statique)

Le projet n'a ni backend ni variables d'environnement sensibles — seul un build de production et un serveur pour le servir sont nécessaires.

```dockerfile
# Étape 1 : build React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-css && npm run build

# Étape 2 : servir le build avec nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

> ⚠️ Vérifier que `npm run build-css` doit bien s'exécuter **avant** `npm run build` (le Sass compile vers `src/css`, probablement importé par les composants React) — sinon le build final pourrait référencer des fichiers CSS non générés. À confirmer en inspectant comment les fichiers Sass compilés sont importés dans le code.

## 2. Créer un `nginx.conf` avec fallback SPA

Comme pour les autres projets React (React Router), il faut le repli classique vers `index.html` pour que les routes profondes (`/portfolio`, `/contact`, etc.) fonctionnent au rechargement :

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 3. Vérifier le formulaire de contact

Le projet ne semble avoir aucun backend ni variable d'environnement liée à un service d'envoi d'email — à vérifier concrètement dans le composant Contact :
- Si c'est un simple lien `mailto:`, rien à faire.
- Si ça passe par un service tiers (Formspree, EmailJS, etc.), il faut identifier la clé/l'endpoint utilisé et vérifier qu'elle n'est pas codée en dur avec des identifiants sensibles à externiser en variable d'environnement de build (`REACT_APP_*`, à fournir via `--build-arg` dans le `docker-compose.yml` puisque Create React App fige ces variables au build, comme Vite).

## 4. Créer le `docker-compose.yml`

```yaml
services:
  frontend:
    build: .
    container_name: cv-frontend
    restart: unless-stopped
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=proxy"
      - "traefik.http.routers.cv-web.rule=Host(`lorycarvajol.dev`) || Host(`www.lorycarvajol.dev`)"
      - "traefik.http.routers.cv-web.entrypoints=websecure"
      - "traefik.http.routers.cv-web.tls.certresolver=myresolver"
      - "traefik.http.services.cv-web.loadbalancer.server.port=80"

networks:
  proxy:
    external: true
```

## 5. Point d'attention côté DNS (à faire manuellement, pas par Claude Code)

Les enregistrements A racine (`lorycarvajol.dev` et `www.lorycarvajol.dev`) pointent encore vers l'IP de parking par défaut d'OVH (`213.186.33.5`), pas vers le VPS. Il faudra les **modifier** (pas en ajouter de nouveaux, pour éviter un conflit de double enregistrement A) pour pointer vers `51.75.194.109`, une fois ce projet prêt à être déployé.

---

## Résultat attendu

```bash
docker compose up -d --build
```
doit démarrer un unique conteneur `nginx` servant le build React, accessible sur `https://lorycarvajol.dev` une fois les enregistrements DNS racine mis à jour vers l'IP du VPS.
