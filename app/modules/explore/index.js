'use strict';

module.exports = angular.module('explore',
	[
		require('./businesses').name,
		require('./causes').name
	])
	.config(require('./exploreConfig'));