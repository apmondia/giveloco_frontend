// This is the main entry JS file for the PRODUCTION environment

'use strict';

require('angular');

module.exports = angular.module('taliflo',
	[
		require('./common/common').name,
		require('./env/prod').name, // Production Environment Configuration
		require('./modules').name
	])
	.config(require('./appConfig'))
	.config(require('./restangularConfig'))
	.constant('version', require('../package.json').version)
	.run(require('./common/common-init.js'));
