'use strict';

module.exports = angular.module('users.auth.registration', [
		require('./donor').name,
		require('./organization').name
	])
	.directive('usersAuthRegistration', require('./usersAuthRegistrationDirective'))
	.controller('UsersAuthRegistrationCtrl', require('./UsersAuthRegistrationController'));