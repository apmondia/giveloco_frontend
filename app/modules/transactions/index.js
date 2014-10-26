'use strict';

module.exports = angular.module('transactions',
	[
		require('./purchase').name,
		require('./redeem').name,
		require('./sponsor').name
	])
	.config(require('./transactionsConfig'))
	.controller('TransactionsCtrl', require('./TransactionsController'));