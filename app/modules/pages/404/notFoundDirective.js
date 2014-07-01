'use strict';

module.exports = function notFoundDirective() {
	return {
		template: require('./404.html'),
		restrict: 'A',
		scope: true
	};
};