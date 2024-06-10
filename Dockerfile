FROM node:lts-alpine

ENV NODE_ENV $NODE_ENV

RUN mkdir -p /app

WORKDIR /app

RUN apk update && apk upgrade

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

ENV PATH ./node_modules/.bin/:$PATH

RUN chown -R node /app

USER node

EXPOSE $NODE_PORT

CMD ["npm", "run", "start"]
