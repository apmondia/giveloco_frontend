'use strict';

module.exports = function DashboardAdminView() {
	return {
		controller: 'DashboardAdminCtrl',
		template: require('./dashboard-admin.html'),
		restrict: 'A',
		scope: true
	};
};