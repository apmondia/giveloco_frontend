'use strict';

module.exports = angular.module('home.sectionCauses', [])
	.directive('homeSectionCausesView', require('./homeSectionCausesDirective'))
	.controller('HomeSectionCausesCtrl', require('./HomeSectionCausesController'));