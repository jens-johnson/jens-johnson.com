const jsonschema = require('jsonschema');
const { getLogger } = require('../logging');

const { logger } = getLogger('validation');

const SCHEMAS = {
  CONTACT_REQUEST: {
    id: "/ContactRequest",
    type: "object",
    properties: {
      first: {
        type: "string",
        maxLength: 64
      },
      last: {
        type: "string",
        maxLength: 64
      },
      email: {
        type: "string",
        format: "email",
        maxLength: 256
      },
      emailListOptIn: {
        type: "boolean",
        default: false
      },
      message: {
        type: "string",
        maxLength: 2048
      }
    }
  }
};

/**
 * Validates a target object using JSON schemas
 *
 * @param {Object} target
 * @param {Object} schema
 * @param {string} name
 * @return {Object}
 */
const validate = (target, schema, name) => {
  const {
    valid,
    errors
  } = jsonschema.validate(target, schema);
  if (!valid) {
    logger.error('schema validation failed', {
      target: name,
      errors
    });
    throw new Error('Invalid');
  } else {
    logger.info('schema validation succeeded', {
      target: name
    });
    return target;
  }
}

module.exports = {
  SCHEMAS,
  validate
};
