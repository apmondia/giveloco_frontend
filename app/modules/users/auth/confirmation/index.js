'use strict';

module.exports = angular.module('users.auth.confirmation', [])
  .directive('usersAuthConfirmation', require('./usersAuthConfirmationDirective'))
  .controller('UsersAuthConfirmationCtrl', require('./UsersAuthConfirmationController'));
