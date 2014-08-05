'use strict';
// Controller naming conventions should start with an uppercase letter
function MainCtrl($rootScope, $scope, $state, $cookieStore, Restangular, Auth, AUTH_EVENTS, USER_ROLES, alertService) {

/* =======================================================================
	Session Control
======================================================================= */
	$scope.logout = function() {
		Auth.logout().then(function() {
			$state.go('auth.login');
		}).then(alertService.showAlert(AUTH_EVENTS.logoutSuccess, 'alert-success'));
	};

	$scope.currentUser = null;
	$scope.isLoggedIn = Auth.isLoggedIn;
//	$scope.isAuthorized = Auth.isAuthorized;
	$scope.userRoles = USER_ROLES;

	var setCurrentUser = function() {
		Restangular.one('users', $cookieStore.get('uid')).get().then(function(currentUser){
			$scope.currentUser = currentUser;
		});
	}
	
	setCurrentUser();
	$rootScope.$on('logged-in', setCurrentUser);


/* =======================================================================
	System Notifications
======================================================================= */
	$rootScope.alertVisible = false;
	
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$state', '$cookieStore', 'Restangular', 'Auth', 'AUTH_EVENTS', 'USER_ROLES', 'alertService'];
module.exports = MainCtrl;