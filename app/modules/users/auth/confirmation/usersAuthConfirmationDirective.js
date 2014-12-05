'use strict';

module.exports = function usersAuthConfirmationDirective() {
  return {
    controller: 'UsersAuthConfirmationCtrl',
    template: require('./users-auth-confirmation.html'),
    restrict: 'A',
    scope: true
  };
};
