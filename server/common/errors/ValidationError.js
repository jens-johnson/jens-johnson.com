class ValidationError extends Error {
  constructor(message='Request validation failed', errors) {
    super(message);
    this.name = 'Validation Error';
    this.errors = errors.map(({ path, name, argument, message }) => ({ path, name, argument, message }));
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ValidationError;
