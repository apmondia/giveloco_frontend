'use strict';

function UsersAuthRegistrationCtrl($scope, $timeout, formValidation, regions) {

	/* =======================================================================
		Registration Form Data Definitions
	======================================================================= */
	$scope.user = {
		country: null,
		state: null
	};

	/* =======================================================================
		Form Validation
	======================================================================= */
	// Zip / Postal Code
	$scope.$watch('user.country', function() {
		if ($scope.user.country.code === 'CA') {
			$scope.zipRegex = formValidation.postalCodeRegex;
			$scope.zipPlaceholder = 'A1B 2C3';
		} 
		if ($scope.user.country.code === 'US') {
			$scope.zipRegex = formValidation.zipCodeRegex;
			$scope.zipPlaceholder = '98765';
		}
	});
	

	/* =======================================================================
		Country & State Select Menus
	======================================================================= */

	$scope.statesList = regions.states;

	$scope.countries = function() {
		$scope.countryList = [];

		// List only the first 2 items in the list of countries - Canada and U.S.
		for (var i=0; i < 2; i++) {
			$scope.countryList.push(regions.countries[i]);
		}

		// Default Country is Canada
		$scope.user.country = $scope.countryList[0];
		// Default set of states is Canadian Provinces
		$scope.states = $scope.statesList[$scope.user.country.code];
		$scope.user.state = $scope.states[0];
	};

	$scope.countries();

	$scope.countryChange = function(user) {
		$scope.user.country = user.country;
		$scope.states = $scope.statesList[$scope.user.country.code];
		$scope.user.state = $scope.states[0];
	};

	$scope.stateChange = function(user) {
		$scope.user.state = user.state;
	};

}

UsersAuthRegistrationCtrl.$inject = ['$scope', '$timeout', 'formValidation', 'regions'];
module.exports = UsersAuthRegistrationCtrl;