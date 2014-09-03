'use strict';

module.exports = angular.module('users.account.details', [])
	.directive('usersAccountDetails', require('./usersAccountDetailsDirective'))
	.controller('UsersAccountDetailsCtrl', require('./UsersAccountDetailsController'));