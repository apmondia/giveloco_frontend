'use strict';

module.exports = angular.module('dashboard.admin', [
		require('./summary').name
	])
	.directive('dashboardAdminView', require('./dashboardAdminDirective'))
	.controller('DashboardAdminCtrl', require('./DashboardAdminController'));