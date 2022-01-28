const express = require('express');
const { blog } = require('../controllers');

const router = express.Router();

router.route('/tags/all')
  .get(blog.getAllTags);

router.route('/dates/all')
  .get(blog.getAllDates);

router.route('/posts/all')
  .get(blog.getAllPosts);

router.route('/posts/featured')
  .get(blog.getFeaturedPosts);

router.route('/posts/:year-:month-:day')
  .get(blog.getPost);

router.route('/posts/images/:year-:month-:day-:size')
  .get(blog.getImage);

module.exports = router;
