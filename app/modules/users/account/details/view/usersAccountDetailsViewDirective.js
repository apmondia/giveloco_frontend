'use strict';

module.exports = function usersAccountDetailsViewDirective() {
	return {
		controller: 'UsersAccountDetailsViewCtrl',
		template: require('./users-account-details-view.html'),
		restrict: 'A',
		scope: false
	};
};