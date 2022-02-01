const { DatabaseError, DATABASE_ERROR_CODES } = require('../../../common/errors');
const BlogPost = require('./BlogPost');
const transformers = require('./transformers');

const {
  blog: {
    maxFeaturedPostsShown
  }
} = require('../../../config');

/**
 * Returns all BlogPost documents given optional filters
 *
 * @param {Object} request
 * @returns {Promise}
 */
function getAllPosts(request) {
  return Promise.resolve(request)
    .then(transformers.toFilter)
    .then(filter => BlogPost.find(filter).sort('-date'))
    .then(posts => posts.map(transformers.fromModel))
    .catch(error => {
      throw new DatabaseError('Cannot retrieve blog posts', {
        code: DATABASE_ERROR_CODES.GET_ITEM,
        resource: 'BlogPost',
        error
      });
    });
}

/**
 * Returns all BlogPost documents with a 'featured' flag
 *
 * @returns {Promise}
 */
function getFeaturedPosts() {
  return BlogPost.find({ featured: true }).limit(maxFeaturedPostsShown).sort('-date')
    .then(featuredPosts =>
      featuredPosts.length > 0
        ? featuredPosts
        : BlogPost.find().limit(maxFeaturedPostsShown).sort('-date')
    )
    .then(posts => posts.map(transformers.fromModel))
    .catch(error => {
      throw new DatabaseError('Cannot retrieve featured blog posts', {
        code: DATABASE_ERROR_CODES.GET_ITEM,
        resource: 'BlogPost',
        error
      });
    });
}

/**
 * Retrieves a BlogPost document given a date
 *
 * @param {string} date
 * @returns {Promise}
 */
function getPostByDate(date) {
  return BlogPost.findOne({
    date: { $gte: date }
  })
    .then(transformers.fromModel)
    .catch(error => {
      throw new DatabaseError('Cannot retrieve blog post by date', {
        code: DATABASE_ERROR_CODES.GET_ITEM,
        resource: 'BlogPost',
        error
      });
    });
}

module.exports = {
  getAllPosts,
  getFeaturedPosts,
  getPostByDate
};
