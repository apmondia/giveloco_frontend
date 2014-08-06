'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope, $state, $cookieStore, Restangular, Auth, AUTH_EVENTS, alertService, formValidation, regions) {

	/* =======================================================================
		User Data for Form Submission
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


	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('profile', {id:user.data.uid});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signup = function(isValid) {
		if (isValid) {
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'Restangular', 'Auth', 'AUTH_EVENTS', 'alertService', 'formValidation', 'regions'];
module.exports = UsersAuthRegistrationCtrl;