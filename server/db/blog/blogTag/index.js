const BlogPost = require('../blogPost/BlogPost');
const transformers = require('./transformers');

const {
  blog: {
    maxTagsShown
  }
} = require('../../../config');
const {DatabaseError, DATABASE_ERROR_CODES} = require('../../../common/errors');

/**
 * Queries all BlogPost documents by year to generate BlogTag objects describing the number of BlogPosts belonging to a given tag
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
    .then(tags => tags.map(transformers.fromModel))
    .catch(error => {
      throw new DatabaseError('Cannot retrieve blog tags from BlogPost', {
        code: DATABASE_ERROR_CODES.QUERY_ITEM,
        resource: 'BlogTag',
        error
      });
    });
}

module.exports = {
  getAllTags
};
