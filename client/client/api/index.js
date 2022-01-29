import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { ApiError } from '~/common/errors';
import Config from '~/config';

const { api } = Config;

/**
 *
 * @param {Object} config
 * @returns {Object}
 */
function configureRequest(config=undefined) {
  return {
    ...api.requests,
    ...config
  };
}

/**
 *
 * @param {Object} config
 * @returns {Object}
 */
function configurePostRequest(config) {
  return {
    ...config,
    method: 'POST',
    body: JSON.stringify(config.body)
  }
}

/**
 * Invokes the fetch API to make GET requests against the API back-end
 *
 * @param {string} route
 * @param {Object} config
 * @returns {Promise<Response>}
 */
function get(route, config=undefined) {
  return Promise.resolve(config)
    .then(configureRequest)
    .then(requestConfig => fetch(`/api/${route}`, requestConfig))
    .catch(error => {
      console.error(error);
      throw new ApiError('Unable to process request', route);
    });
}

/**
 * Invokes the fetch API to make POST requests against the API back-end
 *
 * @param {string} route
 * @param {Object} config
 * @returns {Promise<Response>}
 */
function post(route, request, config=undefined) {
  return Promise.resolve({ ...config, ...request })
    .then(configureRequest)
    .then(configurePostRequest)
    .then(requestConfig => fetch(`/api/${route}`, requestConfig))
    .catch(error => {
      console.error(error);
      throw new ApiError('Unable to process request', route);
    });
}

export default {
  get,
  post
};
