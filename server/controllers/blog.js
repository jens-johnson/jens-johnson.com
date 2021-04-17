const moment = require('moment');
const db = require('../db');
const {
  blog: {
    maxTagsShown,
    maxFeaturedPostsShown
  }
} = require('../config');
const { getLogger } = require('../logging');

const { logger } = getLogger('blog-api');

/**
 * Retrieves all blog tags from the db
 *
 * @param {Object} _
 * @param {Object} res
 */
const getAllTags = async (_, res) => {
  try {
    const tags = await db.models.BlogPost.aggregate([
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
    res.status(200).send({ tags });
    logger.info({
      msg: 'successfully retrieved tags from MongoDB',
      tags
    });
  } catch (error) {
    res.status(400).send({ tags: null, error });
    logger.error({
      msg: 'failed to retrieve tags from MongoDB',
      error
    });
  }
}

/**
 * Retrieves all blog dates from the db
 *
 * @param {Object} _
 * @param {Object} res
 */
const getAllDates = async (_, res) => {
  try {
    let dates = await db.models.BlogPost.aggregate([
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
    ]).sort({ count: -1 });
    res.status(200).send({ dates });
    logger.info({
      msg: 'successfully retrieved dates from MongoDB',
      dates
    });
  } catch (error) {
    res.status(400).send({ tags: null, error });
    logger.error({
      msg: 'failed to retrieve dates from MongoDB',
      error
    });
  }
}

/**
 * Retrieves all blog posts from the db
 *
 * @param {Object} req
 * @param {Object} res
 */
const getAllPosts = async (req, res) => {
  const { query } = req;
  try {
    let filter = {}
    if (query) {
      const { dates, categories } = query;
      if (dates) {
        let dates = Array.isArray(dates) ? dates : [ dates ];
        dates = dates.map(date => parseInt(date, 10));
        filter['$expr'] = {
          $in: [{ $year: "$date" }, dates]
        };
      }
      if (categories) {
        filter['tags'] = Array.isArray(categories) ? { $in: categories } : categories;
      }
    }
    const posts = await db.models.BlogPost.find(filter).sort('-date');
    res.status(200).send({ posts });
    logger.info({
      msg: 'successfully retrieved posts from MongoDB',
      posts
    });
  } catch (error) {
    res.status(400).send({ posts: null, error });
    logger.error({
      msg: 'failed to retrieve posts from MongoDB',
      error
    });
  }
}

/**
 * Retrieves all blog posts from the db
 *
 * @param {Object} req
 * @param {Object} res
 */
const getFeaturedPosts = async (req, res) => {
  try {
    let featuredPosts;
    featuredPosts = await db.models.BlogPost.find({
      featured: true
    }).limit(maxFeaturedPostsShown).sort('-date');
    if (!featuredPosts.length) {
      featuredPosts = await db.models.BlogPost.find()
        .limit(maxFeaturedPostsShown).sort('-date');
    }
    res.status(200).send({ featuredPosts });
    logger.info({
      msg: 'successfully retrieved featured posts from MongoDB',
      featuredPosts
    });
  } catch (error) {
    res.status(400).send({ posts: null, error });
    logger.error({
      msg: 'failed to retrieve featured posts from MongoDB',
      error
    });
  }
}

/**
 * Retrieves a blog post from the db
 *
 * @param {Object} req
 * @param {Object} res
 */
const getPost = async (req, res) => {
  const { path } = req;
  const paths = path.split('/');
  const date = new Date(paths[paths.length - 1]).toISOString();
  try {
    const post = await db.models.BlogPost.findOne({
      date: { $gte: date }
    });
    res.status(200).send({ post });
    logger.info({
      msg: `successfully retrieved post for date ${date[1]}-${date[2]}-${date[0]} from MongoDB`,
      post
    });
  } catch (error) {
    res.status(400).send({ posts: null, error });
    logger.error({
      msg: `failed to retrieve post for date ${date[1]}-${date[2]}-${date[0]} from MongoDB`,
      error
    });
  }
}

module.exports = {
  getAllTags,
  getAllDates,
  getAllPosts,
  getFeaturedPosts,
  getPost
};
