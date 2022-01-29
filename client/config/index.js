import { merge } from 'webpack-merge';

const environment = require(`./${process.env.ENVIRONMENT || 'development'}.json`);
const common = require('./common.json');

const config = merge(environment, common);

export default config;
