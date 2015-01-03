'use strict';

module.exports = function usersAccountProfileEditConfirmDirective() {
  return {
    controller: 'UsersAccountProfileEditConfirmController',
    template: require('./users-account-profile-edit-confirm.html'),
    restrict: 'A',
    scope: true
  };
};
