import api from '~/client/api';
import { generateImageUrlFromBuffer } from '~/utils/image';

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

function getPost({ year, month, day }) {
  return api.get(`blog/posts/${year}-${month}-${day}`)
    .then(({ post }) => post)
    .catch(error => {
      console.error('Unable to fetch post', error);
      return undefined;
    });
}

function getContent({ year, month, day }) {
  try {
    const { default: content } = import(`~/content/blog/posts/${year}/${month}/${day}/`);
    return Promise.resolve(content);
  } catch (error) {
    console.error('Failed to load blog content', error);
    return Promise.reject(error);
  }
}

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
