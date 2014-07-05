'use strict';

module.exports = angular.module('users.auth.registration.org', [])
	.directive('usersAuthRegistrationOrg', function () {
		return {
			controller: 'UsersAuthRegistrationCtrl',
			template: require('./users-auth-registration-org.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationCtrl', require('../UsersAuthRegistrationController'));