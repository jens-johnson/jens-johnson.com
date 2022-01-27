class ValidationError extends Error {
  constructor(message='Request validation failed', errors) {
    super(message);
    this.name = 'Validation Error';
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ValidationError;
