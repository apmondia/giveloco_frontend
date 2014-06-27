'use strict';

module.exports = function usersAuthRegistrationDirective() {
	return {
		controller: 'UsersAuthRegistrationCtrl',
		template: require('./users-auth-registration.html'),
		restrict: 'A',
		scope: true
	};
};