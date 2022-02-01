const pino = require('pino');

const {
  logging: {
    destination
  }
} = require('../../config');

/**
 * Local logging transport; prettifies JSON logs and sends them to stdout/stderr
 *
 * @type {pino.ThreadStream}
 */
const local = pino.transport({
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
});

/**
 * File logging transport; sends logs to logging file destinations
 *
 * @type {pino.ThreadStream}
 */
const file = pino.transport({
  targets: Object.entries(destination.levels).map(([ level, output ]) => ({
    level,
    options: {
      destination: `${destination.directory}${output}`
    }
  }))
});

module.exports = {
  local,
  file
};
