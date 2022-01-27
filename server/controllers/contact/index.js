const contactService = require('../../service/contact');
const parsers = require('./parsers');
const validate = require('./validators');
const { getLogger } = require('../../common/logging');

const logger = getLogger('contact-api');

/**
 * Creates a contact request in the DB
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function createContactRequest(req, res) {
  return Promise.resolve(req)
    .then(parsers.createContactRequest)
    .then(request => validate(request, '/contact/submit/request'))
    .then(contactService.createContactRequest)
    .then(result => {
      logger.info({
        message: 'Created contact request',
        event: 'createContactRequest',
        success: true,
        result
      });
      return res.status(201).send(result);
    })
    .catch(error => {
      logger.error({
        message: 'Failed to contact request',
        event: 'createContactRequest',
        success: false,
        error
      });
      return res.status(500).send();
    });
}

module.exports = {
  createContactRequest
};
