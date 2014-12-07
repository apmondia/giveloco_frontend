// These routes are to define any app-level paths to modules.
// For module-level route definitions, use the Routes.js files found in the module folders.

'use strict';

function appRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

/* ==========================================================================
    Include AuthInterceptor for token-based authentication
========================================================================== */
	$httpProvider.interceptors.push('AuthInterceptor');

/* ==========================================================================
    Add hasbang prefix for SEO and HTML5 mode to remove #! from the URL
========================================================================== */
	// Html5 mode requires server-side configuration. See http://bit.ly/1qLuJ0v
	$locationProvider.html5Mode(true).hashPrefix('!');
	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise('/');

/* ==========================================================================
    Location States (Home)
========================================================================== */
	var home = {
			name: 'home', // state name
			url: '/', // url path that activates this state
			template: '<div ui-view></div>',
			controller: function($state) {
				$state.go('home.guest');
	        },
	        data: {
				moduleClasses: '', // assign a module class to the <body> tag
				pageClasses: '', // assign a page-specific class to the <body> tag
				pageTitle: '', // set the title in the <head> section of the index.html file
				pageDescription: '' // meta description in <head>
			}
		},
		guest = {
			name: 'home.guest',
			// url: '',
			template: '<div home-view></div>', // generate the Directive "homeView" - when calling the directive in HTML, the name must not be camelCased
			data: {
				moduleClasses: 'page',
				pageClasses: 'home',
				pageTitle: 'Home',
				pageDescription: 'Taliflo helps you invest in your community with your everyday purchases. A portion of every gift certificate purchased goes towards a good cause.'
			}
		};

	$stateProvider.state(home);
	$stateProvider.state(guest);

}

appRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
module.exports = appRoutes;
