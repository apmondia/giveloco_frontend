'use strict';

function commonInit($rootScope, $state, Auth, AUTH_EVENTS, $cookieStore, alertService) {
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

	// Check if user is authorized to access certain areas of the site
	$rootScope.$on('$stateChangeStart', function (event, next, toState) {
		// Check if the user's ID matches the state params' ID (used mainly for user account pages)
		var userIsAuthorized = function() {
			var uid = $cookieStore.get('uid');
			var sid = parseInt(toState.id);

			return ((uid === sid) && Auth.isAuthorized) ? true : false;
		};
		
		// Check if authorization is required from state data (defined in module config files)
		if (next.data.authRequired) {
			if (!userIsAuthorized()) {
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
		}
	});
	
}

commonInit.$inject = ['$rootScope', '$state', 'Auth', 'AUTH_EVENTS', '$cookieStore', 'alertService'];
module.exports = commonInit;