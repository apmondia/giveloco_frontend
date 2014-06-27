'use strict';

module.exports = function formRedeemDirective() {
	return {
		controller: 'FormRedeemCtrl',
		template: require('./form-redeem.html'),
		restrict: 'A',
		scope: true
	};
};