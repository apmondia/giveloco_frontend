'use strict';

module.exports = angular.module('dashboard.user.vouchers', [])
	.directive('dashboardUserVouchers', require('./dashboardUserVouchersDirective'))
	.controller('DashboardUserVouchersCtrl', require('./DashboardUserVouchersController'));