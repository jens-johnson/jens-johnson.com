import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { post } from '../api';

/**
 * Contact form submission handler
 *
 * @return {Promise<void | string>}
 */
const submitContact = async () => {
  const formData = {
    first: $('#contactFirstName').val(),
    last: $('#contactLastName').val(),
    email: $('#contactEmail').val(),
    message: $('#contactMessage').val(),
    emailListOptIn: $('#contactEmailList').is(':checked')
  };

  return Promise.resolve(formData)
    .then(data => post('contact/submit', data))
    .then(() => location.reload())
    .catch(() => location.href = '/');
}

export {
  submitContact
};
