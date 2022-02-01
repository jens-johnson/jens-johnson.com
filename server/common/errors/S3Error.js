/**
 * Common S3 error codes
 */
const CODES = {
  OBJECT_NOT_FOUND: 'OBJECT_NOT_FOUND'
};

/**
 * Custom S3 error type describing errors occurring during S3 operations
 *
 * @param {string} message - A readable message describing the error
 * @param {Object} options - Optional error configurations
 * @param {string} options.code - An error code describing the error (an enumeration of common S3 error codes)
 * @param {Object} options.resource - The resource generating the error
 * @param {string} options.resource.bucket - The name of the S3 bucket of the resource
 * @param {string} options.resource.key - The S3 bucket key of the resource
 */
class S3Error extends Error {
  constructor(message='S3 Error', { resource=undefined, code=undefined, error=undefined }) {
    super(message);
    this.name = 'S3 Error';
    this.resource = resource;
    this.code = code;
    this.error = error;
  }
}

module.exports = {
  S3Error,
  CODES
};
