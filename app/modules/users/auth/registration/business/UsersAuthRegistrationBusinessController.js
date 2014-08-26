/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationBusinessCtrl($rootScope, $scope, $state, Auth, AUTH_EVENTS, alertService) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	$scope.user.role = 'business';
	
	
	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$scope.formSubmitted = false;
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('profile.business', {id:user.data.uid});
	};

	var error = function() {
		$scope.formSubmitted = false;
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signupBusiness = function(isValid) {
		if (isValid) {
			$scope.formSubmitted = true;
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationBusinessCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationBusinessCtrl;