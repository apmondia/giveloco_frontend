'use strict';

module.exports = angular.module('dashboard.tasks', [])
	.directive('dashboardTasks', require('./dashboardTasksDirective'))
	.controller('DashboardTasksCtrl', require('./DashboardTasksController'));