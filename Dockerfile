# ========================
# ETAPA 1: Construcción
# ========================
FROM node:lts-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build -- --output-path=./dist/public --configuration production

# ========================
# ETAPA 2: NGINX
# ========================
FROM nginx:alpine

COPY --from=build /app/dist/public/browser /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
