'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope) {
	
	$scope.donorForm = true;

	$scope.showForm = function(business, cause, donor) {
		if (business == true) {
			$scope.businessForm = true;
			$scope.causeForm = false;
			$scope.donorForm = false;
		} else if (cause == true) {
			$scope.businessForm = false;
			$scope.causeForm = true;
			$scope.donorForm = false;
		} else {
			$scope.businessForm = false;
			$scope.causeForm = false;
			$scope.donorForm = true;
		}
	};

	$scope.showCauseForm = function() {
		$scope.businessForm = true;
		$scope.donorForm = false;
		$scope.causeForm = false;
	};

	$scope.signup = function() {
		if ($scope.signupForm.$valid) {
			console.log('Sending request to server.');
		}
	};

}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCtrl;