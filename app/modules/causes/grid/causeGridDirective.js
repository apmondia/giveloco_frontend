'use strict';

module.exports = function causeGridDirective() {
	return {
		controller: 'CauseGridCtrl',
		template: require('./cause-grid.html'),
		restrict: 'A',
		scope: true
	};
};