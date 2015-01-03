'use strict';

module.exports = function usersAccountInfoDirective() {
	return {
		controller: 'UsersAccountInfoCtrl',
		template: require('./users-account-info.html'),
		restrict: 'A',
		scope: true
	};
};
