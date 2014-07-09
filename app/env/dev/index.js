'use strict';

module.exports = angular.module('env.dev', [])
        .config(require('./devConfig'))
        .run(require('./dev-init'));