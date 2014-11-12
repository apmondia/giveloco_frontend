'use strict';

module.exports = function DashboardBusinessUnusedVouchers() {
	return {
		controller: 'DashboardBusinessUnusedVouchersCtrl',
		template: require('./dashboard-business-unused-vouchers.html'),
		restrict: 'A',
		scope: true
	};
};