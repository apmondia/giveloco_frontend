'use strict';

module.exports = angular.module('dashboard.admin.modals',
    [
        require('./change-user-status').name
    ])
    .directive('dashboardAdminModals', function () {
        return {
            template: require('./dashboard-admin-modals.html')
        };
    });