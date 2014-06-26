'use strict';

module.exports = angular.module('explore.businesses', [])
	.directive('exploreBusinesses', require('./exploreBusinessesDirective'))
	.controller('ExploreBusinessesCtrl', require('./ExploreBusinessesController'));