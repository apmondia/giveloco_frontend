'use strict';

function TransactionPledgeCtrl($rootScope, $scope) {
	$scope.transaction = 'Pledge Transaction goes here.';
}

TransactionPledgeCtrl.$inject = ['$rootScope', '$scope'];
module.exports = TransactionPledgeCtrl;