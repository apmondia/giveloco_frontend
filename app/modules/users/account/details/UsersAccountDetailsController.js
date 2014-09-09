/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsCtrl($rootScope, $scope, USER_EVENTS, alertService, Auth) {
	$scope.editing = false;

	var userData = $scope.user,
		updateSuccess = function() {
			localStorage.setItem('uname', userData.first_name); // Sets the new username for use around the site
			$rootScope.$broadcast('user.data.changed'); // Updates username on the fly via MainCtrl
			alertService.showAlert(USER_EVENTS.accountUpdateSuccess, 'alert-success');
		},
		updateError = function() {
			alertService.showAlert(USER_EVENTS.accountUpdateFailure, 'alert-danger');
		};

	$scope.updateUser = function(isValid) {
		if (isValid) {
			userData.put().then(updateSuccess, updateError);
		} else {
			alertService.showAlert(USER_EVENTS.formContainsErrors, 'alert-danger');
		}
	};

	$scope.userRoleIsNot = function(userRole) {
		return ($scope.currentUser.role !== userRole) ? true : false;
	};

	$scope.userRoleIs = function(userRole) {
		return ($scope.currentUser.role === userRole) ? true : false;
	};
}

UsersAccountDetailsCtrl.$inject = ['$rootScope', '$scope', 'USER_EVENTS', 'alertService', 'Auth'];
module.exports = UsersAccountDetailsCtrl;