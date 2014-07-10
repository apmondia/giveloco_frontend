'use strict';

module.exports = angular.module('pages',
	[
		require('./about').name,
		require('./policy').name,
		require('./terms').name
	])
	.config(require('./pagesConfig'))
	.controller('PagesCtrl', require('./PagesController'));