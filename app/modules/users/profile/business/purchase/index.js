'use strict';

module.exports = angular.module('users.profile.business.purchase', [])
	.directive('usersProfileBusinessPurchase', require('./usersProfileBusinessPurchaseDirective'))
	.controller('UsersProfileBusinessPurchaseCtrl', require('./UsersProfileBusinessPurchaseController'));