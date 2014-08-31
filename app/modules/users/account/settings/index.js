'use strict';

module.exports = angular.module('users.account.settings', [])
	.directive('usersAccountSettings', require('./usersAccountSettingsDirective'))
	.controller('UsersAccountSettingsCtrl', require('./UsersAccountSettingsController'));