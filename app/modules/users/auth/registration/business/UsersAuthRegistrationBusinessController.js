/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationBusinessCtrl($rootScope, $scope, $state, Auth, AUTH_EVENTS, alertService) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	var user = $scope.user;
	user.role = 'business';


	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$scope.showSpinner = false;
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('account.details.view', {id:user.data.id});
	};

	var error = function() {
		$scope.showSpinner = false;
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signupBusiness = function(isValid) {
		if (isValid) {
			$scope.showSpinner = true;
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationBusinessCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationBusinessCtrl;
