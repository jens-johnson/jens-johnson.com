class ApiError extends Error {
  constructor(message, route=undefined, method='GET') {
    super(message);
    this.route = route;
    this.method = method;
  }
}

export default ApiError;
