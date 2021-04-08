const pino = require('express-pino-logger');

const {
    logging
} = require('../config');

const getLogger = (name) => {
    const {
        defaultConfig: {
            loggingOptions
        }
    } = logging;
    return pino({...loggingOptions, name});
}

module.exports = {
    getLogger
};
