const { v4: uuidV4 } = require('uuid');

/**
 *
 * @param {Object} request
 * @returns {Object}
 */
function toFilter(request) {
  const {
    dates,
    categories
  } = request;
  let filter = {};
  if (dates) {
    let datesFilter = Array.isArray(dates) ? dates : [ dates ];
    datesFilter = datesFilter.map(date => parseInt(date, 10));
    filter['$expr'] = {
      $in: [{ $year: "$date" }, datesFilter]
    };
  }
  if (categories) {
    filter['tags'] = Array.isArray(categories) ? { $in: categories } : categories;
  }
  return filter;
}

/**
 *
 * @param {Object} model
 * @returns {{name:string, count:number}}
 */
function fromModel(model) {
  const {
    title,
    date,
    description,
    authors,
    tags
  } = model;
  return {
    id: uuidV4(),
    title,
    date,
    description,
    authors,
    tags
  };
}

module.exports = {
  fromModel,
  toFilter
};
