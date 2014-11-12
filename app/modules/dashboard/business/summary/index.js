'use strict';

module.exports = angular.module('dashboard.business.summary', [])
	.directive('dashboardBusinessSummary', require('./dashboardBusinessSummaryDirective'))
	.controller('DashboardBusinessSummaryCtrl', require('./DashboardBusinessSummaryController'));