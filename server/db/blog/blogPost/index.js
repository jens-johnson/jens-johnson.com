const BlogPost = require('./BlogPost');
const transformers = require('./transformers');

const {
  blog: {
    maxFeaturedPostsShown
  }
} = require('../../../config');

/**
 * Returns all blog posts from the DB given a filtered request
 *
 * @param {Object} request
 * @returns {Promise}
 */
function getAllPosts(request) {
  return Promise.resolve(request)
    .then(transformers.toFilter)
    .then(filter => BlogPost.find(filter).sort('-date'))
    .then(posts => posts.map(transformers.fromModel));
}

/**
 * Returns all featured blog posts from the DB
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
    .then(posts => posts.map(transformers.fromModel));
}

/**
 * Retrieves a blog post from the DB by date
 *
 * @param {string} date
 * @returns {Promise}
 */
function getPostByDate(date) {
  return BlogPost.findOne({
    date: { $gte: date }
  })
    .then(transformers.fromModel)
}

module.exports = {
  getAllPosts,
  getFeaturedPosts,
  getPostByDate
};
