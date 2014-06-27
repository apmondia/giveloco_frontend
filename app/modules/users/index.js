'use strict';

module.exports = angular.module('users',
	[
		require('./auth').name,
		require('./account').name
	]);