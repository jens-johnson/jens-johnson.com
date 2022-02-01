const mongoose = require('mongoose');

const { DatabaseError, DATABASE_ERROR_CODES } = require('../common/errors');
const { getLogger } = require('../common/logging');

const {
  mongoose: {
    connection: {
      config: defaultConnectionConfig
    }
  }
} = require('../config');

const logger = getLogger('mongoose-client');

mongoose.connection.on('open', () => {
  logger.info({
    message: 'Database connection open'
  });
});
mongoose.connection.on('close', () => {
  logger.info({
    message: 'Database connection closed'
  });
});
mongoose.connection.on('disconnected', () => {
  logger.info({
    message: 'Database connection disconnected'
  });
});
mongoose.connection.on('error', error => {
  logger.error({
    message: 'Failed to establish database connection',
    error
  });
});

/**
 * Creates a connection to MongoDB
 *
 * @param {Object} options - Optional configuration options
 */
function connect(options=undefined) {
  const connectionURI = process.env.MONGOOSE_URI;
  if (!connectionURI) {
    throw new DatabaseError('Failed to establish connection - no connection string provided', {
      code: DATABASE_ERROR_CODES.CONNECTION_ERROR
    });
  }
  // noinspection JSVoidFunctionReturnValueUsed,JSCheckFunctionSignatures,JSUnresolvedFunction
  return mongoose.connect(connectionURI, { ...defaultConnectionConfig, ...options })
    .then(() => {
      logger.debug({
        event: 'connect',
        success: true
      });
    })
    .catch(error => {
      logger.error({
        event: 'connect',
        success: false,
        error
      });
      throw new DatabaseError('Failed to establish DB connection', {
        code: DATABASE_ERROR_CODES.CONNECTION_ERROR,
        error
      });
    });
}

module.exports = {
  connect
};
