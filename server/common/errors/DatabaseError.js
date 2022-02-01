const CODES = {
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  PERSIST_ITEM: 'PERSIST_ITEM',
  CREATE_ITEM: 'CREATE_ITEM',
  GET_ITEM: 'GET_ITEM'
};

class DatabaseError extends Error {
  constructor(message='Database Error', { code = null, resource = undefined, error = undefined }) {
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
