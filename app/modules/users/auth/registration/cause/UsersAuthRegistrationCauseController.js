'use strict';

function UsersAuthRegistrationCauseCtrl($rootScope, $scope) {

	$scope.causeForm = true;
	
	$scope.signupCause = function() {
		if ($scope.signupFormCause.$valid) {
			console.log('Sending request to server.');
		}
	};

}

UsersAuthRegistrationCauseCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCauseCtrl;