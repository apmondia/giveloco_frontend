'use strict';

module.exports = function usersAccountSponsorsDirective() {
	return {
		controller: 'UsersAccountSponsorsCtrl',
		template: require('./users-account-sponsors.html'),
		restrict: 'A',
		scope: true
	};
};