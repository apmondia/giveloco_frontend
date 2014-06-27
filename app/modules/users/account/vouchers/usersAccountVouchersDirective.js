'use strict';

module.exports = function usersAccountVouchersDirective() {
	return {
		controller: 'UsersAccountVouchersCtrl',
		template: require('./users-account-vouchers.html'),
		restrict: 'A',
		scope: true
	};
};