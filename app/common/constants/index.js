'use strict';

module.exports = angular.module('common.constants', [])
	.constant('AUTH_EVENTS', require('./AUTH_EVENTS.js'))
	.constant('ENV', require('./ENV.js'))
	.constant('SPONSORSHIP', require('./SPONSORSHIP.js'))
	.constant('TRANSACTION_EVENTS', require('./TRANSACTION_EVENTS.js'))
	.constant('USER_EVENTS', require('./USER_EVENTS.js'))
	.constant('USER_ROLES', require('./USER_ROLES.js'));