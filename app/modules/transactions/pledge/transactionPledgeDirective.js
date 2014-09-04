'use strict';

module.exports = function transactionPledgeDirective() {
	return {
		controller: 'TransactionPledgeCtrl',
		template: require('./transaction-pledge.html'),
		restrict: 'A',
		scope: true
	};
};