'use strict';

module.exports = angular.module('dashboard.cause', [
		require('./sponsors').name,
		require('./summary').name
	])
	.directive('dashboardCauseView', require('./dashboardCauseDirective'))
	.controller('DashboardCauseCtrl', require('./DashboardCauseController'));