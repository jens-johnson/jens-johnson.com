const ContactMessage = require('./ContactMessage');

function toItem(request) {
  const {
    first,
    last,
    email,
    message
  } = request;
  return {
    first,
    last,
    email,
    message
  };
}

function create(request) {
  return Promise.resolve(request)
    .then(toItem)
    .then(message => ContactMessage.create({ ...message, creationDate: new Date() }));
}

module.exports = {
  create
};
