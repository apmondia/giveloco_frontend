'use strict';

module.exports = function usersAccountHistoryDirective() {
	return {
		controller: 'UsersAccountHistoryCtrl',
		template: require('./users-account-history.html'),
		restrict: 'A',
		scope: true
	};
};