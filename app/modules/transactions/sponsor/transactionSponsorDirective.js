'use strict';

module.exports = function transactionSponsorDirective() {
	return {
		controller: 'TransactionSponsorCtrl',
		template: require('./transaction-sponsor.html'),
		restrict: 'A',
		scope: true
	};
};