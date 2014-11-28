'use strict';

function CreateSponsorshipCtrl($scope, SponsorService, SPONSORSHIP_EVENTS, alertService) {

	$scope.sponsorship = {
		business_id: null,
		cause_id: null,
		donation_percentage: null
	};

	$scope.selectedBusiness= function ($item) {
		$scope.businessItem = $item;
		$scope.sponsorship.business_id = $scope.businessItem.id;
	};

	$scope.selectedCause = function ($item) {
		$scope.causeItem = $item;
		$scope.sponsorship.cause_id = $scope.causeItem.id;
	};

	$scope.donationPercentage = 10.00;

	// $scope.sponsorship.donation_percentage = parseFloat($scope.donationPercentage).toFixed(2);

	var success = function() {
		alertService.showAlert(SPONSORSHIP_EVENTS.creationSuccess, 'alert-success');
		$scope.createSponsorshipModal.close();
	};

	var error = function() {
		alertService.showAlert(SPONSORSHIP_EVENTS.creationFailure, 'alert-danger');
	};

	$scope.createSponsorship = function(isValid) {
		$scope.sponsorship.donation_percentage = parseFloat($scope.donationPercentage).toFixed(1);
		console.log($scope.sponsorship.donation_percentage);

		if (isValid) {
			SponsorService.createSponsorship($scope.sponsorship).then(success, error);
		}
	};
	
}

CreateSponsorshipCtrl.$inject = ['$scope', 'SponsorService', 'SPONSORSHIP_EVENTS', 'alertService'];
module.exports = CreateSponsorshipCtrl;