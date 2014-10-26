'use strict';

module.exports = function transactionPurchaseDirective() {
	return {
		controller: 'TransactionPurchaseCtrl',
		template: require('./transaction-purchase.html'),
		restrict: 'A',
		scope: true
	};
};