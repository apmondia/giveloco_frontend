'use strict';

module.exports = function homeSectionHowItWorksView() {
	return {
		controller: 'HomeSectionHowItWorksCtrl',
		template: require('./home-section-how-it-works.html'),
		restrict: 'A',
		scope: true
	};
};