const mongoose = require('mongoose');
const { getLogger } = require('../common/logging');

const logger = getLogger('mongoose-client');

const MONGOOSE_URI = process.env.MONGODB_URI;

mongoose.connection.on('open', () => {
  logger.info({
    message: 'DB connection open'
  });
});

/**
 * Creates a connection to MongoDB
 *
 * @returns {Promise<boolean>}
 */
function connect() {
  return mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      logger.debug({
        event: 'connect',
        success: true
      });
      return true;
    })
    .catch(error => {
      logger.error({
        event: 'connect',
        success: false,
        error
      });
      return false;
    });
}

module.exports = {
  connect
};
