'use strict';

function TransactionDonateCtrl($rootScope, $scope) {

	$scope.stripeCallBack = function (code, result) {
		if (result.error) {
			window.alert('it failed! error: ' + result.error.message);
		} else {
			window.alert('success! token: ' + result.id);
		}
	};

}

TransactionDonateCtrl.$inject = ['$rootScope', '$scope'];
module.exports = TransactionDonateCtrl;