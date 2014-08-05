'use strict';

function UsersAuthLoginCtrl($rootScope, $scope, Auth, AUTH_EVENTS) {
	
	$scope.login = function() {
		if ($scope.loginForm.$valid) {
			var promise = Auth.login($scope.credentials);
			promise.then(success, error);
		}
	};

	var success = function(response) {
		// Change this so that it uses cookies later
		localStorage.setItem('auth_token', response.data.auth_token);
		$location.path('/');
	};

	var error = function(response) {
		$scope.wrongCredentials = true;
	};

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope', 'Auth', 'AUTH_EVENTS'];
module.exports = UsersAuthLoginCtrl;