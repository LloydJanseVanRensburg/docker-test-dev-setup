FROM node:14.18.0

WORKDIR /usr/src/docker-test

COPY ./ ./

RUN npm install

CMD [ "/bin/bash" ]