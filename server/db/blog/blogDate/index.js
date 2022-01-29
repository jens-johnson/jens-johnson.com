const BlogPost = require('../blogPost/BlogPost');
const transformers = require('./transformers');

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
    .then(dates => dates.map(transformers.fromModel))
}

module.exports = {
  getAllDates
};
