'use strict';

function UsersAccountInfoCtrl($rootScope, $scope) {
	$scope.account = 'Basic User Account Info goes here.';
}

UsersAccountInfoCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountInfoCtrl;