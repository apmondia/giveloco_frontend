'use strict';

module.exports = angular.module('modules',
	[
		require('./dashboard').name,
		require('./explore').name,
		require('./home').name,
		require('./pages').name,
		require('./transactions').name,
		require('./users').name
	])
	.controller('MainCtrl', require('./MainController'));