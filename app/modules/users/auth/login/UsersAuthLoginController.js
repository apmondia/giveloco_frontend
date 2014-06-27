'use strict';

function UsersAuthLoginCtrl($rootScope, $scope) {
	$scope.form = 'Login form goes here.';
}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthLoginCtrl;