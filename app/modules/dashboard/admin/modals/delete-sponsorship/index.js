'use strict';

module.exports = angular.module('dashboard.admin.modals.delete-sponsorship', [])
.directive('dashboardAdminModalsDeleteSponsorship', function () {
  return {
    controller: 'DeleteSponsorshipController',
    template: require('./delete-sponsorship.html'),
    scope: true
  };
})
.controller('DeleteSponsorshipController', require('./DeleteSponsorshipController'));
