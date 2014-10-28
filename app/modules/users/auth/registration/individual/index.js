'use strict';

module.exports = angular.module('users.auth.registration.individual', [])
	.directive('usersAuthRegistrationIndividual', function () {
		return {
			controller: 'UsersAuthRegistrationIndividualCtrl',
			template: require('./users-auth-registration-individual.html'),
			restrict: 'EA',
			replace: true
		};
	})
	.controller('UsersAuthRegistrationIndividualCtrl', require('./UsersAuthRegistrationIndividualController'));