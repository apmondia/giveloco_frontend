'use strict';

module.exports = function DashboardAdminsumary() {
	return {
		controller: 'DashboardAdminSummaryCtrl',
		template: require('./dashboard-admin-summary.html'),
		restrict: 'A',
		scope: true
	};
};