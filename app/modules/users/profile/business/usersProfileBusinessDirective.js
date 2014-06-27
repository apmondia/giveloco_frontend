'use strict';

module.exports = function usersProfileBusinessDirective() {
	return {
		controller: 'UsersProfileBusinessCtrl',
		template: require('./users-profile-business.html'),
		restrict: 'A',
		scope: true
	};
};