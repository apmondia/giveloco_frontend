'use strict';

module.exports = angular.module('dashboard.business.sponsorships', [])
	.directive('dashboardBusinessSponsorships', require('./dashboardBusinessSponsorshipsDirective'))
	.controller('DashboardBusinessSponsorshipsCtrl', require('./DashboardBusinessSponsorshipsController'));