import queryString from 'query-string';

function getUpdatedQuery(query, key, value) {
  if (query[key]) {
    if (query[key].indexOf(',') === -1 && query[key] !== value) {
      return { ...query, key: `${query[key]},${value}` };
    }
    else if (query[key].indexOf(',') !== -1 && !query[key].split(',').contains(value)) {
      return { ...query, key: `${query[key]},${value}` };
    }
  }
  return { ...query, key: value };
}

function modifyQueryString(key, value) {
  const updatedQuery = getUpdatedQuery(queryString.parse(location.search), key, value);
  const updatedQueryString = queryString.stringify(updatedQuery);
  window.location = `${window.location.origin}/blog?${updatedQueryString}`;
}

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
  parseQueryString,
  modifyQueryString
};
