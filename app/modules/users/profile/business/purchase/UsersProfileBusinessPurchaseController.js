'use strict';

function UsersProfileBusinessPurchaseCtrl($scope, TRANSACTION_EVENTS, alertService, Restangular, SponsorService, TransactionService) {

	$scope.amountRegex = /\$?(\d+(\.\d+)?)/;

/* =======================================================================
	Step 1
======================================================================= */
	// define submission object
	var EMPTY_NEW_USER = {
		first_name: '',
		last_name: '',
		email: '',
		mailing_list_opt_in: false,
		agree_to_tc: false,
		certificates_attributes: {
			sponsorship_id: null,
			amount: 20,
			serial_number: null
		}
	};

	$scope.newUser = angular.copy(EMPTY_NEW_USER);

  $scope.stepOneNotComplete = function() {
		return $scope.registrationForm.serial_number.$invalid ||
						$scope.registrationForm.amount.$invalid;
  };


	/* =======================================================================
		Step 2
	======================================================================= */
	// Restructured sponsorship object to join the Cause ID with its Sponsorship ID for form submission
	$scope.sponsorshipData = function() {
		var sponsorships = SponsorService.getAcceptedSponsorships($scope.user);

		var sponsorshipData = [];
		for (var i=0; i < sponsorships.length; i++) {
			var getCause = Restangular.one('users', sponsorships[i].cause.id).get().$object;
			sponsorshipData.push({
				id: sponsorships[i].id,
				percentage: sponsorships[i].donation_percentage,
				cause: getCause
			});
		}
		return sponsorshipData;
	};

	// set sponsorships model
	$scope.sponsorships = $scope.sponsorshipData();

	$scope.stepTwoNotComplete = function() {
		return $scope.newUser.certificates_attributes.sponsorship_id === null ? true : false;
    };


/* =======================================================================
	Step 3
======================================================================= */

    $scope.$watch('newUser.certificates_attributes.sponsorship_id', function(){
    	if ($scope.newUser.certificates_attributes.sponsorship_id !== null) {
			Restangular.one('sponsorships', $scope.newUser.certificates_attributes.sponsorship_id).get().then(function(sponsorship) {
				$scope.causeName = sponsorship.cause.company_name;
			});
	    }
    });

    $scope.stepThreeNotComplete = function() {
		return $scope.newUser.agree_to_tc === false ? true : false;
    };

    // reset form when the modal is closed or competed submission
	var resetForm = function() {
		$scope.newUser = angular.copy(EMPTY_NEW_USER);
		$scope.registrationForm.$setPristine();
	};

	var transactionSuccess = function() {
		alertService.showAlert(TRANSACTION_EVENTS.transactionSuccess, 'alert-success');
		resetForm();
	};

	var transactionError = function() {
		alertService.showAlert(TRANSACTION_EVENTS.transactionFailure, 'alert-danger');
	};

	$scope.registerCertificate = function (event) {
		var data = {
			newUser: angular.copy($scope.newUser)
		};
		var amountMatch = data.newUser.certificates_attributes.amount.match( $scope.amountRegex );
		data.newUser.certificates_attributes.amount = amountMatch[1];
		data.newUser.certificates_attributes = [ data.newUser.certificates_attributes ];
		TransactionService.purchaseCertificate(data).then(transactionSuccess, transactionError);
	};

}

UsersProfileBusinessPurchaseCtrl.$inject = ['$scope', 'TRANSACTION_EVENTS', 'alertService', 'Restangular', 'SponsorService', 'TransactionService'];
module.exports = UsersProfileBusinessPurchaseCtrl;
