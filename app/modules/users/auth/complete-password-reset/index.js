'use strict';

module.exports = angular.module('users.auth.complete-password-reset', [])
  .directive('usersAuthCompletePasswordReset', require('./UsersAuthCompletePasswordResetDirective'))
  .controller('UsersAuthCompletePasswordResetCtrl', require('./UsersAuthCompletePasswordResetController'));
