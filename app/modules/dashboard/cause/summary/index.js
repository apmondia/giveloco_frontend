'use strict';

module.exports = angular.module('dashboard.cause.summary', [])
	.directive('dashboardCauseSummary', require('./dashboardCauseSummaryDirective'))
	.controller('DashboardCauseSummaryCtrl', require('./DashboardCauseSummaryController'));