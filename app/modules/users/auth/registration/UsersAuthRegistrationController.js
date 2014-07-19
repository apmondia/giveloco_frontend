'use strict';

function UsersAuthRegistrationCtrl($scope, $timeout, formValidation, regions) {

	/* =======================================================================
		Form Validation
	======================================================================= */
	$scope.nameRegex = formValidation.alphaNum;
	$scope.emailRegex = formValidation.emailRegex;
	$scope.websiteRegex = formValidation.websiteRegex;
	$scope.$watch('selectedCountry', function() {
		if ($scope.selectedCountry.code === 'CA') {
			$scope.zipRegex = formValidation.postalCodeRegex;
		} 
		if ($scope.selectedCountry.code === 'US') {
			$scope.zipRegex = formValidation.zipCodeRegex;
		}
	});
	

	/* =======================================================================
		Country & State Menus
	======================================================================= */

	var statesList = regions.states;

	$scope.init = function() {
		$scope.countryList = [];

		// List only the first 2 items in the list of countries - Canada and U.S.
		for (var i=0; i < 2; i++) {
			$scope.countryList.push(regions.countries[i]);
		}

		// Default Country is Canada
		$scope.selectedCountry = $scope.countryList[0];
		
		// Default set of states is Canadian Provinces
		$scope.states = statesList[$scope.selectedCountry.code];
		$scope.selectedState = $scope.states[0];
	};

	$scope.init();

	$scope.countryChange = function(selectedCountry) {
		$scope.selectedCountry = selectedCountry;
		$scope.states = statesList[selectedCountry.code];
		$scope.selectedState = $scope.states[0];
		console.log('Switched to: ' + $scope.selectedCountry.name);
		console.log($scope.selectedState.name);
	};

	$scope.stateChange = function(selectedState) {
		$scope.selectedState = selectedState;
		console.log($scope.selectedState.name);
	};

	console.log($scope.selectedState.name);

}

UsersAuthRegistrationCtrl.$inject = ['$scope', '$timeout', 'formValidation', 'regions'];
module.exports = UsersAuthRegistrationCtrl;