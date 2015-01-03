/*jshint camelcase: false */
'use strict';

function UsersAccountProfileEditCtrl($rootScope, $scope, $timeout, $state, Auth, formValidation, regions, USER_EVENTS, alertService, Restangular) {

	$scope.user = angular.copy($rootScope.currentUser);

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


	$scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		if ($scope.updateUserForm.$dirty) {
			$scope.nextState = toState;
			$scope.nextStateParams = toParams;
			$scope.usersAccountProfileEditConfirmModal.open({
				windowClass: 'confirm'
			});
			event.preventDefault();
		}
	});

	$scope.gotoNextState = function () {
		$scope.updateUserForm.$setPristine();
		$state.go($scope.nextState.name, $scope.nextStateParams);
		$scope.usersAccountProfileEditConfirmModal.close();
	};


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

		if ($scope.user.country === null) {
			// Default country is Canada
			$scope.user.country = $scope.countryList[0];
		} else {
			var country;
			for (country in countryList) {
				if ($scope.user.country === countryList[country].name) {
					// Set the user's selected country
					$scope.user.country = countryList[country];
				}
			}
		}

		// Default set of states is defined by the selected country
		var states = $scope.states = $scope.statesList[$scope.user.country.code];
		if ($scope.user.state === null) {
			// Default state is the first in the list
			$scope.user.state = $scope.states[0];
		} else {
			var state;
			for (state in states) {
				if ($scope.user.state === states[state].code) {
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

	$scope.summaryCharsRemaining = function() {
		var total = 0;
		if ($scope.user && $scope.user.summary) {
			total = $scope.user.summary.length;
		}
		return 140 - total;
	};

	/* =======================================================================
		Update User (Submit Form)
	======================================================================= */
	var updateSuccess = function() {
			// localStorage.setItem('uname', userData.first_name); // Sets the new username for use around the site
			// $scope.$emit('user.data.changed'); // Updates username on the fly via MainCtrl
			$scope.updateUserForm.$setPristine();
			$scope.countries();
			Auth.refreshCurrentUser();
			alertService.showAlert(USER_EVENTS.accountUpdateSuccess, 'alert-success');
			$state.go('account.profile.view');
		},
		updateError = function() {
			alertService.showAlert(USER_EVENTS.accountUpdateFailure, 'alert-danger');
		};

	$scope.updateUser = function(isValid) {
		if (isValid) {
			// Convert tags object into an array and set all tags to lowercase for submission
			var tags = $scope.user.tags.map(function(tag) {return tag.text.toLowerCase(); });
			var saveCopy = Restangular.copy($scope.user);
			saveCopy.country = $scope.user.country.name;
			saveCopy.state = $scope.user.state.code;
			saveCopy.tag_list = tags;
			saveCopy.put().then(updateSuccess, updateError);
		} else {
			alertService.showAlert(USER_EVENTS.formContainsErrors, 'alert-danger');
		}
	};

}

UsersAccountProfileEditCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Auth', 'formValidation', 'regions', 'USER_EVENTS', 'alertService','Restangular'];
module.exports = UsersAccountProfileEditCtrl;
