'use strict';

module.exports = angular.module('dashboard', 
	[
		require('./admin').name,
		require('./business').name,
		require('./cause').name,
		require('./tasks').name,
		require('./user').name
	])
	.config(require('./dashboardConfig'))
	.directive('dashboardView', require('./dashboardDirective'))
	.controller('DashboardCtrl', require('./DashboardController'));