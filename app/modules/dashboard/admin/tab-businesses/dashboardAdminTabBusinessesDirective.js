'use strict';

module.exports = function DashboardAdminTabBusinesses() {
	return {
		controller: 'DashboardAdminTabBusinessesCtrl',
		template: require('./dashboard-admin-tab-businesses.html'),
		restrict: 'A',
		scope: true
	};
};