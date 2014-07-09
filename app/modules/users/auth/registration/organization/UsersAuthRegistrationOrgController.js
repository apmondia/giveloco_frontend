'use strict';

function UsersAuthRegistrationOrgCtrl($rootScope, $scope) {

	$scope.signupOrg = function() {
		if ($scope.signupFormOrg.$valid) {
			console.log('Sending request to server.');
		}
	};

}

UsersAuthRegistrationOrgCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationOrgCtrl;