'use strict';

module.exports = angular.module('users.auth.registration.donor', [])
	.directive('usersAuthRegistrationDonor', function () {
		return {
			controller: 'UsersAuthRegistrationDonorCtrl',
			template: require('./users-auth-registration-donor.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationDonorCtrl', require('./UsersAuthRegistrationDonorController'));