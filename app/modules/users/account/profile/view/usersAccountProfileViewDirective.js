'use strict';

module.exports = function usersAccountProfileViewDirective() {
	return {
		controller: 'UsersAccountProfileViewCtrl',
		template: require('./users-account-profile-view.html'),
		restrict: 'A',
		scope: false
	};
};
