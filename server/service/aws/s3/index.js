const { s3 } = require('../../../common/aws');
const { S3Error } = require('../../../common/errors');
const { getLogger } = require('../../../common/logging');

const logger = getLogger('S3-service');
const s3Client = s3.buildS3Client();

function getFile({ bucket, key }) {
  const params = {
    Bucket: bucket,
    Key: key
  };
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
      throw new S3Error('Error retrieving file from S3', { bucket, key });
    });
}

export default {
  getFile
};
