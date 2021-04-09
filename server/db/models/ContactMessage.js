const mongoose = require('mongoose');

const ContactMessage = mongoose.model('ContactMessage', new mongoose.Schema({
  first: String,
  last: String,
  email: String,
  message: String
}, {
  collection: 'ContactMessages'
}));

module.exports = ContactMessage;
