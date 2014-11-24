'use strict';

module.exports = angular.module('common.templates.bootstrap', [])
	.run(['$templateCache', function ($templateCache) {
		$templateCache.put('template/carousel/carousel.html', require('./carousel.html'));
		$templateCache.put('template/carousel/slide.html', require('./slide.html'));
	}]);