'use strict';

module.exports = angular.module('users.account.profile.edit', [])
	.directive('usersAccountProfileEdit', require('./usersAccountProfileEditDirective'))
	.controller('UsersAccountProfileEditCtrl', require('./UsersAccountProfileEditController'));
