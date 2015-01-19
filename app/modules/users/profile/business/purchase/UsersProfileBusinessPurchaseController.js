'use strict';

function UsersProfileBusinessPurchaseCtrl($scope, TRANSACTION_EVENTS, alertService, Restangular, SponsorService, TransactionService) {

	$scope.amountRegex = /^\$?(\d+(\.\d+)?)$/;

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
			amount: null,
			serial_number: null
		}
	};

	$scope.newUser = angular.copy(EMPTY_NEW_USER);

	$scope.calculateDonationAmount = function () {
		// console.debug("Amount: ", $scope.getGiftCardAmount());
		// console.debug("Rate: ", $scope.user.sponsorship_rate);
		return parseFloat($scope.getGiftCardAmount()) *
			(parseFloat($scope.user.sponsorship_rate) / 100.0);
	};

  $scope.stepOneNotComplete = function() {
		return $scope.registrationForm.serial_number.$invalid ||
						$scope.registrationForm.amount.$invalid;
  };

	SponsorService.getSponsoredCauses($scope.user).then(function (data) {
		$scope.sponsorships = _.filter(data, function (sponsorship) {
			return sponsorship.status == 'accepted';
		});
	});

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
			return $scope.registrationForm.agree_to_tc.$invalid || $scope.registrationForm.email.$invalid;
    };

    // reset form when the modal is closed or competed submission
	var resetForm = function() {
		$scope.newUser = angular.copy(EMPTY_NEW_USER);
		$scope.registrationForm.$setPristine();
	};

	$scope.closeRegistrationForm = function () {
		$scope.usersProfileBusinessPurchaseModal.close();
		resetForm();
	};

	var transactionSuccess = function() {
		$scope.closeRegistrationForm();
		alertService.showAlert(TRANSACTION_EVENTS.transactionSuccess, 'alert-success');
	};

	var transactionError = function() {
		alertService.showAlert(TRANSACTION_EVENTS.transactionFailure, 'alert-danger');
	};

	$scope.getGiftCardAmount = function () {
		var value = 0;
		if ($scope.registrationForm.amount.$valid) {
			var matcher = $scope.newUser.certificates_attributes.amount.match( $scope.amountRegex );
			value = parseFloat(matcher[1]);
		}
		return value;
	};

	$scope.registerCertificate = function (valid) {
		if ($scope.registrationForm.$valid) {
			var data = {
				newUser: angular.copy($scope.newUser)
			};
			data.newUser.certificates_attributes.amount = $scope.getGiftCardAmount();
			data.newUser.certificates_attributes = [ data.newUser.certificates_attributes ];
			TransactionService.purchaseCertificate(data).then(transactionSuccess, transactionError);
		} else {
			$scope.submitAttempted = true;
		}
	};

}

UsersProfileBusinessPurchaseCtrl.$inject = ['$scope', 'TRANSACTION_EVENTS', 'alertService', 'Restangular', 'SponsorService', 'TransactionService'];
module.exports = UsersProfileBusinessPurchaseCtrl;
