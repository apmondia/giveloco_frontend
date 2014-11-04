'use strict';

module.exports = angular.module('dashboard.admin.modals.change-user-status', [])
    .directive('dashboardAdminModalsChangeUserStatus', function () {
        return {
            controller: require('./ChangeUserStatusController'),
			template: require('./change-user-status.html'),
            scope: true
        };
    });