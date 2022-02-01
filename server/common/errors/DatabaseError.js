/**
 * Common database error codes
 */
const CODES = {
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  PERSIST_ITEM: 'PERSIST_ITEM',
  CREATE_ITEM: 'CREATE_ITEM',
  UPDATE_ITEM: 'UPDATE_ITEM',
  GET_ITEM: 'GET_ITEM',
  QUERY_ITEM: 'QUERY_ITEM'
};

/**
 * Custom database error type describing errors occurring during MongoDB operations
 *
 * @param {string} message - A readable message describing the error
 * @param {Object} options - Optional error configurations
 * @param {string} options.code - An error code describing the error (an enumeration of common database error codes)
 * @param {string} options.resource - The database resource generating the error (i.e. the name of the Mongoose model)
 * @param {Object} options.error - The native error object that generated the error
 */
class DatabaseError extends Error {
  constructor(message='Database Error', { code=null, resource=undefined, error=undefined }) {
    super(message);
    this.name = 'Database Error';
    this.code = code;
    this.resource = resource;
    this.error = error;
  }
}

module.exports = {
  DatabaseError,
  CODES
};
