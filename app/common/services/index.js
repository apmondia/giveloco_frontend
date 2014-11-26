'use strict';

// Services use camelCase for their names like Directives
// Factories have first letter capitalized like Controllers

module.exports = angular.module('common.services', [])
	.service('alertService', require('./alertService.js'))
	.service('apiConfig', require('./apiConfig.js'))
	.factory('Auth', require('./Auth.js'))
	.factory('AuthInterceptor', require('./AuthInterceptor.js'))
	.service('formValidation', require('./formValidation.js'))
	.factory('DashService', require('./DashboardService.js'))
	.service('regions', require('./regions.js'))
	.factory('SponsorService', require('./SponsorshipService.js'))
	.factory('TransactionService', require('./TransactionService.js'));