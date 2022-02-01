const { S3Error, S3_ERROR_CODES } = require('../../../common/errors');
const { getLogger } = require('../../../common/logging');
const { s3 } = require('../../../common/aws');

const logger = getLogger('aws-S3-service');
const s3Client = s3.buildS3Client();

/**
 * Retrieves a file from S3 and returns its buffer representation
 *
 * @param {string} bucket
 * @param {key} key
 * @returns {Promise}
 */
function getFile({ bucket, key }) {
  const params = {
    Bucket: bucket,
    Key: key
  };
  // noinspection JSCheckFunctionSignatures
  return s3Client.getObject(params)
    .promise()
    .then(result => {
      logger.debug({
        message: 'Retrieved file from S3',
        event: 'getFile',
        success: true,
        params,
        result
      });
      return result.Body;
    })
    .catch(error => {
      logger.error({
        message: 'Failed to retrieve file from S3',
        event: 'getFile',
        success: false,
        params,
        error
      });
      const code = error.code === 'NoSuchKey' ? S3_ERROR_CODES.OBJECT_NOT_FOUND : undefined;
      throw new S3Error('Error retrieving file from S3', {
        code,
        resource: {
          bucket,
          key
        },
        error
      });
    });
}

module.exports = {
  getFile
};
