'use strict';

module.exports = angular.module('dashboard.modals',
    [
        require('./admin-change-user-status').name
    ])
    .directive('dashboardModals', function () {
        return {
            template: require('./modals.html')
        };
    });