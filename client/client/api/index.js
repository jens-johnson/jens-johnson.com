import { ApiError } from '~/common/errors';
import Config from '~/config';

const { api } = Config;

function configureRequest(config=undefined) {
  return {
    ...api.requests,
    ...config
  };
}

function get(route, config=undefined) {
  return Promise.resolve(config)
    .then(configureRequest)
    .then(requestConfig => fetch(`/api/${route}`, requestConfig))
    .then(res => res.json())
    .catch(error => {
      console.error(error);
      throw new ApiError('Unable to process request', route);
    });
}

export default {
  get
};
