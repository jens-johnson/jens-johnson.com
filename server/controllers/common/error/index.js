const { ValidationError, S3Error, S3_ERROR_CODES } = require('../../../common/errors');

/**
 * Default error handler for API requests; handles custom errors and sends appropriate responses
 *
 * @param {Object} error - The error generating request failure
 * @param {Object} response - The Express response object
 * @returns {*}
 */
function handleError(error, response) {
  if (error instanceof ValidationError) {
    return response.status(400).send({
      message: 'Invalid request',
      errors: error.errors
    });
  }
  if (error instanceof S3Error) {
    if (error.code === S3_ERROR_CODES.OBJECT_NOT_FOUND) {
      return response.status(404).send({
        message: 'Resource not found'
      });
    }
  }
  return response.status(500).send({
    message: 'Internal server error'
  });
}

module.exports = {
  handleError
};
