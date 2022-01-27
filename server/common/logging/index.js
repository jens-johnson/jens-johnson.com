const pino = require('express-pino-logger');
const { logging } = require('../config');

/**
 * Returns a pino logger with the given namespace
 *
 * @param {string} name
 * @returns {*}
 */
function getLogger(name) {
  const {
    defaultConfig: {
      loggingOptions
    }
  } = logging;
  const { logger } = pino({ ...loggingOptions, name });
  return logger;
}

module.exports = {
  getLogger
};
