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
