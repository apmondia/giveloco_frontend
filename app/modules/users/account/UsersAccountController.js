'use strict';

function UsersAccountCtrl($rootScope, $scope) {
	$scope.user = $scope.currentUser;

// =======================================================================
//	Display state and country properly on state change
// =======================================================================
	$scope.chosenCountry = function() {
		if ($scope.user.country.name === undefined) {
			return $scope.user.country;
		} else {
			return $scope.user.country.name;
		}
	};

	$scope.chosenState = function() {
		if ($scope.user.state.name === undefined) {
			return $scope.user.state;
		} else {
			return $scope.user.state.code;
		}
	};
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountCtrl;