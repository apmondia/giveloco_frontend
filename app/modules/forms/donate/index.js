'use strict';

module.exports = angular.module('forms.donate', [])
	.directive('formDonate', require('./formDonateDirective'))
	.controller('FormDonateCtrl', require('./FormDonateController'));