'use strict';

function UsersAuthRegistrationBusinessCtrl($rootScope, $scope) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	$scope.user.role = 'business';
	
	
	/* =======================================================================
		Form Submission
	======================================================================= */
	var success = function(user) {
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('profile.business', {id:user.data.uid});
	};

	var error = function() {
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signupBusiness = function(isValid) {
		if (isValid) {
			Auth.signup($scope.user).then(success, error);
		}
	};

}

UsersAuthRegistrationBusinessCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationBusinessCtrl;