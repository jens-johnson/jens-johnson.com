/**
 * @typedef ContactMessage
 * @property {string} first
 * @property {string} last
 * @property {string} email
 * @property {string} message
 */

const ContactMessage = require('./ContactMessage');

/**
 *
 * @param {Object} request
 * @returns {ContactMessage}
 */
function toItem(request) {
  const {
    first,
    last,
    email,
    message
  } = request;
  return {
    first,
    last,
    email,
    message
  };
}

/**
 * Creates a Contact Message
 * @param {Object} request
 * @returns {Promise}
 */
function create(request) {
  return Promise.resolve(request)
    .then(toItem)
    .then(message => ContactMessage.create({ ...message, creationDate: new Date() }));
}

module.exports = {
  create
};
