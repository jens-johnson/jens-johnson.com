const jsonschema = require('jsonschema');

const { ValidationError } = require('../../common/errors');

const SCHEMAS = {
  '/contact/submit#request': {
    id: '/contact/submit#request',
    type: 'object',
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
 * Performs JSON schema validation on an object
 *
 * @param {Object} target
 * @param {string} schema
 * @returns {*}
 */
function validate(target, schema) {
  const { valid, errors } = jsonschema.validate(target, SCHEMAS[schema]);
  if (!valid) {
    throw new ValidationError('Invalid request', {
      errors,
      target,
      schema
    });
  }
  return target;
}

module.exports = validate;
