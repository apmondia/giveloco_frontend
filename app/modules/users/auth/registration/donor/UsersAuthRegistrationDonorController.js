'use strict';

function UsersAuthRegistrationDonorCtrl($rootScope, $scope) {
	
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

UsersAuthRegistrationDonorCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationDonorCtrl;