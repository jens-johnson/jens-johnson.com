const { getLogger } = require('../../common/logging');
const { handleError } = require('../common/error');
const blogService = require('../../service/blog');
const parsers = require('./parsers');

const logger = getLogger('blog-api');

/**
 * Retrieves all blog tags from the DB
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function getAllTags(req, res) {
  return blogService.getAllBlogTags()
    .then(tags => {
      logger.info({
        message: 'Blog tags retrieved',
        event: 'getAllTags',
        success: true,
        tags
      });
      return res.status(200).send({ message: 'Blog tags retrieved', tags });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve all blog tags',
        event: 'getAllTags',
        success: false,
        error
      });
      return handleError(error, res);
    });
}

/**
 * Retrieves all blog tags from the DB
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function getAllDates(req, res) {
  return blogService.getAllBlogDates()
    .then(dates => {
      logger.info({
        message: 'Blog dates retrieved',
        event: 'getAllDates',
        success: true,
        dates
      });
      return res.status(200).send({ message: 'Blog dates retrieved', dates });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve all blog dates',
        event: 'getAllDates',
        success: false,
        error
      });
      handleError(error, res);
    });
}

/**
 * Retrieves all blog posts from the DB
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function getAllPosts(req, res) {
  return Promise.resolve(req)
    .then(parsers.getAllPostsRequest)
    .then(blogService.getAllBlogPosts)
    .then(posts => {
      logger.info({
        message: 'Blog posts retrieved',
        event: 'getAllPosts',
        success: true,
        posts
      });
      return res.status(200).send({ message: 'Blog posts successfully retrieved', posts });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve all blog posts',
        event: 'getAllPosts',
        success: false,
        error
      });
      return handleError(error, res);
    });
}

/**
 * Retrieves featured blog posts from the DB
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function getFeaturedPosts(req, res) {
  return blogService.getFeaturedBlogPosts()
    .then(featuredPosts => {
      logger.info({
        message: 'Featured blog posts retrieved',
        event: 'getFeaturedPosts',
        success: true,
        featuredPosts
      });
      return res.status(200).send({ message: 'Featured posts retrieved successfully', posts: featuredPosts });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve featured blog posts',
        event: 'getFeaturedPosts',
        success: false,
        error
      });
      return handleError(req, res);
    });
}

/**
 * Retrieves a blog post from the DB
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function getPost(req, res) {
  return Promise.resolve(req)
    .then(parsers.getPostRequest)
    .then(blogService.getBlogPost)
    .then(post => {
      logger.info({
        message: 'Retrieved blog post',
        event: 'getPost',
        success: true,
        post
      });
      return res.status(200).send({ post });
    })
    .catch(error =>{
      logger.error({
        message: 'Failed to retrieve blog post',
        event: 'getPost',
        success: false,
        error
      });
      return handleError(error, res);
    });
}

/**
 * Retrieves a blog image from S3
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise}
 */
function getImage(req, res) {
  return Promise.resolve(req)
    .then(parsers.getImageRequest)
    .then(blogService.getBlogImage)
    .then(data => {
      logger.info({
        message: 'Retrieved blog image',
        event: 'getImage',
        success: true
      });
      return res.status(200).send({ message: "Successfully retrieved image", data });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve blog image',
        event: 'getImage',
        success: false,
        error
      });
      return handleError(error, res);
    })
}

module.exports = {
  getAllTags,
  getAllDates,
  getAllPosts,
  getImage,
  getFeaturedPosts,
  getPost
};