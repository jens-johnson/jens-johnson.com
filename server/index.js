require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
const router = require('./routes');
const { normalizePort } = require('./utilities');
const {
    defaultPort
} = require('./config');
const { getLogger } = require('./logging');
const { dbInstance, connect } = require('./db');

const serverLogger = getLogger('server');
const { logger } = serverLogger;
const server = express();
const port = normalizePort(process.env.PORT || defaultPort || 8080);

connect(dbInstance).then(() => {
    logger.info('Server listening to DB');
}).catch((error) => {
    logger.error('Server failed to establish DB connection', {
        error
    });
});

server.set('port', port);

server.use(serverLogger);
server.use(cors());
server.use(express.json());
server.use(bodyParser.json());

server.use('/api', router);

server.use(express.static(path.resolve(__dirname, '../dist')));
server.get('*', (_, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));

module.exports = {
    server
};
