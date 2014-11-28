'use strict';

module.exports = angular.module('users.profile.business.purchase.stepOne', [])
	.directive('usersProfileBusinessPurchaseStepOne', require('./usersProfileBusinessPurchaseStepOneDirective'))
	.controller('UsersProfileBusinessPurchaseCtrl', require('../UsersProfileBusinessPurchaseController'));