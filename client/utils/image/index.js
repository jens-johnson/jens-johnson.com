/**
 * Generates an image URL using file buffer
 *
 * @param {Object} buffer
 * @returns {string}
 */
function generateImageUrlFromBuffer(buffer) {
  return `data:image/jpg;base64,${btoa(String.fromCharCode.apply(null, buffer.data))}`;
}

export {
  generateImageUrlFromBuffer
};
