/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationDonorCtrl($rootScope, $scope, $state, Auth, AUTH_EVENTS, alertService) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	// $scope.user.role = 'individual';
	$scope.user = {
		role: 'individual',
		first_name: null,
		last_name: null,
		email: null,
		password: null
	};

	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function() {
		$scope.showSpinner = false;
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('dashboard');
	};

	var error = function() {
		$scope.showSpinner = false;
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signup = function(isValid) {
		if (isValid) {
			$scope.showSpinner = true;
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationDonorCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationDonorCtrl;
