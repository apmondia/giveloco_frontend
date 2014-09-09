'use strict';

module.exports = angular.module('users.account',
	[
		require('./change-password').name,
		require('./details').name,
		require('./history').name,
		require('./layout').name,
		require('./settings').name
	])
	.config(require('./usersAccountConfig'))
	.controller('UsersAccountCtrl', require('./UsersAccountController'));