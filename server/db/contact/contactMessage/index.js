const ContactMessage = require('./ContactMessage');
const transformers = require('./transformers');

/**
 * Creates a Contact Message
 * @param {Object} request
 * @returns {Promise}
 */
function create(request) {
  const message = transformers.toModel(request);
  return ContactMessage.create({ ...message, creationDate: new Date() })
    .then(() => message);
}

module.exports = {
  create
};
