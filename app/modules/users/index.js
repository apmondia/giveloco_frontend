'use strict';

module.exports = angular.module('users',
	[
		require('./account').name,
		require('./auth').name,
		require('./profile').name
	])
	.controller('UsersCtrl', require('./UsersController'));