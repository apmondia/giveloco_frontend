'use strict';

module.exports = angular.module('dashboard.user', [])
	.directive('dashboardUserView', require('./dashboardUserDirective'))
	.controller('DashboardUserCtrl', require('./DashboardUserController'));