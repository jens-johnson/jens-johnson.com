class S3Error extends Error {
  constructor(message='S3 Error', resource=undefined) {
    super(message);
    this.name = 'S3 Error';
    this.resource = resource;
  }
}

module.exports = S3Error;
