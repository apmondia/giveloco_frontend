'use strict';

module.exports = function DashboardCauseSummary() {
	return {
		controller: 'DashboardCauseSummaryCtrl',
		template: require('./dashboard-cause-summary.html'),
		restrict: 'A',
		scope: true
	};
};