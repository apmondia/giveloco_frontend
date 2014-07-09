'use strict';

module.exports = angular.module('users.auth.registration.org', [])
	.directive('usersAuthRegistrationOrg', function () {
		return {
			controller: 'UsersAuthRegistrationOrgCtrl',
			template: require('./users-auth-registration-org.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationOrgCtrl', require('./UsersAuthRegistrationOrgController'));