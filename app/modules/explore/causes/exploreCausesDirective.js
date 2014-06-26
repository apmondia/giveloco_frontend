'use strict';

module.exports = function exploreCausesDirective() {
	return {
		controller: 'ExploreCausesCtrl',
		template: require('./explore-causes.html'),
		restrict: 'A',
		scope: true
	};
};