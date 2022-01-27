import api from '~/client/api';

function createContactRequest(request) {
  return api.post('contact/submit', { body: request })
    .then(response => {
      if (response.statusCode !== 201) {
        console.error('Failed to send contact request');
        return false;
      }
      return true;
    }).catch(error => {
      console.error('Failed to send contact request', error);
      return false;
    });
}

export default {
  createContactRequest
};
