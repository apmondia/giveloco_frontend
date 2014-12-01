'use strict';

module.exports = function termsDirective() {
	return {
		template: require('./terms-nov-2014.html'),
		restrict: 'A',
		scope: true
	};
};