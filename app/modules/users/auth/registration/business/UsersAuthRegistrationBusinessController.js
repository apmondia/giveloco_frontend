'use strict';

function UsersAuthRegistrationBusinessCtrl($rootScope, $scope) {
	
	$scope.signupBusiness = function() {
		if ($scope.signupFormBusiness.$valid) {
			console.log('Sending request to server.');
		}
	};

}

UsersAuthRegistrationBusinessCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationBusinessCtrl;