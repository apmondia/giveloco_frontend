'use strict';

module.exports = angular.module('dashboard.admin.tab-individuals', [])
	.directive('dashboardAdminTabIndividuals', require('./dashboardAdminTabIndividualsDirective'))
	.controller('DashboardAdminTabIndividualsCtrl', require('./DashboardAdminTabIndividualsController'));