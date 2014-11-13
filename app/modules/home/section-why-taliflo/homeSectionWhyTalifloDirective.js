'use strict';

module.exports = function homeSectionWhyTalifloView() {
	return {
		controller: 'HomeSectionWhyTalifloCtrl',
		template: require('./home-section-why-taliflo.html'),
		restrict: 'A',
		scope: true
	};
};