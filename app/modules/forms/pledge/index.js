'use strict';

module.exports = angular.module('forms.pledge', [])
	.directive('formPledge', require('./formPledgeDirective'))
	.controller('FormPledgeCtrl', require('./FormPledgeController'));