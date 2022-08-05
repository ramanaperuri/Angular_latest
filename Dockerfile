# Stage 1: Compile and Build angular codebase
# Use official node image as the base image 
#FROM node:14.20.0 as builder
#RUN mkdir /usr/src/app
# Set the working directory 
#WORKDIR /usr/src/app
# Add the source code to app 
#COPY . /usr/src/app
#COPY ["package.json", "package-lock.json*", "./"]
#COPY . .
#RUN yarn && yarn build
# Install all the dependencies 
#RUN npm install -g @angular/cli
#RUN npm i @angular-devkit/build-angular
#RUN npm install node_modules .
#CMD ["node",  "server.js"]
# Generate the build of the application 
#RUN npm run build
# Stage 2: Serve app with nginx server   
# Use official nginx image as the base image 
#FROM nginx:1.18.0-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
# Copy the build output to replace the default nginx contents. 
#COPY --from=builder /app/dist/Resume-Parser-Angular-main /usr/share/nginx/html
# Expose port 
#EXPOSE 4500

#FROM node:14.20.0 AS build
#WORKDIR /usr/src/app 
#COPY package.json ./
#RUN npm install
#RUN npm install -g @angular/cli
#RUN npm i npm-check-updates
#RUN ncu -u
#RUN npm init
#RUN npm install
FROM node:14.15.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4500

CMD [ "npm", "start" ]

#RUN npm uninstall -g @angular/cli
#RUN npm cache clean --force

#RUN npm i
#RUN npm install node-sass -g
#RUN ng update
#RUN npm update


