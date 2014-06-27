'use strict';

require('angular');

module.exports = angular.module('taliflo',
	[
		require('./common/common.js').name,
		require('./modules/explore').name,
		require('./modules/forms').name,
		require('./modules/home').name,
		require('./modules/pages').name,
		require('./modules/users').name
	])
	.config(require('./appConfig'))
	.constant('version', require('../package.json').version)
	.run(require('./common/common-init.js'));