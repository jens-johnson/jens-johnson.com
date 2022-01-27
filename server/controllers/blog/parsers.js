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

function getPostRequest(request) {
  const {
    path
  } = request;
  return {
    date: new Date(path.split('/').slice(-1)).toISOString()
  };
}

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
