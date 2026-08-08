# Étape 1 : build React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Le Sass est compilé par webpack (src/index.js importe src/styles/styles.scss),
# `npm run build-css` n'est donc pas nécessaire ici.
RUN npm run build

# Étape 2 : servir le build avec nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
