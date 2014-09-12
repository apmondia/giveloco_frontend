'use strict';

module.exports = angular.module('users.account.billingInfo', [])
	.directive('usersAccountBillingInfo', require('./usersAccountBillingInfoDirective'))
	.controller('UsersAccountBillingInfoCtrl', require('./UsersAccountBillingInfoController'));