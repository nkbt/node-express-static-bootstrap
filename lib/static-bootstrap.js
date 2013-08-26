'use strict';

/**
 * @module static-bootstrap
 */
var path = require('path');
var bootstrapDefault = 'bootstrap.html';

/**
 * @param {String} staticRoot
 * @param {String} bootstrapFile
 * @param {String} jsonParam
 */
module.exports = function (staticRoot, bootstrapFile, jsonParam) {

	/**
	 * @param {ExpressServerRequest} req
	 * @param {ExpressServerResponse} res
	 * @param {Function} next
	 */
	return function (req, res, next) {
		if (req.query && req.query[jsonParam || 'json']) {
			next(null);
		} else {
			res.sendfile(path.join(staticRoot, bootstrapFile || bootstrapDefault), next);
		}
	};
};