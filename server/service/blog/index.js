const { getLogger } = require('../../common/logging');
const { blogPost, blogTag, blogDate } = require('../../db/blog');
const s3Service = require('../aws/s3');

const {
  aws: {
    s3: {
      blogImageBucket
    }
  }
} = require('../../config');

const logger = getLogger('blog-service');

/**
 * Retrieves an array of all blog tags from the DB with their respective usage counts
 *
 * @returns {Promise}
 */
function getAllBlogTags() {
  return blogTag.getAllTags()
    .then(tags => {
      logger.debug({
        event: 'getAllBlogTags',
        success: true,
        tags
      });
      return tags;
    })
    .catch(error => {
      logger.error({
        event: 'getAllBlogTags',
        success: false,
        error
      });
      throw error;
    });
}

/**
 * Retrieves an array of all blog dates (grouped by year) from the DB with their respective post counts
 *
 * @returns {Promise}
 */
function getAllBlogDates() {
  return blogDate.getAllDates()
    .then(dates => {
      logger.debug({
        event: 'getAllBlogDates',
        success: true,
        dates
      });
      return dates;
    })
    .catch(error => {
      logger.error({
        event: 'getAllBlogDates',
        success: false,
        error
      });
      throw error;
    });
}

/**
 * Retrieves all blog dates from the DB, optionally filtered by dates and tags
 *
 * @param {Object} request
 * @returns {Promise}
 */
function getAllBlogPosts(request) {
  return blogPost.getAllPosts(request)
    .then(posts => {
      logger.debug({
        event: 'getAllBlogPosts',
        success: true,
        posts,
        request
      });
      return posts;
    })
    .catch(error => {
      logger.error({
        event: 'getAllBlogPosts',
        success: false,
        error,
        request
      });
      throw error;
    });
}

/**
 * Retrieves featured blog posts from the DB
 *
 * @returns {Promise}
 */
function getFeaturedBlogPosts() {
  return blogPost.getFeaturedPosts()
    .then(featuredPosts => {
      logger.debug({
        event: 'getFeaturedBlogPosts',
        success: true,
        featuredPosts
      });
      return featuredPosts;
    })
    .catch(error => {
      logger.error({
        event: 'getFeaturedBlogPosts',
        success: false,
        error
      });
      throw error;
    });
}

/**
 * Retrieves blog post from the DB queried by date
 *
 * @param {string} date
 * @returns {Promise}
 */
function getBlogPost({ date }) {
  return blogPost.getPostByDate(date)
    .then(post => {
      logger.debug({
        event: 'getBlogPost',
        success: true,
        post,
        date
      });
      return post;
    })
    .catch(error => {
      logger.error({
        event: 'getBlogPost',
        success: false,
        error,
        date
      });
      throw error;
    });
}

/**
 * Retrieves blog image from S3.
 *
 * @param {string} size
 * @param {string} year
 * @param {string} month
 * @param {string} day
 * @returns {Promise}
 */
function getBlogImage({ size, year, month, day }) {
  return s3Service.getFile({ bucket: blogImageBucket.name, key: `${year}/${month}/${day}/${blogImageBucket.defaultImagePrefix}_${size}.jpg` })
    .then(buffer => {
      logger.debug({
        event: 'getBlogImage',
        success: true,
        date: {
          year,
          month,
          day
        },
        size
      });
      return buffer;
    })
    .catch(error => {
      logger.error({
        event: 'getBlogImage',
        success: false,
        error,
        date: {
          year,
          month,
          day
        },
        size
      });
      throw error;
    });
}

module.exports = {
  getAllBlogTags,
  getAllBlogDates,
  getAllBlogPosts,
  getFeaturedBlogPosts,
  getBlogPost,
  getBlogImage
};
