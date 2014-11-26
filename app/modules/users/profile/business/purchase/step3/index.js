'use strict';

module.exports = angular.module('users.profile.business.purchase.stepThree', [])
	.directive('usersProfileBusinessPurchaseStepThree', require('./usersProfileBusinessPurchaseStepThreeDirective'))
	.controller('UsersProfileBusinessPurchaseCtrl', require('../UsersProfileBusinessPurchaseController'));