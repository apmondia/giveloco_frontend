'use strict';
// Controller naming conventions should start with an uppercase letter
function MainCtrl($scope, Auth, USER_ROLES) {

	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = Auth.isAuthorized;

	$scope.setCurrentUser = function (user) {
		$scope.currentUser = user;
	};
	
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$scope', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;