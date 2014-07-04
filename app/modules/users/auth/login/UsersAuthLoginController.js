'use strict';

function UsersAuthLoginCtrl($rootScope, $scope) {
	
	$scope.login = function() {
		if ($scope.loginForm.$valid) {
			console.log('Sending request to server.');
		}
	};

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthLoginCtrl;