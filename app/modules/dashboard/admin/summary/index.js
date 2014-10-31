'use strict';

module.exports = angular.module('dashboard.admin.summary', [])
	.directive('dashboardAdminSummary', require('./dashboardAdminSummaryDirective'))
	.controller('DashboardAdminSummaryCtrl', require('./DashboardAdminSummaryController'));