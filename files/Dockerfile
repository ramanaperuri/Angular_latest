# Stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json* /app
RUN npm install
COPY . /app
RUN npm run build --prod
# Stage 2
FROM nginx:1.20.1
COPY --from=build-step /app/dist/ng-docker-example /usr/share/nginx/html
EXPOSE 4200:80
