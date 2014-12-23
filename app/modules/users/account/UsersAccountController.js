'use strict';

function UsersAccountCtrl($rootScope, $scope) {
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
}

UsersAccountCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountCtrl;
