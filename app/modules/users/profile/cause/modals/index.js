'use strict';

module.exports = angular.module('users.profile.cause.modals', [])
    .directive('usersProfileCauseModals', function () {
        return {
            template: require('./users-profile-cause-modals.html')
        };
    });