'use strict';

module.exports = angular.module('users.profile.business.purchase.stepTwo', [])
	.directive('usersProfileBusinessPurchaseStepTwo', require('./usersProfileBusinessPurchaseStepTwoDirective'))
	.controller('UsersProfileBusinessPurchaseCtrl', require('../UsersProfileBusinessPurchaseController'));