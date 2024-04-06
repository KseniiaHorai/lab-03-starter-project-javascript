FROM node:latest

WORKDIR /app

COPY package-lock.json package.json /app/

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "node", "server.js" ]