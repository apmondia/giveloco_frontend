'use strict';

module.exports = function usersAccountProfileDirective() {
	return {
		controller: 'UsersAccountProfileCtrl',
		template: require('./users-account-profile.html'),
		restrict: 'A',
		scope: true
	};
};
