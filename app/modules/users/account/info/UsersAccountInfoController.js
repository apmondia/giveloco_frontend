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
		console.debug("is avlid?", isValid, $scope.draftUser);
		if (isValid) {
			Auth.putUser($scope.draftUser).then(updateSuccess, updateError);
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


	$scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		//console.debug('stateChangeStart');
		if ($scope.infoForm.$dirty) {
			//console.debug('stateChangeStart dirty');
			$scope.nextState = toState;
			$scope.nextStateParams = toParams;
			$scope.userAccountInfoConfirm.open({
				windowClass: 'confirm'
			});
			event.preventDefault();
		}
	});

	$scope.gotoNextState = function () {
		$scope.infoForm.$setPristine();
		$state.go($scope.nextState.name, $scope.nextStateParams);
		$scope.userAccountInfoConfirm.close();
	};

	$scope.cancelNextState = function () {
		$scope.userAccountInfoConfirm.close();
	};

	$scope.draftUser = {}; // <= needed to trigger Angular digest.  Dunno why.
	$scope.init = function () {
		$scope.draftUser = angular.copy($scope.user);
	};

	$scope.$on('set-profile-user', function (event, user) {
		$scope.init();
	});

	if ($scope.user) {
		$scope.init();
	} else {
		$scope.$emit('refresh-profile-user');
	}

}

UsersAccountInfoCtrl.$inject = ['$rootScope', '$scope', '$state', '$http', 'Auth', 'alertService', 'AUTH_EVENTS', 'Restangular'];
module.exports = UsersAccountInfoCtrl;
