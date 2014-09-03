'use strict';

module.exports = function usersAccountDetailsDirective() {
	return {
		controller: 'UsersAccountDetailsCtrl',
		template: require('./users-account-details.html'),
		restrict: 'A',
		scope: true
	};
};