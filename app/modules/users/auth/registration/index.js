'use strict';

module.exports = angular.module('users.auth.registration', [
		require('./business').name,
		require('./cause').name,
		require('./donor').name
	])
	.controller('UsersAuthRegistrationCtrl', require('./UsersAuthRegistrationController'));