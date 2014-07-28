'use strict';

function UsersAuthRegistrationCauseCtrl($rootScope, $scope) {
	
	$scope.signupCause = function() {
		var user = $scope.user;
		if ($scope.signupFormCause.$valid) {
			console.log('Sending request to server.');
			console.log(
				user.company
				);
		} else {
			console.log('Some fields are not valid.');
			console.log(
				user.company,
				user.email,
				user.password,
				user.website,
				user.street,
				user.country,
				user.state
				);
		}
	};

}

UsersAuthRegistrationCauseCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCauseCtrl;