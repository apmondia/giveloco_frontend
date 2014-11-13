'use strict';

module.exports = angular.module('home.section-team', [])
	.directive('homeSectionTeam', require('./homeSectionTeamDirective'))
	.controller('HomeSectionTeamCtrl', require('./HomeSectionTeamController'));