'use strict';

module.exports = function DashboardAdminSummary() {
	return {
		controller: 'DashboardAdminSummaryCtrl',
		template: require('./dashboard-admin-summary.html'),
		restrict: 'A',
		scope: true
	};
};