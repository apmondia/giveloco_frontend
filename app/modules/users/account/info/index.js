'use strict';

module.exports = angular.module('users.account.info', [])
	.directive('usersAccountInfo', require('./usersAccountInfoDirective'))
	.controller('UsersAccountInfoCtrl', require('./UsersAccountInfoController'));