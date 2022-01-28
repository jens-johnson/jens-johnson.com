const { ValidationError, S3Error } = require('../../../common/errors');

function handleError(error, response) {
  if (error instanceof ValidationError) {
    return response.status(400).send({
      message: 'Invalid request',
      errors: error.errors
    });
  }
  if (error instanceof S3Error) {
    if (error.code === 'ResourceNotFound') {
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
