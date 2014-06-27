'use strict';

module.exports = angular.module('users.profile',
	[
		require('./business').name,
		require('./cause').name
	])
	.config(require('./usersProfileConfig'));