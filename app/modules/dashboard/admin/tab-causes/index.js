'use strict';

module.exports = angular.module('dashboard.admin.tab-causes', [])
	.directive('dashboardAdminTabCauses', require('./dashboardAdminTabCausesDirective'))
	.controller('DashboardAdminTabCausesCtrl', require('./DashboardAdminTabCausesController'));