FROM node:alpine

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm install -g lerna

RUN npm run bootstrap

ENTRYPOINT ["/usr/local/bin/npm", "run"]

CMD ["start"]

