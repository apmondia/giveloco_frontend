/*jshint camelcase: false */
'use strict';

function commonInit($rootScope, $state, Auth, AUTH_EVENTS, $cookieStore, alertService, $location, $anchorScroll) {
	$rootScope.$state = $state;

	// Set bodyClasses, pageTitle, and pageDescription on state change (ui-router)
    $rootScope.$on('$stateChangeSuccess', function(event, toState){
		if ( angular.isDefined( toState.data.pageTitle ) ) {
			$rootScope.pageTitle = toState.data.pageTitle;
			$rootScope.pageDescription = toState.data.pageDescription;
			$rootScope.bodyClasses = toState.data.moduleClasses + ' ' + toState.data.pageClasses;
		}
	});

    // Make sure the page scrolls to the top on all state transitions
	$rootScope.$on('$viewContentLoaded', function(){
		if (document.readyState === 'complete') {
			window.scrollTo(0, 0);
		}
	});


/* =======================================================================
	User authentication check on state change (requires authentication)
======================================================================= */
	$rootScope.$on('$stateChangeStart', function (event, next) {
		if (next.data.authRequired && Auth.isLoggedIn() === false) {
			event.preventDefault();
			// user is not logged in
			$state.go('auth.login');
			alertService.showAlert(AUTH_EVENTS.notAuthenticated, 'alert-danger');
		}
	});

/* =======================================================================
	User authentication check on state change (restricts sensitive data)
======================================================================= */
	$rootScope.$on('$stateChangeStart', function (event, next, toState) {
		if (next.data.restricted) {
			Auth.getCurrentUser(function(user) {

				// Validate the user's ID
				var sid = parseInt(toState.id);

				// Restrict access if user is not allowed.
				if ( user == null || angular.isUndefined(user) || !(sid === user.id || user.role === 'admin') ) {
					event.preventDefault();
					if (Auth.isLoggedIn() === true) {
						// user is not allowed
						$state.go('home');
						alertService.showAlert(AUTH_EVENTS.notAuthorized, 'alert-danger');
					} else {
						// user is not logged in
						$state.go('auth.login');
						alertService.showAlert(AUTH_EVENTS.notAuthenticated, 'alert-danger');
					}
				}
	    	});

		}
	});


/* =======================================================================
	Login Required
======================================================================= */
	$rootScope.$on('$stateChangeStart', function (event, next) {
		if (next.data.loginRequired) {
			if ($rootScope.isLoggedIn === false) {
				event.preventDefault();
				$state.go('auth.login');
			} else {
				// Continue to destination
			}
		}
	});

}

commonInit.$inject = ['$rootScope', '$state', 'Auth', 'AUTH_EVENTS', '$cookieStore', 'alertService', '$location', '$anchorScroll'];
module.exports = commonInit;
