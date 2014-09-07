/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsCtrl($rootScope, $scope, USER_EVENTS, alertService) {
	$scope.showSpinner = false;

	var userData = $scope.user,
		updateSuccess = function() {
			localStorage.setItem('uname', userData.first_name);
			$rootScope.$broadcast('user.data.changed');
			alertService.showAlert(USER_EVENTS.accountUpdateSuccess, 'alert-success');
		},
		updateError = function() {
			alertService.showAlert(USER_EVENTS.accountUpdateFailure, 'alert-danger');
		};

	$scope.updateUser = function(isValid) {
		if (isValid) {
			$scope.showSpinner = true;
			userData.put().then(updateSuccess, updateError);
		} else {
			alertService.showAlert(USER_EVENTS.formContainsErrors, 'alert-danger');
		}
	};
}

UsersAccountDetailsCtrl.$inject = ['$rootScope', '$scope', 'USER_EVENTS', 'alertService'];
module.exports = UsersAccountDetailsCtrl;