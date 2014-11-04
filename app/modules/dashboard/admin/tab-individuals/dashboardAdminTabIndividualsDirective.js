'use strict';

module.exports = function DashboardAdminTabIndividuals() {
	return {
		controller: 'DashboardAdminTabIndividualsCtrl',
		template: require('./dashboard-admin-tab-individuals.html'),
		restrict: 'A',
		scope: true
	};
};