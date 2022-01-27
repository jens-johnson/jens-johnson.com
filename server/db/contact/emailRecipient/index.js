/**
 * @typedef EmailRecipient
 * @property {string} first
 * @property {string} last
 * @property {string} email
 */

const EmailRecipient = require('./EmailRecipient');

/**
 *
 * @param {Object} request
 * @returns {EmailRecipient}
 */
function toItem(request) {
  const {
    first,
    last,
    email
  } = request;
  return {
    first,
    last,
    email
  }
}

/**
 * Retrieves an email recipient by email
 *
 * @param {string} email
 * @returns {Promise}
 */
function getByEmail({ email }) {
  return EmailRecipient.find({ email });
}

/**
 * Updates an email recipient using id lookup
 *
 * @param {string} id
 * @param {EmailRecipient} recipient
 * @returns {Promise<*>}
 */
function update(id, recipient) {
  return EmailRecipient.updateOne({ _id: id, ...recipient, modificationDate: new Date() });
}

/**
 * Creates an Email Recipient
 *
 * @param {EmailRecipient} recipient
 * @returns {Promise}
 */
function create(recipient) {
  return EmailRecipient.create({ ...recipient, creationDate: new Date() });
}

/**
 * Persists an Email Recipient
 *
 * @param {Object} request
 * @returns {Promise}
 */
function persist(request) {
  const recipient = toItem(request);
  return getByEmail(recipient)
    .then(maybeRecipients => maybeRecipients.length > 0
      ? update(maybeRecipients[0]._id, toItem({ ...maybeRecipients[0], ...recipient }))
      : create(recipient));
}

module.exports = {
  persist
};
