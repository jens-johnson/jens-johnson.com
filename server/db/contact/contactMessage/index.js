const { DatabaseError, DATABASE_ERROR_CODES } = require('../../../common/errors');
const ContactMessage = require('./ContactMessage');
const transformers = require('./transformers');

/**
 * Creates a ContactMessage document
 *
 * @param {Object} request
 * @returns {Promise}
 */
function create(request) {
  const message = transformers.toModel(request);
  return ContactMessage.create({ ...message, creationDate: new Date() })
    .then(() => message)
    .catch(error => {
      throw new DatabaseError('Cannot create ContactMessage', {
        code: DATABASE_ERROR_CODES.CREATE_ITEM,
        resource: 'ContactMessage',
        error
      });
    });
}

module.exports = {
  create
};
