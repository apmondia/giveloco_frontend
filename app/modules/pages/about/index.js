'use strict';
// About (How it Works) View
module.exports = angular.module('pages.about', [])
	.directive('aboutView', require('./aboutDirective'))
	.controller('AboutCtrl', require('./AboutController'));