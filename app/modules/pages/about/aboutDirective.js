'use strict';

module.exports = function aboutDirective() {
	return {
		controller: 'AboutViewCtrl',
		template: require('./about.html'),
		restrict: 'A',
		scope: true
	};
};