const pino = require('express-pino-logger');

const {
  logging: {
    defaultConfig: {
      loggingOptions
    }
  }
} = require('../../config');

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

/**
 * Returns logging middleware with the given namespace
 *
 * @param {string} name
 * @returns {*}
 */
function getLoggingMiddleware(name) {
  return pino({ ...loggingOptions, name });
}

module.exports = {
  getLogger,
  getLoggingMiddleware
};
