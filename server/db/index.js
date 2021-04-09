const mongoose = require('mongoose');
const models = require('./models');
const { getLogger } = require('../logging');

const { logger } = getLogger('db-client');

const MONGOOSE_URI = process.env.MONGO_URI;
const dbInstance = mongoose;

dbInstance.connection.on('open', () => {
  logger.info('DB Connection listening');
});

const connect = async (instance) => {
  // TODO: Throw error on failure
  if (MONGOOSE_URI) {
    await instance.connect(MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      logger.info('DB connection established');
      return true;
    }).catch((error) => {
      logger.error('DB connection failed', {
        error
      });
      return false;
    });
  } else {
    logger.error('Failed to retrieve Mongo connection URI');
    return false;
  }
};

module.exports = {
  dbInstance,
  connect,
  models
};
