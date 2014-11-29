'use strict';

module.exports = function DashboardTasks() {
	return {
		controller: 'DashboardTasksCtrl',
		template: require('./dashboard-tasks.html'),
		restrict: 'A',
		scope: true
	};
};