const blogPost = require('../../db/blog/blogPost');
const s3Service = require('../aws/s3');
const { getLogger } = require('../../common/logging');
const { DatabaseError } = require('../../common/errors');

const {
  aws: {
    s3: {
      blogImageBucket
    }
  }
} = require('../../config');

const logger = getLogger('blog-service');

/**
 *
 * @param {string|string[]} dates
 * @param {string|string[]} categories
 * @returns {Object}
 */
function buildPostSearchFilter({ dates, categories }) {
  let filter = {};
  if (dates) {
    let datesFilter = Array.isArray(dates) ? dates : [ dates ];
    datesFilter = datesFilter.map(date => parseInt(date, 10));
    filter['$expr'] = {
      $in: [{ $year: "$date" }, datesFilter]
    };
  }
  if (categories) {
    filter['tags'] = Array.isArray(categories) ? { $in: categories } : categories;
  }
  return filter;
}

/**
 * Retrieves an array of all blog tags from the DB with their respective usage counts
 *
 * @returns {Promise}
 */
function getAllBlogTags() {
  return blogPost.getAllTags()
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
      throw new DatabaseError('Failed to get blog tags', 'BlogPost');
    });
}

/**
 * Retrieves an array of all blog dates (grouped by year) from the DB with their respective post counts
 *
 * @returns {Promise}
 */
function getAllBlogDates() {
  return blogPost.getAllDates()
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
      throw new DatabaseError('Failed to get blog dates', 'BlogPost');
    });
}

/**
 * Retrieves all blog dates from the DB, optionally filtered by dates and tags
 *
 * @param {{ dates: string|string[], categories: string|string[] }} request
 * @returns {Promise}
 */
function getAllBlogPosts(request) {
  return Promise.resolve(request)
    .then(buildPostSearchFilter)
    .then(blogPost.getAllPosts)
    .then(posts => {
      logger.debug({
        event: 'getAllBlogPosts',
        success: true,
        posts,
        filter: {
          dates,
          categories
        }
      });
      return posts;
    })
    .catch(error => {
      logger.error({
        event: 'getAllBlogPosts',
        success: false,
        error,
        filter: {
          dates,
          categories
        }
      });
      throw new DatabaseError('Failed to get blog posts', 'BlogPost');
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
    }).catch(error => {
      logger.error({
        event: 'getFeaturedBlogPosts',
        success: false,
        error
      });
      throw new DatabaseError('Failed to get featured blog posts', 'BlogPost');
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
      throw new DatabaseError('Failed to get blog post', 'BlogPost');
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
        buffer,
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
