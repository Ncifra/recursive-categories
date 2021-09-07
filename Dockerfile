FROM node:14-alpine

RUN apk add dos2unix

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait
RUN chmod +x ./docker-entrypoint.sh
RUN chmod +x ./start-container.sh
RUN dos2unix ./docker-entrypoint.sh
RUN dos2unix ./start-container.sh
