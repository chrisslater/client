FROM node:latest

ADD . /code
WORKDIR /code
VOLUME /code

RUN npm install -g typescript
RUN npm run tsc
RUN npm install
RUN npm run build:client

EXPOSE 80
CMD npm start
