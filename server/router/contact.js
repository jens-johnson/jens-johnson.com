const express = require('express');
const { contact } = require('../controllers');

const router = express.Router();

router.route('/submit')
  .post(contact.createContactRequest);

module.exports = router;
