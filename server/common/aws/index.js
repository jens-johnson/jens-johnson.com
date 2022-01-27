const aws = require('aws-sdk');
const s3 = require('./s3');

aws.config.update({
  region: process.env.AWS_REGION,
  credentials: new aws.CognitoIdentityCredentials({
    IdentityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID
  })
});

module.exports = {
  s3
};
