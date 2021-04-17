const express = require('express');
const { contact } = require('./contact');
const { blog } = require('./blog');

const router = express.Router();

router.use('/blog', blog);
router.use('/contact', contact);

module.exports = router;
