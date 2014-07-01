'use strict';
// 404 View
module.exports = angular.module('pages.notFound', [])
	.directive('pageNotFoundView', require('./notFoundDirective'));