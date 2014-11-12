'use strict';

module.exports = angular.module('dashboard.cause.sponsors', [])
	.directive('dashboardCauseSponsors', require('./dashboardCauseSponsorsDirective'))
	.controller('DashboardCauseSponsorsCtrl', require('./DashboardCauseSponsorsController'));