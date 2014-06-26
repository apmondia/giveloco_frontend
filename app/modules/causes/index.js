'use strict';

module.exports = angular.module('causes',
	[
		require('./grid').name
	])
	.config(require('./causesConfig'));