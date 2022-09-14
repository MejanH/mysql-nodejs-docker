FROM node:lts-alpine

WORKDIR /project

COPY package.json .

RUN npm install -g nodemon && npm install
