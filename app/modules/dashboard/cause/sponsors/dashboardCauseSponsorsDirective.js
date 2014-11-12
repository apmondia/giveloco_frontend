'use strict';

module.exports = function DashboardCauseSponsors() {
	return {
		controller: 'DashboardCauseSponsorsCtrl',
		template: require('./dashboard-cause-sponsors.html'),
		restrict: 'A',
		scope: true
	};
};