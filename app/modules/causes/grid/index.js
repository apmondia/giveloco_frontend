'use strict';
// About (How it Works) View
module.exports = angular.module('cause.grid', [])
	.directive('causeGrid', require('./causeGridDirective'))
	.controller('CauseGridCtrl', require('./CauseGridController'));