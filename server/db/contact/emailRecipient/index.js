const EmailRecipient = require('./EmailRecipient');
const transformers = require('./transformers');

/**
 * Retrieves an email recipient by email
 *
 * @param {string} email
 * @returns {Promise}
 */
function getByEmail({ email }) {
  return EmailRecipient.find({ email })
    .then(recipients => transformers.fromModel(recipients[0]));
}

/**
 * Updates an email recipient using id lookup
 *
 * @param {string} id
 * @param {Object} recipient
 * @returns {Promise<*>}
 */
function update(id, recipient) {
  return EmailRecipient.updateOne({ _id: id, ...recipient, modificationDate: new Date() })
    .then(() => recipient);
}

/**
 * Creates an Email Recipient
 *
 * @param {Object} recipient
 * @returns {Promise}
 */
function create(recipient) {
  return EmailRecipient.create({ ...recipient, creationDate: new Date() })
    .then(() => recipient);
}

/**
 * Persists an Email Recipient
 *
 * @param {Object} request
 * @returns {Promise}
 */
function persist(request) {
  const recipient = transformers.toModel(request);
  return getByEmail(recipient)
    .then(existingRecipient => existingRecipient
      ? update(existingRecipient.id, transformers.toModel({ ...existingRecipient, ...recipient }))
      : create(recipient));
}

module.exports = {
  persist
};
