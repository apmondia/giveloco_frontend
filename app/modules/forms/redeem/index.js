'use strict';

module.exports = angular.module('forms.redeem', [])
	.directive('formRedeem', require('./formRedeemDirective'))
	.controller('FormRedeemCtrl', require('./FormRedeemController'));