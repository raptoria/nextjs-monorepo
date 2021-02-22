### Docker Instructions

If you have Docker installed you can build a development image with the command

    docker build -t test-ui .

You can then run the development server.

    docker run -i -t --rm -p 127.0.0.1:3000:3000 test-ui

### Node.js Instructions

install lerna

```
npx lerna init
```

install dependencies and bootstrap lerna

```
npm run bootstrap
```

run all the packages in dev (this will run each package on a different port)

```
npm run dev
```

run a single package in dev

```
npm run package-dev:web
```

run a package for prod

```
npm run package-build:web
npm run package-start:web
```

run all packages for prod

```
npm run build
npm run start
```
