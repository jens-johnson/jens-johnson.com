const validators = require('./validators');

/**
 * Normalizes a port value to a named pipe, integer, or boolean
 * @copyright Mike Coleman (https://github.com/mikegcoleman/todo/blob/710a68bea2497be4f2d8604704453ca955830802/bin/www#L39-L53)
 *
 * @param {*} value
 * @return {*|number|boolean}
 */
function normalizePort(value) {
    const port = parseInt(value, 10);
    return isNaN(port) ? value : port >= 0 ? port : false;
}

module.exports = {
    normalizePort,
    validators
};
