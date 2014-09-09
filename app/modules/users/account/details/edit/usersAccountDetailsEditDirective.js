'use strict';

module.exports = function usersAccountDetailsEditDirective() {
	return {
		controller: 'UsersAccountDetailsEditCtrl',
		template: require('./users-account-details-edit.html'),
		restrict: 'A',
		scope: false
	};
};