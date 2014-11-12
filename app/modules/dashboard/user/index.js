'use strict';

module.exports = angular.module('dashboard.user', [
		require('./vouchers').name
	])
	.directive('dashboardUserView', require('./dashboardUserDirective'))
	.controller('DashboardUserCtrl', require('./DashboardUserController'));