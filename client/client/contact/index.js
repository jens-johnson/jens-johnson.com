import api from '~/client/api';

/**
 * Submits a contact request to the API
 *
 * @param {Object} request
 * @returns {Promise}
 */
function createContactRequest(request) {
  return api.post('contact/submit', { body: request })
    .then(response => {
      if (response.status === 500) {
        throw new Error('Received 500 server response');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Failed to send contact request', error);
      return false;
    });
}

export default {
  createContactRequest
};
