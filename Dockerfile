FROM node:latest
ADD . /code
WORKDIR /code
EXPOSE 8888
CMD npm start
