/**
 *
 * @param {Object} request
 * @returns {{ first: string, last: string, email: string, message: string }}
 */
function toModel(request) {
  const {
    first,
    last,
    email,
    message
  } = request;
  return {
    first,
    last,
    email,
    message
  };
}

module.exports = {
  toModel
};
