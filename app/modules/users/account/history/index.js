'use strict';

module.exports = angular.module('users.account.history', [])
	.directive('usersAccountHistory', require('./usersAccountHistoryDirective'))
	.controller('UsersAccountHistoryCtrl', require('./UsersAccountHistoryController'));