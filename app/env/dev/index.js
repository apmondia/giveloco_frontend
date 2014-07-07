'use strict'

require('angular-mocks');

module.exports = angular.module('env.dev',
	[
        'ngMockE2E'
	])
        .config(require('./devConfig'))
        .run(require('./dev-init'));