'use strict';

module.exports = angular.module('users.profile.business.purchase', [
		require('./step1').name,
		require('./step2').name,
		require('./step3').name
	])
	.directive('usersProfileBusinessPurchase', require('./usersProfileBusinessPurchaseDirective'))
	.controller('UsersProfileBusinessPurchaseCtrl', require('./UsersProfileBusinessPurchaseController'));