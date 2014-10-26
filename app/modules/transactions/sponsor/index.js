'use strict';

module.exports = angular.module('transactions.sponsor', [])
	.directive('transactionSponsor', require('./transactionSponsorDirective'))
	.controller('TransactionSponsorCtrl', require('./TransactionSponsorController'));