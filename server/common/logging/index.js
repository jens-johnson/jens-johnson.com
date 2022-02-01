const pino = require('pino');
const expressPino = require('express-pino-logger');

const transports = require('./transports');

const transport = {
  development: transports.local,
  production: transports.file
}[process.env.environment || 'development'];

/**
 * Returns a pino logger with the given namespace
 *
 * @param {string} name - A namespace for the logger
 * @param {Object} options - Optional additional configuration
 * @returns {*}
 */
function getLogger(name, options=undefined) {
  const { logger } = expressPino({
    logger: pino({
      transport,
      ...options,
      name
    })
  });
  return logger;
}

/**
 * Returns logging middleware with the given namespace
 *
 * @param {string} name - A namespace for the logger
 * @param {Object} options - Optional additional configuration
 * @returns {*}
 */
function getLoggingMiddleware(name, options=undefined) {
  return expressPino({
    logger: pino({
      transport,
      ...options,
      name
    })
  });
}

module.exports = {
  getLogger,
  getLoggingMiddleware
};
