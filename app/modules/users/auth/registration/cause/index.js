'use strict';

module.exports = angular.module('users.auth.registration.cause', [])
	.directive('usersAuthRegistrationCause', function () {
		return {
			controller: 'UsersAuthRegistrationCauseCtrl',
			template: require('./users-auth-registration-cause.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationCauseCtrl', require('./UsersAuthRegistrationCauseController'));