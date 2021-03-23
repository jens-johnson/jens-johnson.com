const express = require('express');
const { normalizePort } = require('utilities');
const {
    defaultPort
} = require('./config');
const { logger } = require('./logging');

const logger = logger('server');
const server = express();
const port = normalizePort(process.env.PORT || defaultPort || 8080);

server.set(port, port);
server.use(logger);

module.exports = server;
