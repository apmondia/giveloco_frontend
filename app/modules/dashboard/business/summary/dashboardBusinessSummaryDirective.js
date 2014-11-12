'use strict';

module.exports = function DashboardBusinessSummary() {
	return {
		controller: 'DashboardBusinessSummaryCtrl',
		template: require('./dashboard-business-summary.html'),
		restrict: 'A',
		scope: true
	};
};