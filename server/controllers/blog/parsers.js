/**
 *
 * @param {Object} request
 * @returns {{dates: string|string[], categories: string|string[]}}
 */
function getAllPostsRequest(request) {
  const {
    query: {
      dates,
      categories
    }
  } = request;
  return {
    dates,
    categories
  };
}

/**
 *
 * @param {Object} request
 * @returns {{date: string}}
 */
function getPostRequest(request) {
  const {
    path
  } = request;
  return {
    date: new Date(path.split('/').slice(-1)).toISOString()
  };
}

/**
 *
 * @param {Object} request
 * @returns {{size: string, month: string, year: string, day: string}}
 */
function getImageRequest(request) {
  const {
    path
  } = request;
  const [ date, size ] = path.split('/').splice(-1).split('_');
  const [ year, month, day ] = date.split('-');
  return {
    size,
    year,
    month,
    day
  };
}

/**
 *
 * @param {Object} request
 * @returns {{month: string, year: string, day: string}}
 */
function getContentRequest(request) {
  const {
    path
  } = request;
  const [ year, month, day ] = path.split('/').splice(-1).split('-');
  return {
    year,
    month,
    day
  };
}

module.exports = {
  getAllPostsRequest,
  getPostRequest,
  getImageRequest,
  getContentRequest
};
