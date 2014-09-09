'use strict';

module.exports = angular.module('users.account.details.edit', [])
	.directive('usersAccountDetailsEdit', require('./usersAccountDetailsEditDirective'))
	.controller('UsersAccountDetailsEditCtrl', require('./UsersAccountDetailsEditController'));