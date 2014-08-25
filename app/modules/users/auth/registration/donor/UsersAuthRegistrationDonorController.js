'use strict';

function UsersAuthRegistrationDonorCtrl($rootScope, $scope, $state, Auth, AUTH_EVENTS, alertService) {
	
	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	$scope.user.role = 'individual';

	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('home', {id:user.data.uid});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signup = function(isValid) {
		if (isValid) {
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationDonorCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationDonorCtrl;