'use strict';

module.exports = angular.module('users.auth',
	[
		require('./login').name,
		require('./registration').name
	])
	.config(require('./usersAuthConfig'));