import moment from 'moment';

/**
 * Zero-pads a date string in the format of YYYY-MM-DD
 *
 * @param {Object} date
 * @return {string}
 */
const padDate = ({ year, month, day }) => {
  return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
}

/**
 * Normalizes a date object using moment
 * @param {Date} date
 * @return {{month: number, year: number, day: number}}
 */
const normalize = (date) => {
  const { years: year, months, date: day } = moment(date).toObject();
  return {
    year,
    month: months + 1,
    day
  };
}

export {
  padDate,
  normalize
};
