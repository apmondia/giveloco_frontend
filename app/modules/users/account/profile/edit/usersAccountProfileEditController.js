/*jshint camelcase: false */
'use strict';

function UsersAccountProfileEditCtrl($rootScope, $scope, $timeout, $state, Auth, formValidation, regions, USER_EVENTS, alertService, Restangular) {

	/* =======================================================================
		Zip / Postal Code Validation
	======================================================================= */
	$scope.$watch('country.code', function() {
		if ($scope.country) {
			if ($scope.country.code === 'CA') {
				$scope.zipRegex = formValidation.postalCodeRegex;
				$scope.zipPlaceholder = 'A1B 2C3';
			}
			if ($scope.country.code === 'US') {
				$scope.zipRegex = formValidation.zipCodeRegex;
				$scope.zipPlaceholder = '98765';
			}
		}
	});


	$scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		//console.debug('stateChangeStart');
		if ($scope.updateUserForm.$dirty) {
			//console.debug('stateChangeStart dirty');
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

	$scope.cancelNextState = function () {
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

		$scope.country = _.find(countryList, function (c) {
			return c.name == $scope.draftUser.country;
		});
		if (angular.isUndefined($scope.country)) {
				$scope.country = $scope.countryList[0];
		}

		var states = $scope.states = $scope.statesList[$scope.country.code];
		$scope.state = _.find(states, function (s) {
			return s.code == $scope.draftUser.state;
		});
		if (angular.isUndefined($scope.state)) {
			$scope.state = $scope.states[0];
		}

	};

	$scope.countryChange = function() {
		$scope.country = $scope.updateUserForm.country.$viewValue;
		$scope.states = $scope.statesList[ $scope.country.code ];
		$scope.state = $scope.states[0];
	};

	$scope.stateChange = function() {
		$scope.state = $scope.updateUserForm.state.$viewValue;
	};

	/* =======================================================================
		Format Phone Number
	======================================================================= */
	$scope.formatNumber = function() {
		if ($scope.draftUser.phone !== null && $scope.draftUser.phone !== undefined) {
			var phoneNum = $scope.draftUser.phone.match(formValidation.phoneRegex);
			$scope.draftUser.phone = '(' + phoneNum[1] + ') ' + phoneNum[2] + '-' + phoneNum[3];
		}
	};


	/* =======================================================================
		Set Cause Summary
	======================================================================= */
	$scope.setSummary = function(user) {
		$scope.draftUser.summary = $scope.draftUser.description.match(/([^.!?]{0,140})/i)[0];
	};

	$scope.summaryCharsRemaining = function() {
		var total = 0;
		if ($scope.draftUser && $scope.draftUser.summary) {
			total = $scope.draftUser.summary.length;
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
			alertService.showAlert(USER_EVENTS.accountUpdateSuccess, 'alert-success');
			$scope.$emit('refresh-profile-user');
			$state.go('account.profile.view');
			if ($scope.currentUser.id == $scope.draftUser.id) {
				//need to update global user
				Auth.refreshCurrentUser();
			}
		},
		updateError = function() {
			alertService.showAlert(USER_EVENTS.accountUpdateFailure, 'alert-danger');
		};

	$scope.updateUser = function(isValid) {
		if (isValid) {
			// Convert tags object into an array and set all tags to lowercase for submission
	//	console.debug("tarting: ", $scope.tags, $scope.campaigns, $scope.draftUser);
			var tags = $scope.draftUser.tags.map(function(tag) { return (angular.isDefined(tag.text) ? tag.text.toLowerCase() : tag); });
			var campaigns = $scope.draftUser.campaigns.map(function(tag) { return (angular.isDefined(tag.text) ? tag.text.toLowerCase() : tag); });
			var saveCopy = Restangular.copy($scope.draftUser);
			saveCopy.country = $scope.country.name;
			saveCopy.state = $scope.state.code;
			saveCopy.tag_list = tags;
			saveCopy.campaign_list = campaigns;
		//	console.debug("Saving: ", saveCopy);
			saveCopy.put().then(updateSuccess, updateError);
		} else {
			alertService.showAlert(USER_EVENTS.formContainsErrors, 'alert-danger');
		}
	};

	$scope.draftUser = {}; // <= needed to trigger Angular digest.  Dunno why.
	$scope.init = function () {
		$scope.draftUser = angular.copy($scope.user);
		$scope.countries();
		//console.debug("copied: ", $scope.draftUser);
	};

	$scope.$on('set-profile-user', function (event, user) {
		$scope.init();
	});

	if ($scope.user) {
		$scope.init();
	} else {
		$scope.$emit('refresh-profile-user');
	}

}

UsersAccountProfileEditCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Auth', 'formValidation', 'regions', 'USER_EVENTS', 'alertService','Restangular'];
module.exports = UsersAccountProfileEditCtrl;
