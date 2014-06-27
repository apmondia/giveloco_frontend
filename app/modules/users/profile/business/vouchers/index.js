'use strict';

module.exports = angular.module('users.profile.business.vouchers', [])
	.directive('usersProfileBusinessVouchers', function () {
		return {
			controller: 'UsersProfileBusinessVouchersCtrl',
			template: require('./users-profile-business-vouchers.html'),
			restrict: 'EA',
			scope: true
		};
	})
	.controller('UsersProfileBusinessVouchersCtrl', require('./UsersProfileBusinessVouchersController'));