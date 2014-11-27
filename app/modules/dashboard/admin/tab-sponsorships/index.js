'use strict';

module.exports = angular.module('dashboard.admin.tab-sponsorships', [])
.directive('dashboardAdminTabSponsorships', require('./dashboardAdminTabSponsorshipsDirective'))
.controller('DashboardAdminTabSponsorshipsCtrl', require('./DashboardAdminTabSponsorshipsController'));
