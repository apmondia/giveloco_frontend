'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope) {

//	$scope.donorForm = true;

	$scope.toggleForm = function() {
		$scope.donorForm = ! $scope.donorForm;
	};

}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCtrl;