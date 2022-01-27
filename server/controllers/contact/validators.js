const jsonschema = require('jsonschema');
const { ValidationError } = require('../../common/errors');

const schemas = {
  '/contact/submit/request': {
    id: '/contact/submit/request',
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

function validate(target, schema) {
  const { valid, errors } = jsonschema.validate(target, schemas[schema]);
  if (!valid) {
    throw new ValidationError('Invalid request', errors);
  }
  return target;
}

module.exports = validate;
