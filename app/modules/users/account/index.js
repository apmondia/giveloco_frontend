'use strict';

module.exports = angular.module('users.account',
	[
		require('./settings').name,
		require('./history').name
	])
	.config(require('./usersAccountConfig'))
	.controller('UsersAccountCtrl', require('./UsersAccountController'));