'use strict';

module.exports = angular.module('dashboard.modals.admin-change-user-status', [])
    .directive('dashboardModalsAdminChangeUserStatus', function () {
        return {
            controller: require('./AdminChangeUserStatusController'),
			template: require('./admin-change-user-status.html'),
            scope: true
        };
    });