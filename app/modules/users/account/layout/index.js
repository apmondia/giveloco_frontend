'use strict';

module.exports = angular.module('users.account.layout', [])
	.directive('usersAccountLayout', require('./usersAccountLayoutDirective'))
	.controller('UsersAccountLayoutCtrl', require('./UsersAccountLayoutController'));