const aws = require('aws-sdk');
const _eval = require('eval');
const { getLogger } = require('../logging');
const {
  blog: {
    imageBucket: {
      defaultImagePrefix
    }
  }
} = require('../config');

/**
 * @class s3Client
 * @property {string} bucket
 * @property s3
 * @property logger
 */
class s3Client {

  constructor(bucketName) {
    this.bucket = bucketName;
    this.s3 = this.instantiateS3Connection();
    const { logger } = getLogger('s3Client');
    this.logger = logger;
  }

  /**
   * Instatiates connection to s3
   *
   * @return {S3}
   */
  instantiateS3Connection() {
    const options = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    };
    const connection = new aws.S3(options);
    return connection;
  }

  /**
   * Retrieves an image from s3 using a given key
   *
   * @param {Object} date
   * @return {Promise<Buffer>}
   */
  retrieveBlogImage(date, size) {
    const { year, month, day } = date;
    const params = {
      Bucket: this.bucket,
      Key: `${year}/${month}/${day}/${defaultImagePrefix}_${size}.jpg`
    };
    return new Promise(async (resolve, reject) => {
      await this.s3.getObject(params, (error, data) => {
        if (error) {
          this.logger.error({
            msg: 'Error retrieving image from s3',
            Key: params.Key,
            error
          });
          reject(error);
        } else {
          this.logger.error({
            msg: 'Successfully retrieved image from s3',
            Key: params.Key,
            error
          });
          const { Body: buffer } = data;
          resolve(buffer);
        }
      });
    })
  }

  /**
   * @deprecated
   * Retrieves a content module from s3 using a given key
   *
   * @param {String} key
   * @return {Promise<*>}
   */
  retrieveContentModule(key) {
    const params = {
      Bucket: this.bucket,
      Delimiter: key
    };
    return new Promise((resolve, reject) => {
      this.s3.listObjects(params, async (error, data) => {
        if (error) {
          this.logger.error({
            msg: 'Error retrieving content module from s3',
            folder: key,
            error
          });
          reject(error);
        } else {
          this.logger.info({
            msg: 'Successfully retrieved folder from s3',
            folder: key
          });
          const { Contents } = data;
          const { Key } = Contents.filter(({ Key }) => Key.includes('index.js'))[0];
          await this.s3.getObject({
            Bucket: this.bucket,
            Key
          }, (error, data) => {
            if (error) {
              this.logger.error({
                msg: 'Error retrieving module from s3',
                folder: key,
                Key,
                error
              });
              reject(error);
            } else {
              const { Body } = data;
              const result = _eval(Body.toString(), true);
              resolve(result);
            }
          });
        }
      })
    });
  }
}

module.exports = {
  s3Client
};
