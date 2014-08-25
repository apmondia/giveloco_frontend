'use strict';

function UsersAuthRegistrationCauseCtrl($rootScope, $scope) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	$scope.user.role = 'cause';


	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('profile.cause', {id:user.data.uid});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signupCause = function(isValid) {
		if (isValid) {
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationCauseCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCauseCtrl;