'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope) {
	$scope.form = 'Signup Form goes here.';
}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCtrl;