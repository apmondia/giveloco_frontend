/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationCauseCtrl($rootScope, $scope, $state, Auth, AUTH_EVENTS, alertService) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	var user = $scope.user;
	user.role = 'cause';


	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$scope.showSpinner = false;
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('account.profile.view', {id:user.data.id});
	};

	var error = function(response) {
		var msg = response.data.errors[0];
		$scope.showSpinner = false;
		alertService.showAlert(msg, 'alert-danger');
	};

	$scope.signupCause = function(isValid) {
		if (isValid) {
			$scope.showSpinner = true;
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationCauseCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationCauseCtrl;
