'use strict';

function TransactionDonateCtrl($rootScope, $scope, TRANSACTION_EVENTS, alertService, TransactionService) {

	var currentUser = $scope.currentUser;

	$scope.transaction = {
		stripeToken: null,
		amount: null,
		name: currentUser.first_name + ' ' + currentUser.last_name,
		from_user_id: currentUser.id,
		to_user_id: $scope.user.id
	};

	console.log($scope.currentUser.id);
	console.log($scope.user.id);

	var transactionSuccess = function() {
		alertService.showAlert(TRANSACTION_EVENTS.donationSuccess, 'alert-success');
	};

	var transactionError = function() {
		alertService.showAlert(TRANSACTION_EVENTS.paymentFailure, 'alert-danger');
	};

	$scope.stripeCallBack = function (status, response) {

		if (response.error) {
			alertService.showAlert(TRANSACTION_EVENTS.paymentFailure, 'alert-danger');
			console.log('it failed! error: ' + response.error.message);
		} else {
			console.log('success! token: ' + response.id);
			$scope.transaction.stripeToken = response.id;
			$scope.transaction.amount *= 100; // Transaction amount has to be in cents, not dollars
			TransactionService.donation($scope.transaction).then(transactionSuccess, transactionError);
		}
	};

}

TransactionDonateCtrl.$inject = ['$rootScope', '$scope', 'TRANSACTION_EVENTS', 'alertService', 'TransactionService'];
module.exports = TransactionDonateCtrl;