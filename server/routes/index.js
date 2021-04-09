const express = require('express');
const { contact } = require('./contact');

const router = express.Router();

router.use('/contact', contact);

module.exports = router;
