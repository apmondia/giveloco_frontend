'use strict';

module.exports = angular.module('users.account.profile.edit.confirm', [])
  .directive('usersAccountProfileEditConfirm', require('./usersAccountProfileEditConfirmDirective'))
  .controller('UsersAccountProfileEditConfirmController', require('./UsersAccountProfileEditConfirmController'));
