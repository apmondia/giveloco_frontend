'use strict';

module.exports = angular.module('modules',
	[
		require('./explore').name,
		require('./forms').name,
		require('./home').name,
		require('./pages').name,
		require('./users').name
	])
	.controller('MainCtrl', require('./MainController'));