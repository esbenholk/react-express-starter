'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'din mor' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

let log = require('bunyan').createLogger({
  name: 'api-server',
  streams: [{ level: 'DEBUG', stream: process.stdout }]
});

let apiRouter = require('./lib/router');

app
  .use('/api', (req, res, next) => {
    log.debug(`${req.method} ${req.url}`);
    next();
  })
  .use('/api', apiRouter)
  .listen(process.env.PORT || 5000, () => {
    log.info(`Server is listening on http://localhost:${PORT}`);
  });

