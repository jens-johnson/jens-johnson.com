require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const router = require('./router');
const { normalizePort } = require('./utilities');
const { defaultPort } = require('./config');
const { getLogger, getLoggingMiddleware } = require('./common/logging');
const { connect } = require('./db');

const logger = getLogger('server');
const loggingMiddleware = getLoggingMiddleware('jens-johnson.com');
const server = express();
const port = normalizePort(process.env.PORT || defaultPort || 8080);

connect()
  .then(success => {
    if (success) {
      logger.info({
        message: 'Server established DB connection',
      });
    } else {
      logger.error({
        message: 'Server failed to establish connection to DB'
      });
    }
  });

server.set('port', port);

server.use(loggingMiddleware);
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

server.use('/api', router);

server.use(express.static(path.resolve(__dirname, '../dist')));
server.get('*', (_, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

module.exports = {
  server
};
