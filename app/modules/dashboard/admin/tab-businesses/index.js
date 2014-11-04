'use strict';

module.exports = angular.module('dashboard.admin.tab-businesses', [])
	.directive('dashboardAdminTabBusinesses', require('./dashboardAdminTabBusinessesDirective'))
	.controller('DashboardAdminTabBusinessesCtrl', require('./DashboardAdminTabBusinessesController'));