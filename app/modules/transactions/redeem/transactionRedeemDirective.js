'use strict';

module.exports = function transactionRedeemDirective() {
	return {
		controller: 'TransactionRedeemCtrl',
		template: require('./transaction-redeem.html'),
		restrict: 'A',
		scope: true
	};
};