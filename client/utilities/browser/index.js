import queryString from 'query-string';

/**
 * Utility function to modify the current query string at the window, updating a given key with a value, or placing a new key,value into the string. i.e.:
 *
 *    ?foo=bar --> ?foo=bar,baz
 *    ?query=null --> ?query=null&foo=baz
 *
 * @param {string} key - Query param key
 * @param {string} value - Query param value
 */
const modifyQueryString = (key, value) => {
  const query = queryString.parse(location.search);
  let keyField = query[key];
  if (keyField) {
    if (keyField.indexOf(',') == -1) {
      keyField += ',' + value
    } else {
      let keysArr = keyField.split(',');
      keysArr.push(value);
      keyField = keysArr.join(',');
    }
    query[key] = keyField;
  } else {
    query[key] = value;
  }
  window.location.search = queryString.stringify(query);
}

/**
 * Utility function to extract the value of the 'date' and 'category' values in the current window query string and return a query string containing only those keys and their values.
 *
 * @return {string}
 **/
const parseQueryString = () => {
  const query = queryString.parse(location.search);
  let categories = [];
  let dates = [];
  if (query.category) {
    categories = query.category.indexOf(',') != -1 ? query.category.split(',') : [ query.category ];
  } if (query.date) {
    dates = query.date.indexOf(',') != -1 ? query.date.split(',') : [ query.date ];
  }
  return queryString.stringify({
    dates,
    categories
  });
}

export {
  modifyQueryString,
  parseQueryString
};
