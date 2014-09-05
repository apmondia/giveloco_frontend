'use strict';

module.exports = angular.module('common.resources', [])
	.factory('Transaction', require('./Transaction.js'))
	.factory('User', require('./User.js'));