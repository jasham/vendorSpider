require('dotenv').config({});
const express = require('express');
const nextjs = require('next');
const http = require('http');

const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get('/', (req, res) => {
      const actualPage = '/index';
      return app.render(req, res, actualPage);
    });
    server.get('*', (req, res) => handle(req, res));
    const httpsServer = http.createServer(server);
    httpsServer.listen(process.env.PORT, (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
