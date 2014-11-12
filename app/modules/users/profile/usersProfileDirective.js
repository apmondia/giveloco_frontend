'use strict';

module.exports = function usersProfileDirective() {
	return {
		controller: 'UsersProfileCtrl',
		template: require('./users-profile.html'),
		restrict: 'A',
		transclude: true,
		scope: true
	};
};