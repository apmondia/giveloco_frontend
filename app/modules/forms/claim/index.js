'use strict';

module.exports = angular.module('forms.claim', [])
	.directive('formClaim', require('./formClaimDirective'))
	.controller('FormClaimCtrl', require('./FormClaimController'));