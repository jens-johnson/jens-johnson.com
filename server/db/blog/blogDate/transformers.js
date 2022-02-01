const { v4: uuidV4 } = require('uuid');

/**
 *
 * @param {Object} model
 * @returns {{ id: string, year:number, count:number }}
 */
function fromModel(model) {
  const {
    '_id': {
      year
    },
    count
  } = model;
  // noinspection JSCheckFunctionSignatures
  return {
    id: uuidV4(),
    year,
    count
  };
}

module.exports = {
  fromModel
};
