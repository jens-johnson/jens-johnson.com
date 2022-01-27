function normalizePort(value) {
  const port = parseInt(value, 10);
  return isNaN(port) ? value : port >= 0 ? port : false;
}

module.exports = {
  normalizePort
};
