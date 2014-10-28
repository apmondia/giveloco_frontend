'use strict';

module.exports = angular.module('users.auth.registration', [
		require('./business').name,
		require('./cause').name,
		require('./individual').name
	])
	.controller('UsersAuthRegistrationCtrl', require('./UsersAuthRegistrationController'));