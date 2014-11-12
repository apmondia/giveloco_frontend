'use strict';

module.exports = function DashboardUserVouchers() {
	return {
		controller: 'DashboardUserVouchersCtrl',
		template: require('./dashboard-user-vouchers.html'),
		restrict: 'A',
		scope: true
	};
};