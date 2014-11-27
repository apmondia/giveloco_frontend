'use strict';

module.exports = angular.module('dashboard.admin', [
		require('./modals').name,
		require('./summary').name,
		require('./tab-businesses').name,
		require('./tab-causes').name,
		require('./tab-individuals').name,
		require('./tab-sponsorships').name
	])
	.directive('dashboardAdminView', require('./dashboardAdminDirective'))
	.controller('DashboardAdminCtrl', require('./DashboardAdminController'));
