import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Config from '~/config';

/**
 * Retrieves an image for a blog post using dynamic imports
 *
 * @param {Object} date
 * @param {string} size (either 'small' or 'large')
 * @param {function} stateSetter
 */
const retrieveBlogImage = async ({ year, month, day }, size, stateSetter) => {
  const {
    blog: {
      imageRoot
    }
  } = Config;
  try {
    const { default: image } = await import(`~/${imageRoot}/${year}/${month}/${month}-${day}-${year}_${size}.png`);
    stateSetter(image);
  } catch (err) {
    stateSetter(null);
  }
}

export {
  retrieveBlogImage
};
