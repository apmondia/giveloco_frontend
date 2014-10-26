'use strict';

module.exports = angular.module('dashboard.business', [])
	.directive('dashboardBusinessView', require('./dashboardBusinessDirective'))
	.controller('DashboardBusinessCtrl', require('./DashboardBusinessController'));