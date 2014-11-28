'use strict';

module.exports = angular.module('dashboard.admin.modals',
    [
        require('./change-user-status').name,
        require('./create-sponsorship').name
    ])
    .directive('dashboardAdminModals', function () {
        return {
            template: require('./dashboard-admin-modals.html')
        };
    });