FROM node:lts-alpine3.19

WORKDIR /app

COPY package-lock.json package.json /app/

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "node", "server.js" ]