'use strict';

module.exports = angular.module('home.navbar', [])
	.directive('homeNavbar', require('./homeNavbarDirective'))
	.controller('HomeNavbarCtrl', require('./HomeNavbarController'));