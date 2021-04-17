import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Config from '~/config';

const DEFAULT_HEADERS = {
  'content-type': 'application/json'
};

/**
 * Posts a request over the API.
 *
 * @param {string} route
 * @param {Object} body
 * @return {Promise<Response | void>}
 */
const post = (route, body) => {
  const {
    api: {
      headers
    }
  } = Config;
  return Promise.resolve(body)
    .then(body => fetch(`/api/${route}`, {
      method: 'POST',
      headers: headers || DEFAULT_HEADERS,
      body: JSON.stringify(body)
    }))
    .catch(err => {
      throw new Error(`Error submitting API data: ${err.code}`)
    });
}

/**
 * Submits a get request over the API.
 *
 * @param {string} route
 * @return {Promise<Response | void>}
 */
const get = (route) => {
  const {
    api: {
      headers
    }
  } = Config;
  return Promise.resolve({})
    .then(() => fetch(`/api/${route}`, {
      headers: headers || DEFAULT_HEADERS
    }))
    .then(res => res.json())
    .catch(err => {
      throw new Error(`Error submitting API data: ${err}`)
    });
}

export {
  post,
  get
};
