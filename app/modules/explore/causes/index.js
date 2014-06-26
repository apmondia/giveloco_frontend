'use strict';

module.exports = angular.module('explore.causes', [])
	.directive('exploreCauses', require('./exploreCausesDirective'))
	.controller('ExploreCausesCtrl', require('./ExploreCausesController'));