'use strict';

module.exports = function usersAccountBillingInfoDirective() {
	return {
		controller: 'UsersAccountBillingInfoCtrl',
		template: require('./users-account-billing-info.html'),
		restrict: 'A',
		scope: true
	};
};