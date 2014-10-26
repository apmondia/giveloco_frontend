'use strict';

module.exports = angular.module('transactions.purchase', [])
	.directive('transactionPurchase', require('./transactionPurchaseDirective'))
	.controller('TransactionPurchaseCtrl', require('./TransactionPurchaseController'));