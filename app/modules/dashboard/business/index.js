'use strict';

module.exports = angular.module('dashboard.business', [
		require('./sponsorships').name,
		require('./summary').name,
		require('./unused-vouchers').name
	])
	.directive('dashboardBusinessView', require('./dashboardBusinessDirective'))
	.controller('DashboardBusinessCtrl', require('./DashboardBusinessController'));