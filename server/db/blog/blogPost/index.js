const BlogPost = require('./BlogPost');

const {
  blog: {
    maxTagsShown,
    maxFeaturedPostsShown
  }
} = require('../../../config');

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

function getAllPosts(filter) {
  return BlogPost.find(filter).sort('-date');
}

function getFeaturedPosts() {
  return BlogPost.find({ featured: true }).limit(maxFeaturedPostsShown).sort('-date')
    .then(featuredPosts =>
      featuredPosts.length > 0
        ? featuredPosts
        : BlogPost.find().limit(maxFeaturedPostsShown).sort('-date')
    );
}

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
