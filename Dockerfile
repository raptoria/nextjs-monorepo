FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm install -g lerna

RUN npm run bootstrap

RUN npm run package-build:web

ENTRYPOINT ["/usr/local/bin/npm", "run"]

CMD ["package-start:web"]

