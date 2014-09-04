'use strict';

module.exports = angular.module('transactions.redeem', [])
	.directive('transactionRedeem', require('./transactionRedeemDirective'))
	.controller('TransactionRedeemCtrl', require('./TransactionRedeemController'));