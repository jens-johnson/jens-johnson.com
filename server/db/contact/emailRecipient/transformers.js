/**
 *
 * @param {Object} request
 * @returns {{first:string,last:string,email:string}}
 */
function toModel(request) {
  const {
    first,
    last,
    email
  } = request;
  return {
    first,
    last,
    email
  };
}

/**
 *
 * @param {Object} model
 * @returns {{id:string, first:string, last:string, email:string}}
 */
function fromModel(model) {
  const {
    _id,
    first,
    last,
    email
  } = model;
  return {
    id: _id,
    first,
    last,
    email
  };
}

module.exports = {
  toModel,
  fromModel
};
