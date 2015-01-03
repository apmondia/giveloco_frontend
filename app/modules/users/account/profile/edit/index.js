'use strict';

module.exports = angular.module('users.account.profile.edit', [
	require('./confirm').name
])
	.directive('usersAccountProfileEdit', require('./usersAccountProfileEditDirective'))
	.controller('UsersAccountProfileEditCtrl', require('./UsersAccountProfileEditController'));
