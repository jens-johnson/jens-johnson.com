const pino = require('pino');
const expressPino = require('express-pino-logger');

const {
  logging: {
    config: defaultConfig
  }
} = require('../../config');

/**
 * Returns a pino logger with the given namespace
 *
 * @param {string} name
 * @returns {*}
 */
function getLogger(name) {
  const { logger } = expressPino({
    logger: pino({ ...defaultConfig, name })
  });
  return logger;
}

/**
 * Returns logging middleware with the given namespace
 *
 * @param {string} name
 * @returns {*}
 */
function getLoggingMiddleware(name) {
  return expressPino({
    logger: pino({ ...defaultConfig, name })
  });
}

module.exports = {
  getLogger,
  getLoggingMiddleware
};
