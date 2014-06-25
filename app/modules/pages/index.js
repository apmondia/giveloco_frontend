'use strict';

module.exports = angular.module('pages',
	[
		require('./about').name
	])
	.config(require('./pagesConfig'));