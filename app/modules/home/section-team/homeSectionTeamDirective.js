'use strict';

module.exports = function homeSectionTeamView() {
	return {
		controller: 'HomeSectionTeamCtrl',
		template: require('./home-section-team.html'),
		restrict: 'A',
		scope: true
	};
};