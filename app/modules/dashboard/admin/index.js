'use strict';

module.exports = angular.module('dashboard.admin', [])
	.directive('dashboardAdminView', require('./dashboardAdminDirective'))
	.controller('DashboardAdminCtrl', require('./DashboardAdminController'));