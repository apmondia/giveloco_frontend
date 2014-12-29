/*jshint camelcase: false */
'use strict';

function UsersAccountChangePasswordCtrl($scope, $http, Auth, alertService, AUTH_EVENTS) {

	$scope.user = {
		id: $scope.currentUser.id,
		current_password: null,
		password: null
	};

	var	updateSuccess = function() {
		$scope.user.current_password = '';
		$scope.user.password = '';
		$scope.user.password_confirmation = '';
		alertService.showAlert(AUTH_EVENTS.passwordUpdated, 'alert-success');
	},
		updateError = function() {
		alertService.showAlert(AUTH_EVENTS.passwordUpdateFailed, 'alert-danger');
	};

	$scope.changePassword = function(isValid) {
		if (isValid) {
			Auth.updatePassword($scope.user).then(updateSuccess, updateError);
			$scope.changePasswordForm.$setPristine();
		}
	};
}

UsersAccountChangePasswordCtrl.$inject = ['$scope', '$http', 'Auth', 'alertService', 'AUTH_EVENTS'];
module.exports = UsersAccountChangePasswordCtrl;
