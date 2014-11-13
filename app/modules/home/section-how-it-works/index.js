'use strict';

module.exports = angular.module('home.section-how-it-works', [])
	.directive('homeSectionHowItWorks', require('./homeSectionHowItWorksDirective'))
	.controller('HomeSectionHowItWorksCtrl', require('./HomeSectionHowItWorksController'));