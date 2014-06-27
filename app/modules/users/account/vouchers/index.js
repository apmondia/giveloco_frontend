'use strict';

module.exports = angular.module('users.account.vouchers', [])
	.directive('usersAccountVouchers', require('./usersAccountVouchersDirective'))
	.controller('UsersAccountVouchersCtrl', require('./UsersAccountVouchersController'));