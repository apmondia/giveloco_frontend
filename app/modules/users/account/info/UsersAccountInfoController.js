/*jshint camelcase: false */
'use strict';

function UsersAccountInfoCtrl($rootScope, $scope, $http, Auth, alertService, AUTH_EVENTS) {

	$scope.user = angular.copy($rootScope.currentUser);

	var	updateSuccess = function(data) {
		alertService.showAlert(AUTH_EVENTS.updateSuccess, 'alert-success');
		$scope.user.current_password = null;
		$scope.user.password = null;
		$scope.user.password_confirmation = null;
		$scope.submitAttempted = false;
	},
		updateError = function() {
		alertService.showAlert(AUTH_EVENTS.passwordUpdateFailed, 'alert-danger');
		$scope.submitAttempted = false;
	};

	$scope.updateInfo = function(isValid) {
		if (isValid) {
			Auth.putUser($scope.user).then(updateSuccess, updateError);
			$scope.infoForm.$setPristine();
		} else {
			$scope.submitAttempted = true;
		}
	};
}

UsersAccountInfoCtrl.$inject = ['$rootScope', '$scope', '$http', 'Auth', 'alertService', 'AUTH_EVENTS'];
module.exports = UsersAccountInfoCtrl;
