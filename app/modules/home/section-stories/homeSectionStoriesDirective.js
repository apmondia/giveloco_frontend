'use strict';

module.exports = function homeSectionStoriesView() {
	return {
		controller: 'HomeSectionStoriesCtrl',
		template: require('./home-section-stories.html'),
		restrict: 'A',
		scope: true
	};
};