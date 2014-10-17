'use strict';

module.exports = angular.module('explore',
	[
		require('./businesses').name,
		require('./causes').name,
		require('./redeem-credits').name
	])
	.config(require('./exploreConfig'))
	.controller('ExploreCtrl', require('./ExploreController'));