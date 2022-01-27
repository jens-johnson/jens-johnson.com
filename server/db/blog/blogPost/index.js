const BlogPost = require('./BlogPost');

const {
  blog: {
    maxTagsShown,
    maxFeaturedPostsShown
  }
} = require('../../../config');

/**
 * Returns all blog tags from the DB
 *
 * @returns {Promise}
 */
function getAllTags() {
  return BlogPost.aggregate([
    {
      $unwind: {
        path: '$tags'
      }
    },
    {
      '$group': {
        '_id': '$tags',
        "count": {
          $sum: 1
        }
      }
    }
  ]).sort({ count: -1 }).limit(maxTagsShown);
}

/**
 * Returns all blog dates from the DB
 *
 * @returns {Promise}
 */
function getAllDates() {
  return BlogPost.aggregate([
    {
      '$group': {
        '_id': {
          year : {$year : "$date"}
        },
        "count": {
          $sum: 1
        }
      }
    }
  ]).sort({ count: -1 })
}

/**
 * Returns all blog posts from the DB with an optional given filter
 *
 * @param {Object} filter
 * @returns {Promise}
 */
function getAllPosts(filter) {
  return BlogPost.find(filter).sort('-date');
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
    );
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
  });
}

module.exports = {
  getAllTags,
  getAllDates,
  getAllPosts,
  getFeaturedPosts,
  getPostByDate
};
