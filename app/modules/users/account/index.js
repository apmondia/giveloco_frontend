'use strict';

module.exports = angular.module('users.account',
	[
		require('./details').name,
		require('./history').name,
		require('./settings').name
	])
	.config(require('./usersAccountConfig'))
	.controller('UsersAccountCtrl', require('./UsersAccountController'));