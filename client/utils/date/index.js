import moment from 'moment';

/**
 * Zero-pads a date string in the format of YYYY-MM-DD
 *
 * @param {Object} date
 * @return {Object}
 */
function pad({ year, month, day }) {
  return {
    year,
    month: `${String(month).padStart(2, '0')}`,
    day: `${String(day).padStart(2, '0')}`
  };
}

/**
 * Normalizes a date object using moment
 *
 * @param {Date} date
 * @return {{month: number, year: number, day: number}}
 */
function normalize(date) {
  const parsed = new Date(date);
  const day = parsed.getDate();
  const month = parsed.getMonth() + 1;
  const year = parsed.getFullYear();
  return {
    year,
    month,
    day
  };
}

export {
  pad,
  normalize
};
