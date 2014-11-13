'use strict';

module.exports = function homeSectionSupportersView() {
	return {
		controller: 'HomeSectionSupportersCtrl',
		template: require('./home-section-supporters.html'),
		restrict: 'A',
		scope: true
	};
};