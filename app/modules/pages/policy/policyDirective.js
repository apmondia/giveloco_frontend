'use strict';

module.exports = function policyDirective() {
	return {
		template: require('./policy.html'),
		restrict: 'A',
		scope: true
	};
};