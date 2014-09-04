'use strict';

module.exports = angular.module('transactions.pledge', [])
	.directive('transactionPledge', require('./transactionPledgeDirective'))
	.controller('TransactionPledgeCtrl', require('./TransactionPledgeController'));