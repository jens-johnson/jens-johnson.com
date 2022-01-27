const blogService = require('../../service/blog');
const parsers = require('./parsers');
const { getLogger } = require('../../common/logging');

const logger = getLogger('blog-api');

/**
 * Retrieves all blog tags from the DB.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
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
      return res.status(200).send({ tags });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve all blog tags',
        event: 'getAllTags',
        success: false,
        error
      });
      res.status(404).send({ tags: [] });
    });
}

/**
 * Retrieves all blog tags from the DB.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
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
      return res.status(200).send({ dates });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve all blog dates',
        event: 'getAllDates',
        success: false,
        error
      });
      return res.status(404).send({ dates: [] });
    });
}

/**
 * Retrieves all blog posts from the db
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<void>}
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
      return res.status(200).send({ posts });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve all blog posts',
        event: 'getAllPosts',
        success: false,
        error
      });
      return res.status(404).send({ posts: [] });
    });
}

/**
 * Retrieves all blog posts from the db
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<void>}
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
      return res.status(200).send({ posts: featuredPosts });
    }).catch(error => {
      logger.error({
        message: 'Failed to retrieve featured blog posts',
        event: 'getFeaturedPosts',
        success: false,
        error
      });
      return res.status(404).send({ posts: [] });
    });
}

/**
 * Retrieves all blog posts from the db
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<void>}
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
      return res.status(404).send({ post: null });
    });
}

/**
 * Retrieves blog image from S3.
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<void>}
 */
function getImage(req, res) {
  return Promise.resolve(req)
    .then(parsers.getImageRequest)
    .then(blogService.getBlogImage)
    .then(buffer => {
      logger.info({
        message: 'Retrieved blog image',
        event: 'getImage',
        success: true,
        buffer
      });
      return res.status(200).send({ buffer });
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve blog image',
        event: 'getImage',
        success: false,
        error
      });
      return res.status(200).send({ buffer: null });
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