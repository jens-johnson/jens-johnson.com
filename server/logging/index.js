const pino = require('express-pino-logger');

const {
    logging
} = require('../config');

const getLogger = (name) => {
    const {
        defaultConfig: {
            loggingOptions, loggingDestination
        }
    } = logging;
    return pino({...name, loggingOptions}, loggingDestination);
}

module.exports = {
    logger: (name) => getLogger(name)
};
