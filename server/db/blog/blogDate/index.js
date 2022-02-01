const { DatabaseError, DATABASE_ERROR_CODES } = require('../../../common/errors');
const BlogPost = require('../blogPost/BlogPost');
const transformers = require('./transformers');

/**
 * Queries all BlogPost documents by year to generate BlogDate objects describing the number of BlogPosts belonging to a given year
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
    .then(dates => dates.map(transformers.fromModel))
    .catch(error => {
      throw new DatabaseError('Cannot retrieve blog dates from BlogPost', {
        code: DATABASE_ERROR_CODES.QUERY_ITEM,
        resource: 'BlogDate',
        error
      });
    });
}

module.exports = {
  getAllDates
};
