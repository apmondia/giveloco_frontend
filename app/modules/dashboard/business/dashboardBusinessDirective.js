'use strict';

module.exports = function DashboardBusinessView() {
	return {
		controller: 'DashboardBusinessCtrl',
		template: require('./dashboard-business.html'),
		restrict: 'A',
		scope: true
	};
};
