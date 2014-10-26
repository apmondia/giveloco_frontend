'use strict';

module.exports = function DashboardView() {
	return {
		controller: 'DashboardCtrl',
		template: require('./dashboard-layout.html'),
		restrict: 'A',
		scope: true
	};
};