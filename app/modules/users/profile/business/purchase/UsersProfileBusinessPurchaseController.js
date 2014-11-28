'use strict';

function UsersProfileBusinessPurchaseCtrl($scope, TRANSACTION_EVENTS, alertService, Restangular, SponsorService, TransactionService) {

	// Restructured sponsorship object to join the Cause ID with its Sponsorship ID for form submission
	$scope.sponsorshipData = function() {
		var sponsorships = SponsorService.getAcceptedSponsorships($scope.user);

		var sponsorshipData = [];
		for (var i=0; i < sponsorships.length; i++) {
			sponsorshipData.push({
				id: sponsorships[i].id,
				percentage: sponsorships[i].donation_percentage,
				cause: Restangular.one('users', sponsorships[i].cause.id).get().$object
			});
		}
		return sponsorshipData;
	};

	// set sponsorships model
	$scope.sponsorships = $scope.sponsorshipData();

	// define submission object
	$scope.newUser = {
    	first_name: '',
    	last_name: '',
    	email: '',
		certificate: {
			sponsorship_id: null,
			amount: 20,
			stripeToken: null
    	}
    };

    // reset form when the modal is closed or competed submission
	var resetForm = function() {
		$scope.newUser.first_name = '';
		$scope.newUser.last_name = '';
		$scope.newUser.email = '';
		$scope.newUser.certificate.sponsorship_id = null;
		$scope.newUser.certificate.amount = 20;
		$scope.newUser.certificate.stripeToken = null;
		$scope.number = '';
		$scope.expiry = '';
		$scope.cvc = '';
		$scope.purchaseForm.$setPristine();
	};
	

	var transactionSuccess = function() {
		alertService.showAlert(TRANSACTION_EVENTS.transactionSuccess, 'alert-success');
		resetForm();
	};

	var transactionError = function() {
		alertService.showAlert(TRANSACTION_EVENTS.transactionFailure, 'alert-danger');
	};

	$scope.stripeCallBack = function (status, response) {
		if (response.error) {
			alertService.showAlert(TRANSACTION_EVENTS.paymentFailure, 'alert-danger');
		} else {
			$scope.newUser.certificate.stripeToken = response.id;
			TransactionService.purchaseCertificate($scope.newUser).then(transactionSuccess, transactionError);
		}
	};

}

UsersProfileBusinessPurchaseCtrl.$inject = ['$scope', 'TRANSACTION_EVENTS', 'alertService', 'Restangular', 'SponsorService', 'TransactionService'];
module.exports = UsersProfileBusinessPurchaseCtrl;
