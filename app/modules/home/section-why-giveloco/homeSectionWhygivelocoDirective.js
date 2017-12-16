'use strict';

module.exports = function homeSectionWhygivelocoView() {
	return {
		controller: 'HomeSectionWhygivelocoCtrl',
		template: require('./home-section-why-giveloco.html'),
		restrict: 'A',
		scope: true
	};
};