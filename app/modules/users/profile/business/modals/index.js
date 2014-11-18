'use strict';

module.exports = angular.module('users.profile.business.modals', [])
    .directive('usersProfileBusinessModals', function () {
        return {
            template: require('./users-profile-business-modals.html')
        };
    });