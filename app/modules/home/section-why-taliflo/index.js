'use strict';

module.exports = angular.module('home.section-why-taliflo', [])
	.directive('homeSectionWhyTaliflo', require('./homeSectionWhyTalifloDirective'))
	.controller('HomeSectionWhyTalifloCtrl', require('./HomeSectionWhyTalifloController'));