class S3Error extends Error {
  constructor(message='S3 Error', resource=undefined, code=undefined) {
    super(message);
    this.name = 'S3 Error';
    this.resource = resource;
    this.code = code;
  }
}

module.exports = S3Error;
