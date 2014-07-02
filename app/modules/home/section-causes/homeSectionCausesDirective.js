'use strict';

module.exports = function HomeSectionCausesView() {
	return {
		controller: 'HomeSectionCausesCtrl',
		template: require('./home-section-causes.html'),
		restrict: 'A',
		scope: true
	};
};