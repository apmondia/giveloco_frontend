'use strict';

function UsersAuthLoginCtrl($rootScope, $scope, $state, $cookieStore, Auth, AUTH_EVENTS, alertService) {

	$rootScope.$on('logged-in', function () {
		if ($rootScope.currentUser.role == 'business') {
			$state.go('profile.business', $rootScope.currentUser);
		} else {
			$state.go('profile.cause', $rootScope.currentUser);
		}
	});

	var success = function() {
		alertService.showAlert(AUTH_EVENTS.loginSuccess, 'alert-success');
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.loginFailed, 'alert-danger');
	};

	$scope.credentials = {
		email: '',
		password: ''
	};

	$scope.login = function(isValid) {
		if (isValid) {
			Auth.login($scope.credentials).then(success, error);
		}
	};

	// Logout function is in MainCtrl

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthLoginCtrl;
