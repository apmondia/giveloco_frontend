'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope) {
	
	$scope.signup = function() {
		if ($scope.signupForm.$valid) {
			console.log('Sending request to server.');
		}
	};

	$scope.standardForm = true;

	$scope.toggleForm = function() {
		$scope.donorForm = ! $scope.donorForm;
	};

}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCtrl;