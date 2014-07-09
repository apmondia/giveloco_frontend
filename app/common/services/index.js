'use strict';

// Services use camelCase for their names like Directives
// Factories have first letter capitalized like Controllers

module.exports = angular.module('common.services', [])
	.service('apiConfig', require('./ApiConfig.js'))
	.factory('Auth', require('./Auth.js'));

// NOTE: Services and Factories MUST be injected with a resource or another service
// in order to be injected into other modules.