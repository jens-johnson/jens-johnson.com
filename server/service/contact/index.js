const { getLogger } = require('../../common/logging');
const { emailRecipient, contactMessage } = require('../../db/contact');

const logger = getLogger('contact-service');

/**
 * Persists an email recipient to the DB
 *
 * @param {Object} request
 * @returns {Promise}
 */
function persistEmailRecipient(request) {
  return emailRecipient.persist(request)
    .then(result => {
      logger.debug({
        message: 'Successfully persisted email recipient',
        event: 'persistEmailRecipient',
        success: true,
        request,
        result
      });
      return result;
    })
    .catch(error => {
      logger.error({
        message: 'Failed to persist email recipient',
        event: 'persistEmailRecipient',
        success: false,
        request,
        error
      });
      throw error;
    });
}

/**
 * Creates a contact message in the DB
 *
 * @param {Object} request
 * @returns {Promise}
 */
function createContactMessage(request) {
  return contactMessage.create(request)
    .then(result => {
      logger.debug({
        message: 'Successfully created contact message',
        event: 'createContactMessage',
        success: true,
        result
      });
      return result;
    })
    .catch(error => {
      logger.error({
        message: 'Failed to create contact message',
        event: 'createContactMessage',
        success: false,
        request,
        error
      });
      throw error;
    });
}

/**
 * Creates a contact request in the DB by generating an email recipient and contact message
 *
 * @param {Object} request
 * @returns {Promise}
 */
function createContactRequest(request) {
  const emailRecipientRequest = request.emailListOptIn ? persistEmailRecipient(request) : Promise.resolve(undefined);
  const contactMessageRequest = request.message ? createContactMessage(request) : Promise.resolve(undefined);
  return Promise.all([ emailRecipientRequest, contactMessageRequest ])
    .then(([ persistedRecipient, savedMessage ]) => {
      logger.debug({
        message: 'Successfully created contact request',
        event: 'createContactRequest',
        success: true,
        request,
        persistedRecipient,
        savedMessage
      });
      return {
        recipient: persistedRecipient,
        message: savedMessage
      };
    })
    .catch(error => {
      logger.debug({
        message: 'Failed to created contact request',
        event: 'createContactRequest',
        success: false,
        request,
        error
      });
      throw error;
    });
}

module.exports = {
  createContactRequest
};
