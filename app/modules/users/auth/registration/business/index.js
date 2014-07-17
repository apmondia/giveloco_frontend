'use strict';

module.exports = angular.module('users.auth.registration.business', [])
	.directive('usersAuthRegistrationBusiness', function () {
		return {
			controller: 'UsersAuthRegistrationBusinessCtrl',
			template: require('./users-auth-registration-business.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationBusinessCtrl', require('./UsersAuthRegistrationBusinessController'));