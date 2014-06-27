'use strict';

module.exports = angular.module('users.account',
	[
		require('./info').name,
		require('./history').name,
		require('./vouchers').name
	])
	.config(require('./usersAccountConfig'));