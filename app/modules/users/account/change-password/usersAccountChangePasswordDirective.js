'use strict';

module.exports = function usersAccountChangePasswordDirective() {
	return {
		controller: 'UsersAccountChangePasswordCtrl',
		template: require('./users-account-change-password.html'),
		restrict: 'A',
		scope: true
	};
};