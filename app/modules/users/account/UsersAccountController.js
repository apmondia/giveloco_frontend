'use strict';

function UsersAccountCtrl($rootScope, $scope) {
	$scope.user = $scope.currentUser;

// =======================================================================
//	Display state and country properly on state change
// =======================================================================
	$scope.chosenCountry = function() {
		if ($scope.user && $scope.user.country) {
			if ($scope.user.country.name === undefined) {
				return $scope.user.country;
			} else {
				return $scope.user.country.name;
			}
		} else {
			return "";
		}
	};

	$scope.chosenState = function() {
		if ($scope.user && $scope.user.state) {
			if ($scope.user.state.name === undefined) {
				return $scope.user.state;
			} else {
				return $scope.user.state.code;
			}
		} else {
			return "";
		}
	};
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountCtrl;
