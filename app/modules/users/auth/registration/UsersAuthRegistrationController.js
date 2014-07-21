'use strict';

function UsersAuthRegistrationCtrl($scope, $timeout, formValidation, regions) {

	/* =======================================================================
		Form Validation
	======================================================================= */
	// Cause Name
	$scope.nameRegex = formValidation.alphaNum;

	// Email Address
	$scope.emailRegex = formValidation.emailRegex;

	// Website
	$scope.websiteRegex = formValidation.websiteRegex;

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

	var statesList = regions.states;

	$scope.init = function() {
		$scope.countryList = [];

		// List only the first 2 items in the list of countries - Canada and U.S.
		for (var i=0; i < 2; i++) {
			$scope.countryList.push(regions.countries[i]);
		}

		// Default Country is Canada
		$scope.user.country = $scope.countryList[0];
		
		// Default set of states is Canadian Provinces
		$scope.states = statesList[$scope.user.country.code];
		$scope.user.state = $scope.states[0];
	};

	$scope.init();

	$scope.countryChange = function(user.country) {
		$scope.user.country = user.country;
		$scope.states = statesList[user.country.code];
		$scope.user.state = $scope.states[0];
	};

	$scope.stateChange = function(user.state) {
		$scope.user.state = user.state;
	};

}

UsersAuthRegistrationCtrl.$inject = ['$scope', '$timeout', 'formValidation', 'regions'];
module.exports = UsersAuthRegistrationCtrl;