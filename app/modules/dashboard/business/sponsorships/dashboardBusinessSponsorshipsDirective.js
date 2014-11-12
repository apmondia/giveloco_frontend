'use strict';

module.exports = function DashboardBusinessSponsorships() {
	return {
		controller: 'DashboardBusinessSponsorshipsCtrl',
		template: require('./dashboard-business-sponsorships.html'),
		restrict: 'A',
		scope: true
	};
};