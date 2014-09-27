'use strict';

module.exports = angular.module('common.filters', [])
	.filter('customCurrency', require('./customCurrency.js'));