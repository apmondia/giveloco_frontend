'use strict';

function TransactionDonateCtrl($rootScope, $scope) {
	$scope.transaction = 'Donate Transaction goes here.';
}

TransactionDonateCtrl.$inject = ['$rootScope', '$scope'];
module.exports = TransactionDonateCtrl;