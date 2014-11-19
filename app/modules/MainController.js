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
			$scope.currentUser = null;
		});
	};

	$scope.currentUser = null;
	$rootScope.isLoggedIn = Auth.isLoggedIn;
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
	$rootScope.$on('user.data.changed', setCurrentUser);
	$rootScope.$on('logged-in', setCurrentUser);


/* =======================================================================
	System Notifications
======================================================================= */
	$rootScope.alertVisible = false;


/* =======================================================================
	Get Lists of Causes and Businesses (for Explore pages)
======================================================================= */
	// Get all users from server
	var users = Restangular.all('users');

	$scope.loading = true;
	// Filter users to populate list of Causes
	users.getList().then(function(user) {
        $scope.causes = _.filter(user, function(user){
            return user.role === 'cause' && user.is_published === true && user.is_activated === true && user.sponsors.length > 0;
        });
        $scope.businesses = _.filter(user, function(user){
            return user.role === 'business' && user.is_published === true && user.is_activated === true && user.sponsorships.length > 0;
        });
        $scope.loading = false;
    });


/* =======================================================================
	Navbar Collapsible menu
======================================================================= */
    $scope.closeNavbar = function() {
    	$scope.navbarCollapsed = true;
    };


/* =======================================================================
	Pluralized Tooltip / Popover for Grid Items
======================================================================= */
	$scope.pluralizedUserTooltip = function(user) {
    	if (user.role === 'cause') {
    		if (user.sponsors.length === 0) {
	    		return 'No Sponsors';
	    	} else if (user.sponsors.length === 1) {
	    		return '1 Sponsor';
	    	} else {
	    		return user.sponsors.length + ' Sponsors';
	    	}
    	}

    	if (user.role === 'business') {
    		if (user.sponsorships.length === 0) {
	    		return 'No Sponsorsed Causes';
	    	} else if (user.sponsorships.length === 1) {
	    		return '1 Sponsorsed Cause';
	    	} else {
	    		return user.sponsorships.length + ' Sponsorsed Causes';
	    	}
    	}
    };


}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Restangular', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;