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
		$scope.formSubmitted = false;
		$rootScope.$broadcast('logged-in');
		alertService.showAlert(AUTH_EVENTS.signupSuccess, 'alert-success');
		$state.go('profile.cause', {id:user.data.uid});
	};

	var error = function() {
		$scope.formSubmitted = false;
		alertService.showAlert(AUTH_EVENTS.signupFailed, 'alert-danger');
	};

	$scope.signupCause = function(isValid) {
		if (isValid) {
			$scope.formSubmitted = true;
			user.country = $scope.user.country.name;
			user.state = $scope.user.state.code;
			user.tag_list = $scope.user.tag_list.replace(/\s?[,]\s?/g, ',').split(',');
			Auth.signup($scope.user).then(success, error);
			console.log($scope.user);
		} else {
			user.country = $scope.user.country.name;
			user.state = $scope.user.state.code;
			user.tag_list = $scope.user.tag_list.replace(/\s?[,]\s?/g, ',').split(',');
			console.log($scope.user);
		}
	};

}

UsersAuthRegistrationCauseCtrl.$inject = ['$rootScope', '$scope', '$state', 'Auth', 'AUTH_EVENTS', 'alertService'];
module.exports = UsersAuthRegistrationCauseCtrl;