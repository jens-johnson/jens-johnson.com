/**
 * @typedef {Object} ContactRequest
 * @property {string} first - First name
 * @property {string} last - Last name
 * @property {string} email - Email address
 * @property {string} message - Contact message
 * @property {boolean} emailListOptIn - True/false if the request user would like to opt in to emailing list
 */

const db = require('../db');
const { validators } = require('../utilities');
const { getLogger } = require('../logging');

const { logger } = getLogger('contact-api');

/**
 * Parses a contact request using json request validators
 *
 * @param {Object} req
 * @return {Promise<ContactRequest>}
 */
const parseContactRequest = (req) => {
  const {
    body: contactRequest
  } = req;
  return Promise.resolve(contactRequest)
    .then(contactRequest => validators.validate(contactRequest, validators.SCHEMAS.CONTACT_REQUEST, 'contact request'));
}

/**
 * Persists a contact request to the DB
 *
 * @param {ContactRequest} contactRequest
 */
const persistContactRequest = (contactRequest) => {
  const {
    first,
    last,
    email,
    message,
    emailListOptIn
  } = contactRequest;
  if (emailListOptIn) {
    db.models.EmailRecipient.find({email}, (error, matches) => {
      if (error) {
        logger.error({
          msg: 'error retrieving email recipients for request',
          contactRequest,
          error
        });
      }
      if (!matches || matches.length) {
        db.models.EmailRecipient.create({
          first,
          last,
          email,
          dateAdded: new Date()
        }).then(() => {
          logger.info({
            msg: 'created email recipient',
            contactRequest
          });
        }).catch((error) => {
          logger.error({
            msg: 'error creating email recipient',
            contactRequest,
            error
          });
        });
      }
      else if (matches.length === 1) {
        db.models.EmailRecipient.updateOne({
          _id: matches[0]._id,
          first,
          last,
          email
        }, (error, _) => {
          if (error) {
            logger.error({
              msg: 'failed to update contact request',
              contactRequest,
              error
            });
          } else {
            logger.info({
              msg: 'updated contact request',
              contactRequest
            });
          }
        });
      }
    });
  }
  if (message) {
    db.models.ContactMessage.create({
      first,
      last,
      email,
      message
    }).then(() => {
      logger.info({
        msg: 'created contact message',
        contactRequest
      });
    }).catch((error) => {
      logger.error({
        msg: 'error creating contact message',
        contactRequest,
        error
      });
    });
  }
}

/**
 * Controller for /api/contact/submit.
 * Parses and persists a contact request to the DB.
 *
 * @param {Object} req
 * @param {Object} res
 */
const submitContactRequest = async (req, res) => {
  return Promise.resolve(req)
    .then(parseContactRequest)
    .then(persistContactRequest)
    .then(() => res.status(201).send())
    .catch((error) => res.json({error}).status(400).send());
}

module.exports = {
  submitContactRequest
};
