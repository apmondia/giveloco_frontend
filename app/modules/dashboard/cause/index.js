'use strict';

module.exports = angular.module('dashboard.cause', [])
	.directive('dashboardCauseView', require('./dashboardCauseDirective'))
	.controller('DashboardCauseCtrl', require('./DashboardCauseController'));