'use strict';

module.exports = angular.module('common.filters', [])
	.filter('customCurrency', require('./customCurrency.js'))
	.filter('userSearch', require('./userSearch.js'))
	.filter('withTag', require('./withTag.js') );
