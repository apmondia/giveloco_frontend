'use strict';

function UsersProfileBusinessPurchaseCtrl($scope, TRANSACTION_EVENTS, alertService, Restangular, SponsorService, TransactionService) {

/* =======================================================================
	Step 1
======================================================================= */
	// define submission object
	$scope.newUser = {
    	first_name: '',
    	last_name: '',
    	email: '',
    	mailing_list_opt_in: true,
    	agree_to_tc: false,
		certificates_attributes: {
			sponsorship_id: null,
			amount: 20,
			stripeToken: null
    	}
    };

    $scope.stepOneNotComplete = function() {
    	if (($scope.newUser.first_name === undefined) || ($scope.newUser.last_name === undefined) || ($scope.newUser.email === undefined) || ($scope.number === undefined) || ($scope.expiry === undefined) || ($scope.cvc === undefined)) {
    		return true;
    	} else {
    		return false;
    	}
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
    $scope.lastFourDigits = function(num) {
    	if ($scope.number !== undefined || null) {
    		num = $scope.number.replace(/.(?=.{4})/g, 'x');
    		return num;
    	}
    };

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
		$scope.newUser.first_name = '';
		$scope.newUser.last_name = '';
		$scope.newUser.email = '';
		$scope.newUser.mailing_list_opt_in = true;
    	$scope.newUser.agree_to_tc = false;
		$scope.newUser.certificates_attributes.sponsorship_id = null;
		$scope.newUser.certificates_attributes.amount = 20;
		$scope.newUser.certificates_attributes.stripeToken = null;
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
		console.log($scope.newUser);
		if (response.error) {
			alertService.showAlert(TRANSACTION_EVENTS.paymentFailure, 'alert-danger');
		} else {
			$scope.newUser.certificates_attributes.stripeToken = response.id;
			var data = {
				newUser: {
					first_name: $scope.newUser.first_name,
					last_name: $scope.newUser.last_name,
					email: $scope.newUser.email,
					mailing_list_opt_in: $scope.newUser.mailing_list_opt_in,
					agree_to_tc: $scope.newUser.agree_to_tc,
					certificates_attributes: [
						$scope.newUser.certificates_attributes
					]
				}
			};
			TransactionService.purchaseCertificate(data).then(transactionSuccess, transactionError);
		}
	};

}

UsersProfileBusinessPurchaseCtrl.$inject = ['$scope', 'TRANSACTION_EVENTS', 'alertService', 'Restangular', 'SponsorService', 'TransactionService'];
module.exports = UsersProfileBusinessPurchaseCtrl;
