const { v4: uuidV4 } = require('uuid');

/**
 *
 * @param {Object} model
 * @returns {{name:string, count:number}}
 */
function fromModel(model) {
  const {
    '_id': name,
    count
  } = model;
  return {
    id: uuidV4(),
    name,
    count
  };
}

module.exports = {
  fromModel
};
