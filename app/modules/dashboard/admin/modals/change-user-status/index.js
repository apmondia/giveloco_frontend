'use strict';

module.exports = angular.module('dashboard.admin.modals.change-user-status', [])
    .directive('dashboardAdminModalsChangeUserStatus', function () {
        return {
            // controller: 'ChangeUserStatusCtrl',
			template: require('./change-user-status.html'),
            scope: true
        };
    })
    .controller('ChangeUserStatusCtrl', require('./ChangeUserStatusController'));