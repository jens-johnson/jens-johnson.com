import api from '~/client/api';
import { generateImageUrlFromBuffer } from '~/utils/image';

/**
 * Retrieves all blog dates from the API
 *
 * @returns {Promise}
 */
function getAllDates() {
  return api.get('blog/dates/all')
    .then(response => {
      if (response.status === 500) {
        throw new Error('Received 500 server response');
      }
      return response.json();
    })
    .then(({ dates }) => dates)
    .catch(error => {
      console.error('Failed to retrieve blog dates', error);
      return [];
    });
}

/**
 * Retrieves all blog tags from the API
 *
 * @returns {Promise}
 */
function getAllTags() {
  return api.get('blog/tags/all')
    .then(response => {
      if (response.status === 500) {
        throw new Error('Received 500 server response');
      }
      return response.json();
    })
    .then(({ tags }) => tags)
    .catch(error => {
      console.error('Failed to retrieve blog tags', error);
      return [];
    });
}

/**
 * Retrieves all blog posts from the API with an optional query string
 *
 * @param {string} query
 * @returns {Promise}
 */
function getAllPosts(query) {
  return api.get(`blog/posts/all${query ? `?${query}`: ''}`)
    .then(response => {
      if (response.status === 500) {
        throw new Error('Received 500 server response');
      }
      return response.json();
    })
    .then(({ posts }) => posts)
    .catch(error => {
      console.error('Unable to fetch posts', error);
      return [];
    });
}

/**
 * Retrieves all featured blog posts from the API
 *
 * @returns {Promise}
 */
function getFeaturedPosts() {
  return api.get('blog/posts/featured')
    .then(response => {
      if (response.status === 500) {
        throw new Error('Received 500 server response');
      }
      return response.json();
    })
    .then(({ posts }) => posts)
    .catch(error => {
      console.error('Failed to retrieve featured posts', error);
      return [];
    });
}

/**
 * Retrieves blog post from the API given a date
 *
 * @param {number|string} year
 * @param {number|string} month
 * @param {number|string} day
 * @returns {Promise}
 */
function getPost({ year, month, day }) {
  return api.get(`blog/posts/${year}-${month}-${day}`)
    .then(response => {
      if (response.status === 500) {
        throw new Error('Received 500 server response');
      }
      return response.json();
    })
    .then(({ post }) => post)
    .catch(error => {
      console.error('Unable to fetch post', error);
      return undefined;
    });
}

/**
 * Dynamically retrieves blog content module given a date
 *
 * @param {number|string} year
 * @param {number|string} month
 * @param {number|string} day
 * @returns {Promise}
 */
function getContent({ year, month, day }) {
  try {
    const { default: content } = import(`~/content/blog/posts/${year}/${month}/${day}/`);
    return Promise.resolve(content);
  } catch (error) {
    console.error('Failed to load blog content', error);
    return Promise.reject(error);
  }
}

/**
 * Retrieves blog image from the API given a date
 *
 * @param {number|string} year
 * @param {number|string} month
 * @param {number|string} day
 * @param {string} size
 * @returns {Promise}
 */
function getImage({ year, month, day, size }) {
  return api.get(`blog/posts/images/${year}-${month}-${day}-${size}`)
    .then(response => {
      if (response.status === 404) {
        throw new Error('Image not found');
      }
      return response.json();
    })
    .then(({ data }) => generateImageUrlFromBuffer(data))
    .catch(error => {
      console.error('Unable to fetch image', error);
      return undefined;
    });
}

export default {
  getAllPosts,
  getFeaturedPosts,
  getAllTags,
  getAllDates,
  getPost,
  getImage,
  getContent
};
