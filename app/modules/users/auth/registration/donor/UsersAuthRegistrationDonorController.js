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
	var success = function(user) {
		$scope.formSubmitted = false;
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('explore.causes', {id:user.data.uid});
	};

	var error = function() {
		$scope.formSubmitted = false;
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signup = function(isValid) {
		if (isValid) {
			$scope.formSubmitted = true;
			Auth.signup($scope.user).then(success, error);
			console.log($scope.user);
		}
	};

}

UsersAuthRegistrationDonorCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationDonorCtrl;