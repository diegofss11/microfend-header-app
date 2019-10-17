FROM node:latest

COPY package*.json ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN npm install

COPY . .

CMD PORT=$PORT node server.js