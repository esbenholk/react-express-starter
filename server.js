'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



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

