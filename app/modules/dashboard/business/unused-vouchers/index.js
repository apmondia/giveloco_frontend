'use strict';

module.exports = angular.module('dashboard.business.unused-vouchers', [])
	.directive('dashboardBusinessUnusedVouchers', require('./dashboardBusinessUnusedVouchersDirective'))
	.controller('DashboardBusinessUnusedVouchersCtrl', require('./DashboardBusinessUnusedVouchersController'));