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

	//here we should check if there is a current user.

	$scope.userRoles = USER_ROLES;
	$rootScope.isLoggedIn = Auth.isLoggedIn;
	// $rootScope.$on('user.data.changed', function( ){
	// 	Auth.refreshCurrentUser();
	// });
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


		$scope.hasDefaultImage = function (user) {
			return user.images.profile_picture.original.indexOf('default.png') >= 0;
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

		$timeout(function () {
			Auth.setCurrentUser();
		}, 0);

}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Restangular', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;
