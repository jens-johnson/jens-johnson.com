import api from '~/client/api';
import { generateImageUrlFromBuffer } from '~/utils/image';

function getAllPosts(query) {
  return api.get(`blog/posts/all${query ? `?${query}`: ''}`)
    .then(({ posts }) => posts)
    .catch(error => {
      console.error('Unable to fetch posts', error);
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
  return api.get(`blog/posts/images/${year}-${month}-${day}_${size}`)
    .then(({ buffer }) => generateImageUrlFromBuffer(buffer))
    .catch(error => {
      console.error('Unable to fetch image', error);
      return undefined;
    });
}

export default {
  getAllPosts,
  getPost,
  getImage,
  getContent
};
