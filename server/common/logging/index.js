const pino = require('express-pino-logger');
const { logging } = require('../../config');

const {
  defaultConfig: {
    loggingOptions
  }
} = logging;

/**
 * Returns a pino logger with the given namespace
 *
 * @param {string} name
 * @returns {*}
 */
function getLogger(name) {
  const { logger } = pino({ ...loggingOptions, name });
  return logger;
}

function getLoggingMiddleware(name) {
  return pino({ ...loggingOptions, name });
}

module.exports = {
  getLogger,
  getLoggingMiddleware
};
