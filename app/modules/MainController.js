/*jshint camelcase: false */
'use strict';
// MainCtrl is set in the index.html file
function MainCtrl($rootScope, $scope, $timeout, $state, Restangular, Auth, USER_ROLES, SponsorService, alertService) {

/* =======================================================================
	Session Control
======================================================================= */
	$scope.logout = function() {
		Auth.logout().then(function() {
			$state.go('auth.login');
		});
	};

	$scope.isSponsoring = function(user) {
		if (!user.id) {
			return false;
		}
		var result = false;
		angular.forEach($rootScope.sponsorships, function (value) {
			if (value.cause.id == user.id) {
				result = true;
			}
		});
		return result;
	};

	function updateSponsorships(user) {
		//console.error(user);
		SponsorService.getSponsoredCauses(user).then(function (data) {
			$rootScope.sponsorships = data;
		}, function () {
			alertService.showDanger("Could not retrieve list of sponsorships");
		});
	};

	$rootScope.$on('set-current-user', function (event, user) {
	//	console.debug("set-current-user with",user);
		if (!$rootScope.sponsorships) {
			//load up here
			updateSponsorships(user);
		}
	});

	$rootScope.$on('refresh-current-user-sponsorships', function (event) {
	//	console.debug("sponsorships changed ",$rootScope.currentUser);
		updateSponsorships($rootScope.currentUser);
	});


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


	function reloadUsers() {
		$scope.loading = true;
		// Filter users to populate list of Causes
		var users = Restangular.all('users');
		users.getList().then(function(users) {
					$scope.all_users = users;
					$scope.causes = _.filter(users, function(user){
							return user.role === USER_ROLES.cause && user.is_published === true && user.is_activated === true;
					});
					$scope.businesses = _.filter(users, function(user){
							return user.role === USER_ROLES.business && user.is_published === true && user.is_activated === true && user.sponsorships.length > 0;
					});
					$scope.loading = false;
					$scope.$broadcast('set-all-users');
			});
	}

	reloadUsers();

	$scope.$on('sponsorshipsChanged', function () {
		reloadUsers();
	});
	$scope.$on('logged-in', function () {
		reloadUsers();
	});
	$scope.$on('refresh-all-users', function () {
		reloadUsers();
	});


/* =======================================================================
	Navbar Collapsible menu
======================================================================= */
    $scope.closeNavbar = function() {
    	$scope.navbarCollapsed = true;
    };


		$scope.hasDefaultImage = function (user) {
			if (user.images && user.images.profile_picture) {
				return user.images.profile_picture.original.indexOf('default.png') >= 0;
			} else {
				return true;
			}
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


		$scope.allTags = function(user_array) {
			var tags = {};
			angular.forEach(user_array, function (user) {
				angular.forEach(user.tags, function(tag) {
					tags[tag] = true;
				});
				angular.forEach(user.campaigns, function (tag) {
					tags[tag] = true;
				});
			});
			var allTags = _.keys(tags);
			return allTags;
		};

		$scope.allCampaigns = function(user_array) {
			var tags = {};
			angular.forEach(user_array, function (user) {
				angular.forEach(user.campaigns, function(tag) {
					tags[tag] = true;
				});
			});
			var allTags = _.keys(tags);
			return allTags;
		};


}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Restangular', 'Auth', 'USER_ROLES', 'SponsorService', 'alertService'];
module.exports = MainCtrl;
