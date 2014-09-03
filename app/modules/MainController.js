/*jshint camelcase: false */
'use strict';
// MainCtrl is set in the index.html file
function MainCtrl($rootScope, $scope, $timeout, $state, Restangular, Auth, USER_ROLES) {

/* =======================================================================
	Session Control
======================================================================= */
	$scope.logout = function() {
		Auth.logout().then(function() {
			$state.go('auth.login');
		});
	};

	$scope.currentUser = null;
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.userRoles = USER_ROLES;

	var setCurrentUser = function() {
		Auth.getCurrentUser().then(function(userData){
			$scope.currentUser = userData;
			localStorage.setItem('uname', userData.first_name);
			$scope.currentUserName = userData.first_name;
		});
	};
	
	setCurrentUser();
	$scope.currentUserName = localStorage.getItem('uname');
	$rootScope.$on('logged-in', setCurrentUser);


/* =======================================================================
	System Notifications
======================================================================= */
	$rootScope.alertVisible = false;

	console.log('Main controller');
	
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Restangular', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;