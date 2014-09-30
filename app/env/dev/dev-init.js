'use strict';

function devInit($rootScope, Restangular, apiConfig, ENV, $window) {

	$rootScope.$broadcast('ENV_DEV');
	$rootScope.serverUrl = ENV.DEV.serverUrl;
/* =======================================================================
	Restangular BaseURL Config
======================================================================= */
	Restangular.setBaseUrl(apiConfig.API.baseUrl);

/* =======================================================================
	Stripe Configuration
======================================================================= */
	$window.Stripe.setPublishableKey(apiConfig.Stripe.DEV.public_key);
	
}

devInit.$inject = ['$rootScope', 'Restangular', 'apiConfig', 'ENV', '$window'];
module.exports = devInit;