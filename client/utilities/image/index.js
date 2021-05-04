import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { get } from '../api';

/**
 * Retrieves an image for a blog post using dynamic imports
 *
 * @param {Object} date
 * @param {string} size (either 'small' or 'large')
 * @param {function} stateSetter
 */
const retrieveBlogImage = async ({ year, month, day }, size, stateSetter) => {
  try {
    const { buffer } = await get(`blog/posts/images/${year}-${month}-${day}_${size}`);
    const image = 'data:image/jpg;base64,' + btoa(String.fromCharCode.apply(null, buffer.data));
    stateSetter(image);
  } catch (err) {
    stateSetter(null);
  }
}

export {
  retrieveBlogImage
};
