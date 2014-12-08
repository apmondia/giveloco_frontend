/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsEditCtrl($rootScope, $scope, $timeout, $state, Auth, formValidation, regions, USER_EVENTS, alertService) {

	var user = $scope.user;

	/* =======================================================================
		Zip / Postal Code Validation
	======================================================================= */
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
		var countryList = $scope.countryList = [];

		// List only the first 2 items in the list of countries - Canada and U.S.
		for (var i=0; i < 2; i++) {
			$scope.countryList.push(regions.countries[i]);
		}

		if (user.country === null) {
			// Default country is Canada
			$scope.user.country = $scope.countryList[0];
		} else {
			var country;
			for (country in countryList) {
				if (user.country === countryList[country].name) {
					// Set the user's selected country
					$scope.user.country = countryList[country];
				}
			}
		}

		// Default set of states is defined by the selected country
		var states = $scope.states = $scope.statesList[$scope.user.country.code];
		if (user.state === null) {
			// Default state is the first in the list
			$scope.user.state = $scope.states[0];
		} else {
			var state;
			for (state in states) {
				if (user.state === states[state].code) {
					// Set the user's selected state / province
					$scope.user.state = states[state];
				}
			}
		}
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
		Format Phone Number
	======================================================================= */
	$scope.formatNumber = function() {
		if ($scope.user.phone !== null && $scope.user.phone !== undefined) {
			var phoneNum = $scope.user.phone.match(formValidation.phoneRegex);
			$scope.user.phone = '(' + phoneNum[1] + ') ' + phoneNum[2] + '-' + phoneNum[3];
		}
	};


	/* =======================================================================
		Set Cause Summary
	======================================================================= */
	$scope.setSummary = function(user) {
		$scope.user.description = user.description;
		user.summary = user.description.match(/([^.!?]{0,140})/i)[0];
		$scope.user.summary = user.summary;
	};


	/* =======================================================================
		Update User (Submit Form)
	======================================================================= */
	var userData = $scope.user,
		updateSuccess = function() {
			localStorage.setItem('uname', userData.first_name); // Sets the new username for use around the site
			$rootScope.$broadcast('user.data.changed'); // Updates username on the fly via MainCtrl
			$scope.countries();
			alertService.showAlert(USER_EVENTS.accountUpdateSuccess, 'alert-success');
			$timeout(function() {
				location.reload();
			}, 2000);
		},
		updateError = function() {
			alertService.showAlert(USER_EVENTS.accountUpdateFailure, 'alert-danger');
		};

	$scope.updateUser = function(isValid) {
		// Convert tags object into an array and set all tags to lowercase for submission
		var tags = user.tags.map(function(tag) {return tag.text.toLowerCase(); });
		if (isValid) {
			user.country = $scope.user.country.name;
			user.state = $scope.user.state.code;
			user.tag_list = tags;
			userData.put().then(updateSuccess, updateError);
		} else {
			alertService.showAlert(USER_EVENTS.formContainsErrors, 'alert-danger');
		}
	};

}

UsersAccountDetailsEditCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Auth', 'formValidation', 'regions', 'USER_EVENTS', 'alertService'];
module.exports = UsersAccountDetailsEditCtrl;
