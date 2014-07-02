'use strict';
// Sitemap
module.exports = angular.module('home.sitemap', [])
	.directive('homeViewSitemap', function() {
		return {
			template: require('./sitemap.html'),
			restrict: 'EA'
		};
	});