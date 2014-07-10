'use strict';

module.exports = angular.module('home.sectionCauses', ['truncate'])
	.directive('homeSectionCausesView', require('./homeSectionCausesDirective'))
	.controller('HomeSectionCausesCtrl', require('./HomeSectionCausesController'));