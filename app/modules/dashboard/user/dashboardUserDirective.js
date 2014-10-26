'use strict';

module.exports = function DashboardUserView() {
	return {
		controller: 'DashboardUserCtrl',
		template: require('./dashboard-user.html'),
		restrict: 'A',
		scope: true
	};
};