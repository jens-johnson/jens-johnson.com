const path = require('path');
const nconf = require('nconf');

nconf.formats.yaml = require('nconf-yaml');

nconf.file('common', { file: path.resolve(__dirname, './common.yml'), format: nconf.formats.yaml });
nconf.file('environment', { file: path.resolve(__dirname, `./${process.env.ENVIRONMENT || 'development'}.yml`), format: nconf.formats.yaml });

const config = nconf.get();

module.exports = config;
