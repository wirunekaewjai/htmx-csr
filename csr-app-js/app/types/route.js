export { }

/**
 * @typedef Route
 * @property {string} method
 * @property {string} path
 * @property {RouteHandler} handler
 */

/**
 * @typedef {function(Request): Promise<string> | string} RouteHandler
 * @param {Request} request
 * @returns {Promise<string> | string}
 */

/**
 * @typedef Request
 * @property {string} path
 * @property {Record<string, string>} params
 * @property {Record<string, string>} query
 */