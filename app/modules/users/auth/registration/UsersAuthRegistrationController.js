'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope, formValidation, regions) {

	/* =======================================================================
		Form Validation
	======================================================================= */
	$scope.emailRegex = formValidation.emailRegex;
	$scope.websiteRegex = formValidation.websiteRegex;


	/* =======================================================================
		Country Dropdowns
	======================================================================= */
	$scope.countryList = [];
	// List only the first 2 items in the list of countries - Canada and U.S.
	for (var i=0; i < 2; i++) {
		$scope.countryList.push(regions.countries[i]);
	}

	// Default Country is Canada
	$scope.selectedCountry = $scope.countryList[0].value;


	/* =======================================================================
		State / Province Dropdowns
	======================================================================= */
	// Default is Canadian Provinces
	$scope.states = regions.states.CA;
	$scope.selectedState = regions.states.CA[0].value;

	$scope.countryChange = function(selectedCountry) {

		$scope.selectedCountry = selectedCountry;

		if ($scope.selectedCountry === 'CA') {
			console.log('CANADA')
			$scope.selectedState = regions.states.CA[0].value;
			$scope.states = regions.states.CA;
			
		};
		if ($scope.selectedCountry === 'US') {
			console.log('USA')
			$scope.selectedState = [];
			$scope.selectedState = regions.states.US[0].value;
			$scope.states = regions.states.US;
			
		};

	};

}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope', 'formValidation', 'regions'];
module.exports = UsersAuthRegistrationCtrl;