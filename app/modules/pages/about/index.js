'use strict';
// Home View
module.exports = angular.module('about', [])
	.directive('aboutView', require('./aboutDirective'))
	.controller('AboutViewCtrl', require('./AboutController'));