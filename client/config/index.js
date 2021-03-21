import { merge } from 'webpack-merge';

const environmentConfig = require(`./${process.env.ENVIRONMENT || 'development'}.json`);
const commonConfig = require('./common.json');

const config = merge(environmentConfig, commonConfig);

export default config;
