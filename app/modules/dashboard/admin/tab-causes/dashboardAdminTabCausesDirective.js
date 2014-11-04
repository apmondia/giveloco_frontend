'use strict';

module.exports = function DashboardAdminTabCauses() {
	return {
		controller: 'DashboardAdminTabCausesCtrl',
		template: require('./dashboard-admin-tab-causes.html'),
		restrict: 'A',
		scope: true
	};
};