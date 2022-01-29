class DatabaseError extends Error {
  constructor(message='Database Error', resource=undefined) {
    super(message);
    this.name = 'Database Error';
    this.resource = resource;
  }
}

module.exports = DatabaseError;
