const BlogPost = require('../blogPost/BlogPost');
const transformers = require('./transformers');

const {
  blog: {
    maxTagsShown
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
      '$unwind': {
        'path': '$tags'
      }
    },
    {
      '$group': {
        '_id': '$tags',
        'count': {
          $sum: 1
        }
      }
    }
  ]).sort({ count: -1 }).limit(maxTagsShown)
    .then(tags => tags.map(transformers.fromModel));
}

module.exports = {
  getAllTags
};
