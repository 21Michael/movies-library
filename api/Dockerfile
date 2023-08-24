FROM node:18.16.1

WORKDIR /usr/api

RUN npm i -g @nestjs/cli

COPY ./api/package.json ./package.json
COPY ./api/package-lock.json ./package-lock.json

RUN npm i

COPY ./api .

EXPOSE 3000

CMD ["npm", "run", "start", "--STAGE=$STAGE"]
