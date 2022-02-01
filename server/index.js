require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const router = require('./router');
const { getLogger, getLoggingMiddleware } = require('./common/logging');
const { normalizePort } = require('./utilities');
const db = require('./db');

const { server: serverConfig } = require('./config');

const logger = getLogger('server');
const loggingMiddleware = getLoggingMiddleware('jens-johnson.com');
const PORT = normalizePort(process.env.PORT || serverConfig.port.default);
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
