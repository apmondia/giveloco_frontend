'use strict';

module.exports = function usersAccountLayoutDirective() {
	return {
		controller: 'UsersAccountLayoutCtrl',
		template: require('./users-account-layout.html'),
		restrict: 'A',
		scope: true
	};
};