'use strict';

module.exports = angular.module('dashboard.admin.modals.create-sponsorship', [])
    .directive('dashboardAdminModalsCreateSponsorship', function () {
        return {
            controller: 'CreateSponsorshipCtrl',
			template: require('./create-sponsorship.html'),
            scope: true
        };
    })
    .controller('CreateSponsorshipCtrl', require('./CreateSponsorshipController'));