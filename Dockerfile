FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /project

COPY package.json .

RUN npm install -g nodemon && npm install
