'use strict';

function UsersAccountCtrl($rootScope, $scope, alertService, apiConfig, $http, AUTH_EVENTS) {
// =======================================================================
//	Display state and country properly on state change
// =======================================================================
	$scope.chosenCountry = function() {
		if ($scope.currentUser && $scope.currentUser.country) {
			if ($scope.currentUser.country.name === undefined) {
				return $scope.currentUser.country;
			} else {
				return $scope.currentUser.country.name;
			}
		} else {
			return '';
		}
	};

	$scope.chosenState = function() {
		if ($scope.currentUser && $scope.currentUser.state) {
			if ($scope.currentUser.state.name === undefined) {
				return $scope.currentUser.state;
			} else {
				return $scope.currentUser.state.code;
			}
		} else {
			return '';
		}
	};

	$scope.confirmationSent = false;

	$scope.resendInstructions = function () {
		return $http.post(apiConfig.API.user.resendConfirmation,
		{
			'format': 'json'
		}).then(function(){
			$scope.confirmationSent = true;
			alertService.showSuccess(AUTH_EVENTS.confirmationResent);
		});
	};

	$scope.accountStatus = function() {
		if ($scope.currentUser.confirmed_at === null) {
			return 'unconfirmed';
		} else {
			return 'confirmed';
		}
	};
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope', 'alertService', 'apiConfig', '$http', 'AUTH_EVENTS'];
module.exports = UsersAccountCtrl;
