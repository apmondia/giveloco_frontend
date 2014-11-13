'use strict';
// Home View
module.exports = angular.module('home', [
		require('./section-causes').name,
		require('./section-how-it-works').name,
		require('./section-supporters').name,
		require('./section-team').name,
		require('./section-why-taliflo').name
	])
	.directive('homeView', require('./homeDirective'))
	.controller('HomeViewCtrl', require('./HomeController'));