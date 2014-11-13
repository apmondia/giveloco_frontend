'use strict';

module.exports = angular.module('home.sectionCauses', ['truncate'])
	.directive('homeSectionCauses', require('./homeSectionCausesDirective'))
	.controller('HomeSectionCausesCtrl', require('./HomeSectionCausesController'));