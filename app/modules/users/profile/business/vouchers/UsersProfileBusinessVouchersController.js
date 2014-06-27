'use strict';

function UsersProfileBusinessVouchersCtrl($rootScope, $scope) {
	$scope.vouchersList = 'List of Business Vouchers goes here.';
}

UsersProfileBusinessVouchersCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersProfileBusinessVouchersCtrl;