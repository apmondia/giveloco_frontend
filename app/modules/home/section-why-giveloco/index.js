'use strict';

module.exports = angular.module('home.section-why-giveloco', [])
	.directive('homeSectionWhygiveloco', require('./homeSectionWhygivelocoDirective'))
	.controller('HomeSectionWhygivelocoCtrl', require('./HomeSectionWhygivelocoController'));