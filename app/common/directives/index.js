'use strict';

module.exports = angular.module('common.directives', [])
	.directive('autoFocus', require('./autoFocus.js'))
	.directive('disableNgAnimate', require('./disableNgAnimate.js'))
	.directive('showFormErrors', require('./showFormErrors.js'));