'use strict';
// Home View
module.exports = angular.module('home', [
		require('./tmp').name, //Remove this before prod launch
		require('./section-causes').name,
		require('./section-stories').name
	])
	.directive('homeView', require('./homeDirective'))
	.controller('HomeViewCtrl', require('./HomeController'));