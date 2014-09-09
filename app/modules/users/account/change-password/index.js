'use strict';

module.exports = angular.module('users.account.changePassword', [])
	.directive('usersAccountChangePassword', require('./usersAccountChangePasswordDirective'))
	.controller('UsersAccountChangePasswordCtrl', require('./UsersAccountChangePasswordController'));