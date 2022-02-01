const mongoose = require('mongoose');
const { getLogger } = require('../common/logging');
const { DatabaseError, DATABASE_ERROR_CODES } = require('../common/errors');

const {
  mongoose: {
    connection: {
      config: defaultConnectionConfig
    }
  }
} = require('../config');

const logger = getLogger('mongoose-client');

const MONGOOSE_URI = process.env.MONGODB_URI;

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
  // noinspection JSVoidFunctionReturnValueUsed,JSCheckFunctionSignatures,JSUnresolvedFunction
  return mongoose.connect(MONGOOSE_URI, { ...defaultConnectionConfig, ...options })
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
