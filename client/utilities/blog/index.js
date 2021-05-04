import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { get } from '../api';
import { parseQueryString } from '../browser'

/**
 * Retrieves all blog post dates and invokes the React component state setter to utilize them
 *
 * @param {function} stateSetter
 */
const retrieveDates = async (stateSetter) => {
  try {
    const { dates } = await get('blog/dates/all');
    stateSetter(dates);
  } catch (err) {
    stateSetter([]);
  }
}

/**
 * Retrieves all blog post tags and invokes the React component state setter to utilize them
 *
 * @param {function} stateSetter
 */
const retrieveTags = async (stateSetter) => {
  try {
    const { tags } = await get('blog/tags/all');
    stateSetter(tags);
  } catch (err) {
    stateSetter([]);
  }
}

/**
 * Retrieves all blog posts and invokes the React component state setter to utilize them
 *
 * @param {function} stateSetter
 */
const retrieveAllPosts = async (stateSetter) => {
  const queryString = parseQueryString();
  try {
    const { posts } = await get(`blog/posts/all${queryString ? `?${queryString}` : ''}`);
    stateSetter(posts);
  } catch (err) {
    stateSetter([]);
  }
}

/**
 * Retrieves featured blog posts and invokes the React component state setter to utilize them
 *
 * @param {function} stateSetter
 */
const retrieveFeaturedPosts = async (stateSetter) => {
  try {
    const { featuredPosts } = await get('blog/posts/featured');
    stateSetter(featuredPosts);
  } catch (err) {
    stateSetter(null);
  }
}

/**
 * Retrieves blog post for a given date and invokes the React component state setter to utilize it
 *
 * @param {Object} date
 * @param {function} stateSetter
 */
const retrievePost = async ({ year, month, day }, stateSetter) => {
  try {
    const { post } = await get(`blog/posts/${year}-${month}-${day}`);
    stateSetter(post);
  } catch (err) {
    stateSetter(null);
  }
}

/**
 * Retrieves the content for a given blog post and invokes the React component state setter to utilize it
 *
 * @param {Object} date
 * @param {function} stateSetter
 */
const retrieveContent = async ({ year, month, day }, stateSetter) => {
  try {
    const { default: content } = await import(`~/content/blog/posts/${year}/${month}/${day}/`);
    stateSetter(content);
    // Deprecated content import (from AWS)
    // const { content } = await get(`blog/posts/content/${year}-${month}-${day}`);
  } catch (err) {
    stateSetter(null);
  }
}

export {
  retrieveFeaturedPosts,
  retrieveAllPosts,
  retrieveContent,
  retrieveDates,
  retrieveTags,
  retrievePost
};
