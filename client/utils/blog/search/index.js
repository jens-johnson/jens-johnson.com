import queryString from 'query-string';

function parseQueryString() {
  const { category, date } = queryString.parse(location.search);
  const categories = category
    ? category.indexOf(',') !== -1
      ? category.split(',')
      : [ category ]
    : [];
  const dates = date
    ? date.indexOf(',') !== -1
      ? date.split(',')
      : [ date ]
    : [];
  return queryString.stringify({
    dates,
    categories
  });
}

export {
  parseQueryString
};
