'use strict';

module.exports = angular.module('home.sectionStories', [])
	.directive('homeSectionStoriesView', require('./homeSectionStoriesDirective'))
	.controller('HomeSectionStoriesCtrl', require('./HomeSectionStoriesController'));