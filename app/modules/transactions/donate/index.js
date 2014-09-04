'use strict';

module.exports = angular.module('transactions.donate', [])
	.directive('transactionDonate', require('./transactionDonateDirective'))
	.controller('TransactionDonateCtrl', require('./TransactionDonateController'));