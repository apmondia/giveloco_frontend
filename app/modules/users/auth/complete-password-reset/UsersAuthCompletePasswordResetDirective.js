'use strict';

module.exports = function UsersAuthCompletePasswordResetDirective() {
  return {
    controller: 'UsersAuthCompletePasswordResetCtrl',
    template: require('./users-auth-complete-password-reset.html'),
    restrict: 'A',
    scope: true
  };
};
