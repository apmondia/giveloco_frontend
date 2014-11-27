'use strict';

module.exports = function DashboardAdminTabSponsorships() {
  return {
    controller: 'DashboardAdminTabSponsorshipsCtrl',
    template: require('./dashboard-admin-tab-sponsorships.html'),
    restrict: 'A',
    scope: true
  };
};
