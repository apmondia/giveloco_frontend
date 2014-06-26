'use strict';

module.exports = function termsDirective() {
	return {
		template: require('./terms.html'),
		restrict: 'A',
		scope: true
	};
};