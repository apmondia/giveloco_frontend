'use strict';

module.exports = angular.module('transactions',
	[
		require('./donate').name,
		require('./pledge').name,
		require('./redeem').name
	])
	.config(require('./transactionsConfig'))
	.controller('TransactionsCtrl', require('./TransactionsController'));