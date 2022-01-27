const express = require('express');
const { contact } = require('../controllers');

const router = express.Router();

router.route('/submit')
  .post(contact.cr);

module.exports = router;
