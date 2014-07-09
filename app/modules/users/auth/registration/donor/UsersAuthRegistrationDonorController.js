'use strict';

function UsersAuthRegistrationDonorCtrl($rootScope, $scope) {
	
	$scope.signup = function() {
		if ($scope.signupForm.$valid) {
			console.log('Sending request to server.');
		}
	};

}

UsersAuthRegistrationDonorCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationDonorCtrl;