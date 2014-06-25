'use strict';

require('angular');

module.exports = angular.module('taliflo',
	[
		require('./common/common.js').name,
		require('./modules/home').name,
		require('./modules/pages').name
	])
	.config(require('./appConfig'))
	.constant('version', require('../package.json').version)
	.run(require('./common/common-init.js'));