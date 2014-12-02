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
			$scope.$broadcast('set-current-user');
		});
	};

	$scope.currentUserName = localStorage.getItem('uname');
	
	setCurrentUser();

	$rootScope.$on('user.data.changed', setCurrentUser);
	$rootScope.$on('logged-in', setCurrentUser);

/* =======================================================================
	System Notifications
======================================================================= */
	// $('body').prepend("<h1>made $rootScope hidden</h1>");
	// $rootScope.alertVisible = false;


/* =======================================================================
	Get Lists of Causes and Businesses (for Explore pages)
======================================================================= */
	// Get all users from server
	var users = Restangular.all('users');

	$scope.loading = true;
	// Filter users to populate list of Causes
	users.getList().then(function(user) {
        $scope.causes = _.filter(user, function(user){
            return user.role === USER_ROLES.cause && user.is_published === true && user.is_activated === true;
        });
        $scope.businesses = _.filter(user, function(user){
            return user.role === USER_ROLES.business && user.is_published === true && user.is_activated === true && user.sponsorships.length > 0;
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
		var i;
    	if (user.role === USER_ROLES.cause) {
    		var sponsorCount = 0;
    		for (i=0; i < user.sponsors.length; i++) {
    			if (user.sponsors[i].status === 'accepted') {
    				sponsorCount += 1;
    			}
    		}
    		if (sponsorCount === 0) {
	    		return 'No Sponsors';
	    	} else if (sponsorCount === 1) {
	    		return '1 Sponsor';
	    	} else {
	    		return sponsorCount + ' Sponsors';
	    	}
    	}

    	if (user.role === USER_ROLES.business) {
    		var sponsorshipCount = 0;
    		for (i=0; i < user.sponsorships.length; i++) {
    			if (user.sponsorships[i].status === 'accepted') {
    				sponsorshipCount += 1;
    			}
    		}
    		if (sponsorshipCount === 0) {
	    		return 'No Sponsorsed Causes';
	    	} else if (sponsorshipCount === 1) {
	    		return '1 Sponsorsed Cause';
	    	} else {
	    		return sponsorshipCount + ' Sponsorsed Causes';
	    	}
    	}
    };


}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Restangular', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;
