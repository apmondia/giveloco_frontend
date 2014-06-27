'use strict';

module.exports = angular.module('forms',
	[
		require('./claim').name,
		require('./donate').name,
		require('./pledge').name,
		require('./redeem').name
	])
	.config(require('./formsConfig'));