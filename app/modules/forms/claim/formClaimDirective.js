'use strict';

module.exports = function formClaimDirective() {
	return {
		controller: 'FormClaimCtrl',
		template: require('./form-claim.html'),
		restrict: 'A',
		scope: true
	};
};