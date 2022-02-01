const {
  logging: {
    destination
  }
} = require('../../config');

/**
 * Local logging transport; prettifies JSON logs and sends them to stdout/stderr
 */
const local = {
  targets: [
    {
      level: 'info',
      target: 'pino-pretty',
      options: {
        destination: 1
      }
    },
    {
      level: 'error',
      target: 'pino-pretty',
      options: {
        destination: 2
      }
    }
  ]
};

/**
 * File logging transport; sends logs to logging file destinations
 */
const file = {
  targets: Object.entries(destination.levels).map(([ level, output ]) => ({
    level,
    target: 'pino/file',
    options: {
      destination: `${destination.directory}${output}`
    }
  }))
};

module.exports = {
  local,
  file
};
