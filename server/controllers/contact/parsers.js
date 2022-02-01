/**
 *
 * @param {Object} request
 * @returns {{ emailListOptIn: boolean, last: string, message: string, first: string, email: string }}
 */
function createContactRequest(request) {
  const {
    body: {
      first,
      last,
      email,
      message,
      emailListOptIn
    }
  } = request;
  return {
    first,
    last,
    email,
    message,
    emailListOptIn
  };
}

module.exports = {
  createContactRequest
};
