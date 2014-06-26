'use strict';

module.exports = function exploreBusinessesDirective() {
	return {
		controller: 'ExploreBusinessesCtrl',
		template: require('./explore-businesses.html'),
		restrict: 'A',
		scope: true
	};
};