'use strict';

module.exports = angular.module('home.section-supporters', [])
	.directive('homeSectionSupporters', require('./homeSectionSupportersDirective'))
	.controller('HomeSectionSupportersCtrl', require('./HomeSectionSupportersController'));