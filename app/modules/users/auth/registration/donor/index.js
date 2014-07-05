'use strict';

module.exports = angular.module('users.auth.registration.donor', [])
	.directive('usersAuthRegistrationDonor', function () {
		return {
			controller: 'UsersAuthRegistrationCtrl',
			template: require('./users-auth-registration-donor.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationCtrl', require('../UsersAuthRegistrationController'));