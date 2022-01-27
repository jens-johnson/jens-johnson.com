const aws = require('aws-sdk');

/**
 * Returns an AWS S3 client
 *
 * @returns {aws.S3}
 */
function buildS3Client() {
  return new aws.S3();
}

module.exports = {
  buildS3Client
};
