const path = require('path');
const nconf = require('nconf');
const nconfYaml = require('nconf-yaml');

nconf.formats.yaml = nconfYaml;
const environment = process.env.ENVIRONMENT || 'development';

nconf.file('common', { file: path.resolve(__dirname, './common.yml'), format: nconf.formats.yaml });
nconf.file('environment', { file: path.resolve(__dirname, `./${environment}.yml`), format: nconf.formats.yaml });

const config = nconf.get();

module.exports = config;
