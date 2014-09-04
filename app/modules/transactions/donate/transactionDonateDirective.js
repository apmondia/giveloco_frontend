'use strict';

module.exports = function transactionDonateDirective() {
	return {
		controller: 'TransactionDonateCtrl',
		template: require('./transaction-donate.html'),
		restrict: 'A',
		scope: true
	};
};