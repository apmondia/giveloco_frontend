'use strict';

function TransactionSponsorCtrl($rootScope, $scope) {
	$scope.transaction = 'Sponsor Transaction goes here.';
}

TransactionSponsorCtrl.$inject = ['$rootScope', '$scope'];
module.exports = TransactionSponsorCtrl;