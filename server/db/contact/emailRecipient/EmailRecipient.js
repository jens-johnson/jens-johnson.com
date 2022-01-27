const mongoose = require('mongoose');

const EmailRecipient = mongoose.model('EmailRecipient', new mongoose.Schema({
  first: String,
  last: String,
  email: String,
  dateAdded: Date
}, {
  collection: 'EmailRecipients'
}));

module.exports = EmailRecipient;
