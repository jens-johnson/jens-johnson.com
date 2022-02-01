const EmailRecipient = require('./EmailRecipient');
const transformers = require('./transformers');
const {DatabaseError, DATABASE_ERROR_CODES} = require('../../../common/errors');

/**
 * Returns an EmailRecipient document given an email
 *
 * @param {string} email
 * @returns {Promise}
 */
function getByEmail({ email }) {
  return EmailRecipient.find({ email })
    .then(recipients => transformers.fromModel(recipients[0]))
    .catch(error => {
      throw new DatabaseError('Cannot retrieve EmailRecipient', {
        code: DATABASE_ERROR_CODES.GET_ITEM,
        resource: 'EmailRecipient',
        error
      });
    });
}

/**
 * Updates an EmailRecipient document given an ID
 *
 * @param {string} id
 * @param {Object} recipient
 * @returns {Promise<*>}
 */
function update(id, recipient) {
  return EmailRecipient.updateOne({ _id: id, ...recipient, modificationDate: new Date() })
    .then(() => recipient)
    .catch(error => {
      throw new DatabaseError('Cannot update EmailRecipient', {
        code: DATABASE_ERROR_CODES.UPDATE_ITEM,
        resource: 'EmailRecipient',
        error
      });
    });
}

/**
 * Creates an EmailRecipient document
 *
 * @param {Object} recipient
 * @returns {Promise}
 */
function create(recipient) {
  return EmailRecipient.create({ ...recipient, creationDate: new Date() })
    .then(() => recipient)
    .catch(error => {
      throw new DatabaseError('Cannot create EmailRecipient', {
        code: DATABASE_ERROR_CODES.PERSIST_ITEM,
        resource: 'EmailRecipient',
        error
      });
    });
}

/**
 * Persists an EmailRecipient document
 *
 * @param {Object} request
 * @returns {Promise}
 */
function persist(request) {
  const recipient = transformers.toModel(request);
  return getByEmail(recipient)
    .then(existingRecipient => existingRecipient
      ? update(existingRecipient.id, transformers.toModel({ ...existingRecipient, ...recipient }))
      : create(recipient))
    .catch(error => {
      throw new DatabaseError('Cannot persist EmailRecipient', {
        code: DATABASE_ERROR_CODES.PERSIST_ITEM,
        resource: 'EmailRecipient',
        error
      });
    });
}

module.exports = {
  persist
};
