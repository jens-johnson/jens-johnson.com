const aws = require('aws-sdk');

/**
 * Returns an AWS S3 client
 *
 * @returns {aws.S3}
 */
function buildS3Client() {
  return new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });
}

module.exports = {
  buildS3Client
};
