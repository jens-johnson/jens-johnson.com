require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const router = require('./router');
const { normalizePort } = require('./utilities');
const { getLogger, getLoggingMiddleware } = require('./common/logging');
const db = require('./db');

const {
  server: {
    defaultPort
  }
} = require('./config');

const logger = getLogger('server');
const loggingMiddleware = getLoggingMiddleware('jens-johnson.com');
const PORT = normalizePort(process.env.PORT || defaultPort || 8080);
const server = express();

db.connect()
  .then(() => {
    logger.info({
      message: 'Server established database connection'
    });
  })
  .catch((error) => {
    logger.error({
      message: 'Server failed to establish database connection',
      error
    });
  });

server.set('port', PORT);

server.use(loggingMiddleware);
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

server.use('/api', router);

server.use(express.static(path.resolve(__dirname, '../dist')));
server.get('*', (_, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

module.exports = server;
