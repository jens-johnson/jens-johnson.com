const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const { normalizePort } = require('./utilities');
const {
    defaultPort
} = require('./config');
const { getLogger } = require('./logging');

const logger = getLogger('server');
const server = express();
const port = normalizePort(process.env.PORT || defaultPort || 8080);

server.set('port', port);

server.use(logger);
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

server.use(express.static(path.resolve(__dirname, '../dist')));

module.exports = {
    server
};
