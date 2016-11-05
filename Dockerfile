FROM node:latest

ADD . /code
WORKDIR /code

# RUN npm install -g typescript
# RUN npm install
# RUN tsc; exit 0

VOLUME /code/src
EXPOSE 80
CMD ["./startup.sh"]
