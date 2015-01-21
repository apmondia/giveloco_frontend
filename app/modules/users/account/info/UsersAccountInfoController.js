/*jshint camelcase: false */
'use strict';

function UsersAccountInfoCtrl($rootScope, $scope, $state, $http, Auth, alertService, AUTH_EVENTS, Restangular) {

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

	$scope.accountStatus = function() {
		if (!$scope.user || $scope.user.confirmed_at === null) {
			return 'unconfirmed';
		} else {
			return 'confirmed';
		}
	};

	$scope.user = {};
	function refreshProfileUser() {
		Restangular.one('users', $state.params["id"]).get().then(function (user) {
			$scope.user = user;
			$scope.$broadcast('set-profile-user', user);
		});
	}

	$scope.$on('refresh-profile-user', function(event) {
		refreshProfileUser();
	});

	refreshProfileUser();

}

UsersAccountInfoCtrl.$inject = ['$rootScope', '$scope', '$state', '$http', 'Auth', 'alertService', 'AUTH_EVENTS', 'Restangular'];
module.exports = UsersAccountInfoCtrl;
