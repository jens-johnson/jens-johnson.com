import queryString from 'query-string';

/**
 * Generates an updated query mapping, conditionally adding a new key/value pair, or updating an existing key with a value
 *
 * @param {Object} query
 * @param {string} key
 * @param {*} value
 * @returns {Object}
 */
function getUpdatedQuery(query, key, value) {
  if (query[key]) {
    if (query[key].indexOf(',') === -1 && query[key] !== value) {
      return { ...query, key: `${query[key]},${value}` };
    }
    else if (query[key].indexOf(',') !== -1 && !query[key].split(',').contains(value)) {
      return { ...query, key: `${query[key]},${value}` };
    }
  }
  return { ...query, [key]: value };
}

/**
 * Updates the current browser query string with a key/value pair, creating a new key mapping if it doesn't exist
 *
 * @param {string} key
 * @param {*} value
 */
function modifyQueryString(key, value) {
  const updatedQuery = getUpdatedQuery(queryString.parse(location.search), key, value);
  const updatedQueryString = queryString.stringify(updatedQuery);
  window.location = `${window.location.origin}/blog?${updatedQueryString}`;
}

/**
 * Parses the browser's query string and returns a normalized query string
 *
 * @returns {string}
 */
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
