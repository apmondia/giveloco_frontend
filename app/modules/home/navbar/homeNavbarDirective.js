'use strict';

module.exports = function HomeNavbarView() {
	return {
		controller: 'HomeNavbarCtrl',
		template: require('./home-navbar.html'),
		restrict: 'A',
		scope: true
	};
};