const express = require('express');

const contactRouter = require('./contact');
const blogRouter = require('./blog');

const router = express.Router();

router.use('/blog', blogRouter);
router.use('/contact', contactRouter);

module.exports = router;
