'use strict';

module.exports = function DashboardCauseView() {
	return {
		controller: 'DashboardCauseCtrl',
		template: require('./dashboard-cause.html'),
		restrict: 'A',
		scope: true
	};
};