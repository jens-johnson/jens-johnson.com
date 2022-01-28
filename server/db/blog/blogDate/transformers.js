const { v4: uuidV4 } = require('uuid');

/**
 *
 * @param {Object} model
 * @returns {{name:string, count:number}}
 */
function fromModel(model) {
  const {
    '_id': {
      year
    },
    count
  } = model;
  return {
    id: uuidV4(),
    year,
    count
  };
}

module.exports = {
  fromModel
};
